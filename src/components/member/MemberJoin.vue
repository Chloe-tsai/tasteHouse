<script setup>
import { reactive, ref } from 'vue'

// Member／Join (122:173): front-end only form, no network requests.
const form = reactive({ phone: '', email: '', code: '' })
const errors = reactive({ phone: '', email: '', code: '' })
const success = ref('')

// which fields each action needs, and the message shown on success
const actions = {
  login: { fields: ['phone', 'code'], message: '登入成功，歡迎回到知味所！' },
  join: { fields: ['phone', 'email'], message: '感謝加入知味所會員，驗證信已寄至您的信箱。' },
  points: { fields: ['phone', 'code'], message: '查詢成功，您目前累積 0 點。' },
}

const validators = {
  phone: (v) => (!v ? '請輸入手機號碼' : /^09\d{8}$/.test(v) ? '' : '手機號碼格式為 09 開頭共 10 碼'),
  email: (v) => (!v ? '請輸入電子郵件' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : '電子郵件格式不正確'),
  code: (v) => (!v ? '請輸入驗證碼' : /^\d{4,6}$/.test(v) ? '' : '驗證碼為 4–6 位數字'),
}

const onSubmit = (e) => {
  const key = e.submitter?.value || 'login'
  const { fields, message } = actions[key]

  success.value = ''
  Object.keys(errors).forEach((f) => {
    errors[f] = fields.includes(f) ? validators[f](form[f].trim()) : ''
  })
  if (fields.some((f) => errors[f])) return

  success.value = message
}
</script>

<template>
  <section id="join" class="join">
    <div class="join__info">
      <h2 class="join__title">加入知味所會員</h2>
      <p class="join__lead">只需手機與 Email，即可免費加入。</p>
      <p class="join__note">已經是會員？輸入資料後即可查看點數與兌換紀錄。</p>
    </div>

    <form class="join__form" novalidate @submit.prevent="onSubmit">
      <div class="field">
        <label class="visually-hidden" for="member-phone">手機號碼</label>
        <input
          id="member-phone"
          v-model="form.phone"
          type="tel"
          inputmode="numeric"
          autocomplete="tel"
          placeholder="手機號碼"
          :aria-invalid="!!errors.phone"
          aria-describedby="member-phone-error"
        />
        <p v-if="errors.phone" id="member-phone-error" class="field__error">{{ errors.phone }}</p>
      </div>

      <div class="field">
        <label class="visually-hidden" for="member-email">電子郵件</label>
        <input
          id="member-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          placeholder="電子郵件"
          :aria-invalid="!!errors.email"
          aria-describedby="member-email-error"
        />
        <p v-if="errors.email" id="member-email-error" class="field__error">{{ errors.email }}</p>
      </div>

      <div class="field">
        <label class="visually-hidden" for="member-code">驗證碼</label>
        <input
          id="member-code"
          v-model="form.code"
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          placeholder="驗證碼"
          :aria-invalid="!!errors.code"
          aria-describedby="member-code-error"
        />
        <p v-if="errors.code" id="member-code-error" class="field__error">{{ errors.code }}</p>
      </div>

      <!-- Hover Button／登入會員 (148:218), 免費加入 (148:221), 查看點數 (131:207) -->
      <div class="join__actions">
        <button type="submit" name="action" value="login" class="btn btn--primary">登入會員</button>
        <button type="submit" name="action" value="join" class="btn btn--secondary">免費加入</button>
        <button type="submit" name="action" value="points" class="btn btn--primary">查看點數</button>
      </div>

      <p class="join__success" role="status" aria-live="polite">{{ success }}</p>
    </form>
  </section>
</template>

<style scoped>
.join {
  display: grid;
  grid-template-columns: minmax(0, 580fr) minmax(0, 740fr);
  gap: 60px;
  width: min(1520px, 100% - 80px);
  min-height: 440px;
  margin: 60px auto 0;
  padding: 60px 70px;
  border-radius: 10px;
  background: #fffcf6;
}

.join__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 320px;
  padding: 36px;
  border-radius: 10px;
  background: #f5f0e5;
}
.join__title {
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-brown-900);
}
.join__lead,
.join__note {
  line-height: 1.7;
  color: #7a6652;
}
.join__lead {
  font-size: 15px;
}
.join__note {
  font-size: 14px;
}

.join__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field input {
  display: block;
  width: 100%;
  height: 58px;
  padding: 0 22px;
  border: 1px solid #d1c4b0;
  border-radius: 4px;
  background: #f5f0e5;
  font: inherit;
  font-size: 15px;
  color: var(--c-brown-900);
  outline: none;
  transition: border-color 0.2s ease;
}
.field input::placeholder {
  color: #7a6652;
  opacity: 1;
}
.field input:focus {
  border-color: var(--c-brown-600);
}
.field input[aria-invalid='true'] {
  border-color: #b3261e;
}
.field__error {
  margin-top: 6px;
  font-size: 13px;
  color: #b3261e;
}

.join__actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

/* Taste House / Button Primary (147:203 → hover 147:206) & Secondary (147:209 → hover 147:212) */
.btn {
  height: 54px;
  padding: 0 24px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.btn--primary {
  background: var(--c-brown-900);
  color: var(--c-white);
}
.btn--primary:hover {
  background: #915226;
}
.btn--secondary {
  background: var(--c-sand);
  color: var(--c-brown-900);
}
.btn--secondary:hover {
  background: var(--c-brown-900);
  color: var(--c-white);
}

.join__success {
  min-height: 1em;
  font-size: 15px;
  font-weight: 700;
  color: var(--c-brown-600);
}
.join__success:empty {
  display: none;
}

@media (max-width: 1100px) {
  .join {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 40px;
  }
  .join__info {
    height: auto;
  }
}

/* Member／Mobile Join (207:483) */
@media (max-width: 768px) {
  .join {
    gap: 11px;
    width: 100%;
    min-height: 0;
    margin-top: 26px;
    padding: 22px 18px;
    border-radius: 12px;
    background: var(--c-sand);
  }
  .join__info {
    gap: 11px;
    padding: 0;
    background: none;
  }
  .join__title {
    font-size: 21px;
  }
  .join__lead {
    font-size: 12px;
    line-height: normal;
  }
  .join__note {
    display: none;
  }
  .join__form {
    gap: 11px;
  }
  .field input {
    height: 42px;
    padding: 0 13px;
    border: 0;
    border-radius: 6px;
    background: #fffcf6;
    font-size: 12px;
  }
  .field input[aria-invalid='true'] {
    box-shadow: inset 0 0 0 1px #b3261e;
  }
  .field__error {
    font-size: 12px;
  }
  .join__actions {
    grid-template-columns: minmax(0, 1fr);
    gap: 11px;
  }
  .btn {
    height: 44px;
    border-radius: 6px;
    font-size: 14px;
  }
  .btn--primary {
    color: var(--c-cream);
  }
  /* mobile design shows only 登入會員 */
  .btn:not(:first-child) {
    display: none;
  }
  .join__success {
    font-size: 13px;
  }
}
</style>
