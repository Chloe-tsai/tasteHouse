<script setup>
import BaseButton from '../common/BaseButton.vue'
</script>

<template>
  <!-- Space／Visit Note (120:165) -->
  <section class="visit">
    <div class="visit__text">
      <h2 class="visit__title">想先看看最適合您的座席？</h2>
      <p class="visit__desc">歡迎於訂位時備註需求，我們會依當日席況協助安排。</p>
    </div>
    <BaseButton variant="secondary" label="前往訂位" href="./reservation.html" class="visit__btn" />
  </section>
</template>

<style scoped>
.visit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 250px;
  padding: 55px 70px;
  border-radius: 10px;
  background: var(--c-brown-900);
  line-height: normal;
}

.visit__text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 1 820px;
  min-width: 0;
  min-height: 140px;
}
.visit__title {
  min-height: 40px;
  font-size: 27px;
  font-weight: 700;
  color: #fff7e5;
}
.visit__desc {
  min-height: 40px;
  font-size: 16px;
  color: #e5d6bd;
}

.visit__btn {
  flex-shrink: 0;
  width: 180px;
  height: 48px;
}

/* Space／Mobile Visit Note (205:485) — no button on mobile */
@media (max-width: 768px) {
  .visit {
    min-height: 0;
    padding: 22px 20px;
    border-radius: 12px;
  }
  .visit__text {
    flex-basis: auto;
    gap: 10px;
    min-height: 0;
  }
  .visit__title {
    min-height: 0;
    font-size: 20px;
    color: var(--c-cream);
  }
  .visit__desc {
    min-height: 0;
    font-size: 12px;
    line-height: 19px;
    color: #f5e8d1;
  }
  .visit__btn {
    display: none;
  }
}
</style>
