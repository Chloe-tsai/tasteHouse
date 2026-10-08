<script setup>
import NewsHero from '../components/news/NewsHero.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsSubscribe from '../components/news/NewsSubscribe.vue'
</script>

<template>
  <!-- 消息／Desktop (116:79) · 消息／Mobile 375 (202:454) -->
  <div class="news-page">
    <NewsHero />
    <NewsList />
    <NewsSubscribe />
  </div>
</template>

<style scoped>
.news-page {
  padding-bottom: 66px;
  background: #f8f5ec;
}

@media (max-width: 768px) {
  .news-page {
    padding-bottom: 42px;
  }
}
</style>
