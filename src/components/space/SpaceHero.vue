<script setup>
import heroImg from '../../assets/images/space/hero.jpg'
</script>

<template>
  <!-- Hero／空間 (118:146) -->
  <section class="space-hero">
    <img class="space-hero__bg" :src="heroImg" alt="" />
    <div class="space-hero__overlay"></div>

    <div class="space-hero__content">
      <p class="space-hero__eyebrow">SPACE</p>
      <h1 class="space-hero__title">空間</h1>
      <p class="space-hero__text">留一席安靜的光，讓料理、香氣與交談自然發生。</p>
    </div>
  </section>
</template>

<style scoped>
.space-hero {
  position: relative;
  height: 520px;
  overflow: hidden;
  background: #1f140b;
}

.space-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 62.6%;
}

.space-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(31, 20, 11, 0.48);
}

.space-hero__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 149px 16px 0;
  text-align: center;
}

.space-hero__eyebrow {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #f5e8d1;
}

.space-hero__title {
  margin-top: 14px;
  font-size: 56px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-white);
}

.space-hero__text {
  margin-top: 6px;
  font-size: 18px;
  line-height: normal;
  color: #faf7f0;
}

/* Mobile／Hero・空間 (203:466) */
@media (max-width: 768px) {
  .space-hero {
    height: 360px;
  }
  .space-hero__bg {
    object-position: 50% 50%;
  }
  .space-hero__content {
    padding-top: 112px;
  }
  .space-hero__title {
    order: -1;
    margin-top: 0;
    font-size: 40px;
  }
  .space-hero__eyebrow,
  .space-hero__text {
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    color: #f5e8d1;
  }
  .space-hero__eyebrow {
    margin-top: 2px;
  }
  .space-hero__text {
    margin-top: 0;
  }
}
</style>
