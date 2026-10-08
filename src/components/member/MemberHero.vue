<script setup>
import heroImage from '../../assets/images/member/hero.jpg'
import heroOverlay from '../../assets/images/member/hero-overlay.svg'
</script>

<template>
  <!-- Hero／會員 (118:234) + Hero／Overlay (118:235) -->
  <section class="hero">
    <img class="hero__bg" :src="heroImage" alt="" />
    <img class="hero__overlay" :src="heroOverlay" alt="" width="1920" height="520" />

    <div class="hero__content">
      <p class="hero__eyebrow">MEMBER</p>
      <h1 class="hero__title">會員</h1>
      <p class="hero__lead">收藏每一次到訪，也讓下一次的美味更靠近。</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 520px;
  overflow: hidden;
  background: #1f140b;
}

.hero__bg,
.hero__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.hero__bg {
  object-fit: cover;
}

.hero__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 149px 16px 0;
  text-align: center;
}

.hero__eyebrow {
  height: 34px;
  font-size: 14px;
  font-weight: 700;
  color: #f5e8d1;
}

.hero__title {
  height: 87px;
  font-size: 56px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-white);
}

.hero__lead {
  font-size: 18px;
  color: #faf7f0;
}

@media (max-width: 768px) {
  .hero {
    height: 360px;
  }
  .hero__content {
    padding-top: 112px;
  }
  /* mobile: title sits above the MEMBER label (203:488 / 203:489) */
  .hero__title {
    order: -1;
    height: auto;
    margin-bottom: 2px;
    font-size: 40px;
  }
  .hero__eyebrow,
  .hero__lead {
    height: auto;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    color: #f5e8d1;
  }
}
</style>
