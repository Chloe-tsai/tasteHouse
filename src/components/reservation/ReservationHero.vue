<script setup>
import heroImg from '../../assets/images/reservation/reservation-hero.jpg'
</script>

<template>
  <!-- Hero／訂位 (118:278) + Overlay (118:279) -->
  <section class="r-hero">
    <img class="r-hero__bg" :src="heroImg" alt="" />
    <div class="r-hero__overlay" aria-hidden="true"></div>
    <div class="r-hero__copy">
      <p class="r-hero__eyebrow">RESERVATION</p>
      <h1 class="r-hero__title">訂位</h1>
      <p class="r-hero__lead">為重要的人與重要的時刻，預留一張剛剛好的餐桌。</p>
    </div>
  </section>
</template>

<style scoped>
.r-hero {
  position: relative;
  height: 520px;
  overflow: hidden;
}

.r-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.r-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(31, 20, 11, 0.48);
}

/* Figma: eyebrow y=223, title y=257, lead y=344 (frame y=74 is the hero top) */
.r-hero__copy {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 149px 16px 0;
  text-align: center;
}

.r-hero__eyebrow {
  font-size: 14px;
  font-weight: 700;
  color: #f5e8d1;
}

.r-hero__title {
  margin-top: 14px;
  font-size: 56px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-white);
}

.r-hero__lead {
  margin-top: 6px;
  font-size: 18px;
  color: #faf7f0;
}

@media (max-width: 768px) {
  /* Mobile／Hero・訂位 (203:496): title first, then eyebrow + lead */
  .r-hero {
    height: 360px;
  }
  .r-hero__copy {
    padding: 112px 24px 0;
  }
  .r-hero__title {
    order: 1;
    margin-top: 0;
    font-size: 40px;
  }
  .r-hero__eyebrow {
    order: 2;
    margin-top: 2px;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
  }
  .r-hero__lead {
    order: 3;
    margin-top: 0;
    font-size: 13px;
    line-height: 24px;
    color: #f5e8d1;
  }
}
</style>
