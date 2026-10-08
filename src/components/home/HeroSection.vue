<script setup>
import BaseButton from '../common/BaseButton.vue'
import heroBg from '../../assets/images/home/hero-bg.png'
import heroArrow from '../../assets/images/home/hero-arrow.svg'
</script>

<template>
  <section id="about" class="hero">
    <img class="hero__bg" :src="heroBg" alt="" />
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <h1 class="hero__title">Taste House</h1>
      <p class="hero__text">
        知味所在，和洋交會。<br class="hero__br" />我們不做純粹的日本料理，也不做傳統的西式料理。
      </p>
      <p class="hero__text hero__text--second">刀工是語言，食材是記憶。</p>
      <div class="hero__cta">
        <BaseButton variant="primary" label="預約訂位" href="./reservation.html" />
        <BaseButton variant="secondary" label="瀏覽菜單" href="./menu.html" class="hero__cta-menu" />
      </div>
    </div>

    <!-- Hero Arrow／Hover Bounce ×2 → Aroma (155:412) -->
    <a href="#aroma" class="hero__arrow" aria-label="往下捲動至香氣所至">
      <img :src="heroArrow" alt="" width="48" height="48" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 800px;
  overflow: hidden;
  background: #bcbcbc;
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

.hero__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 146px 16px 0;
  text-align: center;
}

.hero__title {
  font-size: 80px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-brown-800);
}

.hero__text {
  margin-top: 22px;
  font-size: 22px;
  line-height: normal;
  color: var(--c-brown-800);
}
.hero__text--second {
  margin-top: 22px;
}
.hero__br {
  display: none;
}

.hero__cta {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 30px;
}

.hero__arrow {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 48px;
  height: 48px;
  margin-left: -23px;
}
.hero__arrow:hover img {
  animation: bounce-twice 1s ease-in-out;
}

/* Rest → Up1 → Down1 → Up2 → Down2 */
@keyframes bounce-twice {
  0%,
  50%,
  100% {
    transform: translateY(0);
  }
  25%,
  75% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 600px;
  }
  .hero__content {
    padding-top: 120px;
  }
  .hero__title {
    font-size: 52px;
  }
  .hero__text {
    font-size: 17px;
    line-height: 1.7;
  }
  .hero__text--second {
    margin-top: 0;
  }
  .hero__br {
    display: inline;
  }
  .hero__cta {
    margin-top: 40px;
  }
  .hero__cta-menu {
    display: none;
  }
}
</style>
