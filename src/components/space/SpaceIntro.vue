<template>
  <!-- Space／Introduction (120:137) -->
  <header class="space-intro">
    <p class="space-intro__eyebrow">A PLACE TO SLOW DOWN</p>
    <h2 class="space-intro__title">讓時間慢下來的空間</h2>
    <p class="space-intro__text">自然光、木質與柔和的留白，讓每一次相聚都能專注在料理與身邊的人。</p>
  </header>
</template>

<style scoped>
.space-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  line-height: normal;
}
.space-intro > * {
  min-height: 40px;
  max-width: 100%;
}

.space-intro__eyebrow {
  font-size: 12px;
  font-weight: 700;
  color: #915226;
}

.space-intro__title {
  font-size: 36px;
  font-weight: 700;
  color: var(--c-brown-900);
}

.space-intro__text {
  font-size: 17px;
  color: #7a6652;
}

/* Space／Mobile Introduction (205:453) */
@media (max-width: 768px) {
  .space-intro {
    gap: 8px;
  }
  .space-intro > * {
    min-height: 0;
  }
  .space-intro__eyebrow {
    font-size: 11px;
    color: var(--c-brown-800);
  }
  .space-intro__title {
    font-size: 26px;
  }
  .space-intro__text {
    width: 320px;
    font-size: 13px;
    line-height: 21px;
  }
}
</style>
