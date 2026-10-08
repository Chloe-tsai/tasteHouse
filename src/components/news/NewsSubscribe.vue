<script setup>
import { ref } from 'vue'

// News／Subscription (121:174): newsletter email form
const email = ref('')
const done = ref(false)

const submit = () => {
  done.value = true
  email.value = ''
}
</script>

<template>
  <section class="subscribe" aria-labelledby="subscribe-title">
    <div class="subscribe__copy">
      <h2 id="subscribe-title" class="subscribe__title">把季節消息留在信箱</h2>
      <p class="subscribe__desc">訂閱電子報，第一時間收到新菜單與活動通知。</p>
    </div>

    <form class="subscribe__form" @submit.prevent="submit">
      <label class="visually-hidden" for="news-email">Email</label>
      <input
        id="news-email"
        v-model="email"
        class="subscribe__input"
        type="email"
        placeholder="請輸入 Email"
        autocomplete="email"
        required
        @input="done = false"
      />
      <button type="submit" class="subscribe__btn">立即訂閱</button>
      <p class="subscribe__status" role="status">{{ done ? '感謝訂閱！' : '' }}</p>
    </form>
  </section>
</template>

<style scoped>
.subscribe {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: min(1520px, 100% - 64px);
  min-height: 250px;
  margin: 107px auto 0;
  padding: 0 70px;
  border-radius: 10px;
  background: #e5dbc7;
}

.subscribe__copy {
  display: flex;
  flex-direction: column;
  gap: 12px;
  line-height: normal;
}
.subscribe__title {
  font-size: 27px;
  font-weight: 700;
  color: var(--c-brown-900);
}
.subscribe__desc {
  font-size: 15px;
  color: #7a6652;
}

.subscribe__form {
  position: relative;
  display: flex;
  gap: 12px;
  flex: 0 1 600px;
  height: 54px;
  border-radius: 10px;
  background: var(--c-white);
}
.subscribe__input {
  flex: 0 1 410px;
  min-width: 0;
  padding: 0 0 0 22px;
  border: 0;
  border-radius: 4px;
  background: #fffcf6;
  font: inherit;
  font-size: 15px;
  color: var(--c-brown-900);
}
.subscribe__input::placeholder {
  color: #7a6652;
}
.subscribe__input:focus-visible {
  outline: 2px solid #915226;
  outline-offset: -2px;
}
.subscribe__btn {
  flex: 0 0 178px;
  height: 54px;
  border-radius: 4px;
  background: var(--c-brown-900);
  font-size: 15px;
  font-weight: 700;
  color: var(--c-white);
  transition: background-color 0.2s ease;
}
.subscribe__btn:hover {
  background: #915226;
}
.subscribe__status {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  font-size: 13px;
  color: var(--c-brown-600);
}

@media (max-width: 1200px) {
  .subscribe {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 48px;
  }
  .subscribe__form {
    flex: none;
    width: 100%;
    max-width: 600px;
  }
}

/* Mobile／Subscription (206:486) */
@media (max-width: 768px) {
  .subscribe {
    gap: 12px;
    width: auto;
    min-height: 0;
    margin: 24px 16px 0;
    padding: 22px 18px;
    border-radius: 12px;
    background: var(--c-sand);
  }
  .subscribe__title {
    font-size: 20px;
  }
  .subscribe__desc {
    font-size: 12px;
    line-height: 19px;
  }
  .subscribe__form {
    flex-direction: column;
    height: auto;
    background: none;
  }
  .subscribe__input {
    flex: none;
    height: 44px;
    padding-left: 14px;
    border-radius: 6px;
    background: var(--c-white);
    font-size: 12px;
  }
  .subscribe__btn {
    flex: none;
    height: 44px;
    border-radius: 6px;
    font-size: 14px;
    color: var(--c-cream);
  }
  .subscribe__status {
    position: static;
    font-size: 12px;
  }
  .subscribe__status:empty {
    display: none;
  }
}
</style>
