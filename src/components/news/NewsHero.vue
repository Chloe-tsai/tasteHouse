<script setup>
import heroImg from '../../assets/images/news/hero.jpg'
</script>

<template>
  <!-- Hero／消息 (118:190) -->
  <section class="news-hero">
    <img class="news-hero__bg" :src="heroImg" alt="" />
    <div class="news-hero__overlay" aria-hidden="true"></div>
    <div class="news-hero__copy">
      <p class="news-hero__eyebrow">NEWS</p>
      <h1 class="news-hero__title">消息</h1>
      <p class="news-hero__desc">關於季節新味、營業時間與知味所的日常更新。</p>
    </div>
  </section>
</template>

<style scoped>
.news-hero {
  position: relative;
  height: 520px;
  overflow: hidden;
}

.news-hero__bg,
.news-hero__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.news-hero__bg {
  object-fit: cover;
}
.news-hero__overlay {
  background: rgba(31, 20, 11, 0.48);
}

.news-hero__copy {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 149px 16px 0;
  text-align: center;
}
.news-hero__eyebrow {
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #f5e8d1;
}
.news-hero__title {
  margin-top: 14px;
  font-size: 56px;
  font-weight: 700;
  line-height: 81px;
  color: var(--c-white);
}
.news-hero__desc {
  margin-top: 6px;
  font-size: 18px;
  line-height: 26px;
  color: #faf7f0;
}

/* Mobile／Hero・消息 (203:476): title first, then NEWS + description */
@media (max-width: 768px) {
  .news-hero {
    height: 360px;
  }
  .news-hero__copy {
    padding-top: 112px;
  }
  .news-hero__title {
    order: -1;
    margin-top: 0;
    font-size: 40px;
    line-height: 58px;
  }
  .news-hero__eyebrow,
  .news-hero__desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    color: #f5e8d1;
  }
  .news-hero__eyebrow {
    margin-top: 2px;
  }
  .news-hero__desc {
    margin-top: 0;
  }
}
</style>
