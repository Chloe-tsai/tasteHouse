<script setup>
// Hero／菜單 (Figma 118:102 desktop, 203:456 mobile)
import heroBg from '../../assets/images/menu/hero.jpg'
</script>

<template>
  <section class="menu-hero">
    <img class="menu-hero__bg" :src="heroBg" alt="" />
    <div class="menu-hero__overlay"></div>

    <div class="menu-hero__content">
      <p class="menu-hero__eyebrow" lang="en">MENU</p>
      <h1 class="menu-hero__title">菜單</h1>
      <p class="menu-hero__text">依季節挑選食材，讓和洋風味在每一道料理裡相遇。</p>
    </div>
  </section>
</template>

<style scoped>
.menu-hero {
  position: relative;
  height: 520px;
  overflow: hidden;
  background: #2a1d12;
}

.menu-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(31, 20, 11, 0.48);
}

.menu-hero__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 149px 16px 0;
  text-align: center;
}

.menu-hero__eyebrow {
  height: 34px;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  color: #f5e8d1;
}

.menu-hero__title {
  height: 87px;
  font-size: 56px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-white);
}

.menu-hero__text {
  max-width: 800px;
  font-size: 18px;
  line-height: normal;
  color: #faf7f0;
}

@media (max-width: 768px) {
  .menu-hero {
    height: 360px;
  }

  .menu-hero__content {
    padding: 112px 24px 0;
  }

  /* mobile order: 菜單 → MENU → text */
  .menu-hero__title {
    order: -1;
    height: auto;
    margin-bottom: 2px;
    font-size: 40px;
  }

  .menu-hero__eyebrow,
  .menu-hero__text {
    height: auto;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    color: #f5e8d1;
  }
}
</style>
