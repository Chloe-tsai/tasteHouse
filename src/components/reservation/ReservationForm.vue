<script setup>
import { computed, reactive, ref } from 'vue'

// Reservation／Form (123:142) — front-end only: v-model + required-field validation,
// submit shows an inline confirmation summary (no network request).

const pad = (n) => String(n).padStart(2, '0')
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const addDays = (n) => {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d
}

// online booking is open for the next 30 days
const minDate = toISO(new Date())
const maxDate = toISO(addDays(30))

const guestOptions = [1, 2, 3, 4, 5, 6]

// 午餐 11:30–14:30 / 晚餐 17:30–22:00 — seatings every 30 minutes
const timeGroups = [
  { label: '午餐', slots: ['11:30', '12:00', '12:30', '13:00', '13:30'] },
  { label: '晚餐', slots: ['17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'] },
]

const initialForm = () => ({
  date: toISO(addDays(1)),
  guests: 2,
  time: '18:30',
  name: '',
  phone: '',
  email: '',
  note: '',
  agree: false,
})

const form = reactive(initialForm())
const errors = reactive({})
const submitted = ref(null)

const rules = {
  date: (v) => {
    if (!v) return '請選擇用餐日期'
    if (v < minDate || v > maxDate) return '線上訂位僅開放未來 30 天座席'
    return ''
  },
  guests: (v) => (v ? '' : '請選擇用餐人數'),
  time: (v) => (v ? '' : '請選擇用餐時段'),
  name: (v) => (v.trim() ? '' : '請輸入訂位姓名'),
  phone: (v) => {
    if (!v.trim()) return '請輸入手機號碼'
    return /^09\d{2}-?\d{3}-?\d{3}$/.test(v.trim()) ? '' : '手機號碼格式為 09xx-xxx-xxx'
  },
  email: (v) => {
    if (!v.trim()) return '請輸入電子郵件'
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : '電子郵件格式不正確'
  },
  agree: (v) => (v ? '' : '請勾選同意訂位須知與取消政策'),
}

function validateField(key) {
  errors[key] = rules[key](form[key])
}

function mealLabel(time) {
  const group = timeGroups.find((g) => g.slots.includes(time))
  return group ? `${group.label} ${time}` : time
}

const summary = computed(() => {
  const s = submitted.value
  if (!s) return []
  return [
    { label: '用餐日期', value: s.date.replaceAll('-', ' / ') },
    { label: '用餐人數', value: `${s.guests} 位` },
    { label: '用餐時段', value: mealLabel(s.time) },
    { label: '姓名', value: s.name },
    { label: '手機號碼', value: s.phone },
    { label: '電子郵件', value: s.email },
    ...(s.note.trim() ? [{ label: '備註需求', value: s.note.trim() }] : []),
  ]
})

function onSubmit(e) {
  Object.keys(rules).forEach(validateField)
  const firstInvalid = Object.keys(rules).find((k) => errors[k])
  if (firstInvalid) {
    submitted.value = null
    e.target.querySelector(`[name="${firstInvalid}"]`)?.focus()
    return
  }
  submitted.value = { ...form }
}

function onReset() {
  Object.assign(form, initialForm())
  Object.keys(errors).forEach((k) => (errors[k] = ''))
  submitted.value = null
}
</script>

<template>
  <div class="r-form">
    <h2 class="r-form__title">訂位資料</h2>
    <p class="r-form__desc">請填寫以下資訊，我們將寄送確認信至您的 Email。</p>

    <form class="r-form__fields" novalidate @submit.prevent="onSubmit">
      <div class="row row--3">
        <div class="field">
          <label class="field__label" for="r-date">用餐日期</label>
          <input
            id="r-date"
            v-model="form.date"
            class="field__control"
            :class="{ 'field__control--error': errors.date }"
            type="date"
            name="date"
            :min="minDate"
            :max="maxDate"
            required
            :aria-invalid="!!errors.date"
            aria-describedby="r-date-err"
            @change="validateField('date')"
          />
          <p v-if="errors.date" id="r-date-err" class="field__error">{{ errors.date }}</p>
        </div>

        <div class="field">
          <label class="field__label" for="r-guests">用餐人數</label>
          <select
            id="r-guests"
            v-model.number="form.guests"
            class="field__control field__control--select"
            :class="{ 'field__control--error': errors.guests }"
            name="guests"
            required
            @change="validateField('guests')"
          >
            <option v-for="n in guestOptions" :key="n" :value="n">{{ n }} 位</option>
          </select>
          <p v-if="errors.guests" class="field__error">{{ errors.guests }}</p>
        </div>

        <div class="field">
          <label class="field__label" for="r-time">用餐時段</label>
          <select
            id="r-time"
            v-model="form.time"
            class="field__control field__control--select"
            :class="{ 'field__control--error': errors.time }"
            name="time"
            required
            @change="validateField('time')"
          >
            <optgroup v-for="group in timeGroups" :key="group.label" :label="group.label">
              <option v-for="slot in group.slots" :key="slot" :value="slot">
                {{ group.label }} {{ slot }}
              </option>
            </optgroup>
          </select>
          <p v-if="errors.time" class="field__error">{{ errors.time }}</p>
        </div>
      </div>

      <div class="row row--2">
        <div class="field">
          <label class="field__label" for="r-name">姓名</label>
          <input
            id="r-name"
            v-model="form.name"
            class="field__control"
            :class="{ 'field__control--error': errors.name }"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="請輸入訂位姓名"
            required
            :aria-invalid="!!errors.name"
            aria-describedby="r-name-err"
            @blur="validateField('name')"
          />
          <p v-if="errors.name" id="r-name-err" class="field__error">{{ errors.name }}</p>
        </div>

        <div class="field">
          <label class="field__label" for="r-phone">手機號碼</label>
          <input
            id="r-phone"
            v-model="form.phone"
            class="field__control"
            :class="{ 'field__control--error': errors.phone }"
            type="tel"
            name="phone"
            autocomplete="tel"
            inputmode="tel"
            placeholder="09xx-xxx-xxx"
            required
            :aria-invalid="!!errors.phone"
            aria-describedby="r-phone-err"
            @blur="validateField('phone')"
          />
          <p v-if="errors.phone" id="r-phone-err" class="field__error">{{ errors.phone }}</p>
        </div>
      </div>

      <div class="field">
        <label class="field__label" for="r-email">電子郵件</label>
        <input
          id="r-email"
          v-model="form.email"
          class="field__control"
          :class="{ 'field__control--error': errors.email }"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="name@example.com"
          required
          :aria-invalid="!!errors.email"
          aria-describedby="r-email-err"
          @blur="validateField('email')"
        />
        <p v-if="errors.email" id="r-email-err" class="field__error">{{ errors.email }}</p>
      </div>

      <div class="field field--note">
        <label class="field__label" for="r-note">備註需求</label>
        <textarea
          id="r-note"
          v-model="form.note"
          class="field__control field__control--textarea"
          name="note"
          placeholder="過敏原、兒童座椅或紀念日需求"
        ></textarea>
      </div>

      <div class="agree">
        <label class="agree__label">
          <input
            v-model="form.agree"
            class="agree__box"
            type="checkbox"
            name="agree"
            required
            :aria-invalid="!!errors.agree"
            @change="validateField('agree')"
          />
          <span>我已閱讀並同意訂位須知與取消政策。</span>
        </label>
        <p v-if="errors.agree" class="field__error">{{ errors.agree }}</p>
      </div>

      <button type="submit" class="r-form__submit">確認訂位</button>
    </form>

    <div v-if="submitted" class="confirm" role="status" aria-live="polite">
      <p class="confirm__title">訂位資料已送出</p>
      <p class="confirm__desc">以下為您的訂位內容，確認信將寄送至 {{ submitted.email }}。</p>
      <dl class="confirm__list">
        <div v-for="item in summary" :key="item.label" class="confirm__item">
          <dt>{{ item.label }}</dt>
          <dd>{{ item.value }}</dd>
        </div>
      </dl>
      <button type="button" class="confirm__reset" @click="onReset">重新填寫</button>
    </div>
  </div>
</template>

<style scoped>
.r-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 52px 56px 56px;
  background: #fffcf6;
  border-radius: 10px;
  color: #4a2913;
}

.r-form__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
}

.r-form__desc {
  font-size: 15px;
  line-height: 40px;
  color: #7a6652;
}

.r-form__fields {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 818px;
}

.row {
  display: grid;
  gap: 18px;
}
.row--3 {
  grid-template-columns: 260fr 260fr 262fr;
}
.row--2 {
  grid-template-columns: repeat(2, minmax(0, 400px));
}

.field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  background: var(--c-white);
}

.field__label {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 13px;
  font-weight: 700;
  color: #4a2913;
}

.field__control {
  width: 100%;
  height: 42px;
  padding: 0 18px;
  font: inherit;
  font-size: 15px;
  color: #7a6652;
  background: #f6f2eb;
  border: 1px solid #cfbfa8;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field__control::placeholder {
  color: #7a6652;
  opacity: 1;
}
.field__control:hover {
  border-color: #915226;
}
.field__control:focus-visible {
  border-color: #915226;
  box-shadow: 0 0 0 3px rgba(145, 82, 38, 0.15);
}
.field__control--error {
  border-color: #b3261e;
}

.field__control--select {
  appearance: none;
  padding-right: 40px;
  cursor: pointer;
  background-image: linear-gradient(45deg, transparent 50%, #915226 50%),
    linear-gradient(135deg, #915226 50%, transparent 50%);
  background-position: calc(100% - 22px) 50%, calc(100% - 17px) 50%;
  background-size: 5px 5px;
  background-repeat: no-repeat;
}

.field__control--textarea {
  height: 100px;
  padding: 16px 18px;
  resize: vertical;
  line-height: 1.5;
}

.field__error {
  margin-top: -4px;
  font-size: 13px;
  color: #b3261e;
}

.agree {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--c-white);
}

.agree__label {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 34px;
  font-size: 14px;
  color: #7a6652;
  cursor: pointer;
}

.agree__box {
  flex-shrink: 0;
  appearance: none;
  width: 18px;
  height: 18px;
  margin: 0;
  border: 1px solid #915226;
  background: var(--c-white);
  cursor: pointer;
  display: grid;
  place-content: center;
}
.agree__box::after {
  content: '';
  width: 10px;
  height: 6px;
  border-left: 2px solid var(--c-white);
  border-bottom: 2px solid var(--c-white);
  transform: translateY(-1px) rotate(-45deg);
  opacity: 0;
}
.agree__box:checked {
  background: #915226;
}
.agree__box:checked::after {
  opacity: 1;
}
.agree__box:focus-visible {
  outline: 2px solid #915226;
  outline-offset: 2px;
}

/* matches Taste House / Button Primary (147:203) at 240×56 — a real submit button */
.r-form__submit {
  width: 240px;
  height: 56px;
  border-radius: 4px;
  background: var(--c-brown-900);
  color: var(--c-white);
  font-size: 15px;
  font-weight: 700;
  transition: background-color 0.2s ease;
}
.r-form__submit:hover,
.r-form__submit:focus-visible {
  background: #915226;
}

.confirm {
  max-width: 818px;
  padding: 28px 32px;
  background: #f6f2eb;
  border: 1px solid #cfbfa8;
  border-left: 4px solid #915226;
  border-radius: 4px;
}

.confirm__title {
  font-size: 20px;
  font-weight: 700;
}

.confirm__desc {
  margin-top: 6px;
  font-size: 14px;
  color: #7a6652;
}

.confirm__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 24px;
  margin: 18px 0 0;
}

.confirm__item {
  display: flex;
  gap: 12px;
  font-size: 15px;
}
.confirm__item dt {
  flex-shrink: 0;
  width: 64px;
  font-weight: 700;
}
.confirm__item dd {
  margin: 0;
  color: #7a6652;
  overflow-wrap: anywhere;
}

.confirm__reset {
  margin-top: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #915226;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.confirm__reset:hover {
  color: var(--c-brown-900);
}

@media (max-width: 1280px) {
  .r-form {
    padding: 44px 40px 48px;
  }
}

@media (max-width: 1100px) {
  .row--3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .row--2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Reservation／Mobile Form (208:457) */
@media (max-width: 768px) {
  .r-form {
    gap: 11px;
    padding: 22px 18px;
    background: var(--c-white);
    border-radius: 12px;
  }
  .r-form__title {
    font-size: 22px;
    line-height: normal;
  }
  .r-form__desc {
    font-size: 12px;
    line-height: 19px;
  }
  .r-form__fields {
    gap: 11px;
  }
  .row--3,
  .row--2 {
    grid-template-columns: minmax(0, 1fr);
    gap: 11px;
  }
  .field {
    gap: 5px;
  }
  .field__label {
    height: auto;
    font-size: 11px;
  }
  .field__control {
    padding: 0 12px;
    font-size: 12px;
    background-color: #f8f5ec;
    border-color: #f8f5ec;
    border-radius: 6px;
  }
  .field__control--select {
    padding-right: 32px;
    background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%;
  }
  .field__control--textarea {
    height: 72px;
    padding: 12px;
  }
  .field__error {
    margin-top: 0;
    font-size: 11px;
  }
  .agree__label {
    gap: 6px;
    min-height: 0;
    font-size: 11px;
  }
  .agree__box {
    width: 12px;
    height: 12px;
  }
  .agree__box::after {
    width: 7px;
    height: 4px;
    border-width: 0 0 1.5px 1.5px;
  }
  .r-form__submit {
    width: 100%;
    height: 46px;
    border-radius: 6px;
    font-size: 14px;
    color: var(--c-cream);
  }
  .confirm {
    margin-top: 8px;
    padding: 18px 16px;
  }
  .confirm__title {
    font-size: 17px;
  }
  .confirm__desc,
  .confirm__item {
    font-size: 12px;
  }
  .confirm__list {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
  }
  .confirm__item dt {
    width: 56px;
  }
}
</style>
