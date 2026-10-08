<script setup>
import { computed, ref } from 'vue'
import NewsCard from './NewsCard.vue'
import imgSeafood from '../../assets/images/news/article-summer-seafood.jpg'
import imgHours from '../../assets/images/news/article-hours-notice.jpg'
import imgAroma from '../../assets/images/news/article-aroma-gathering.jpg'

// News／Heading & Filters (121:137) + News／Article List (121:146)
// Category pills (Pill / Pill Active) filter the article list.
const categories = ['全部', '季節菜單', '餐廳公告', '活動']

const articles = [
  {
    id: 1,
    date: '2026.08.08',
    category: '季節菜單',
    title: '盛夏新味：柚香海鮮與炭火蔬菜',
    excerpt: '以清爽柚香、海潮鮮味與炭火餘韻，構成今年夏季的新套餐。',
    image: imgSeafood,
  },
  {
    id: 2,
    date: '2026.07.25',
    category: '餐廳公告',
    title: '八月營業時間調整公告',
    excerpt: '因內部設備保養，部分日期將調整午、晚餐營業時段，敬請留意。',
    image: imgHours,
  },
  {
    id: 3,
    date: '2026.07.12',
    category: '活動',
    title: '週末限定：餐桌邊的香氣小聚',
    excerpt: '從香草、奶油到炭火，與主廚一起認識料理開場前的氣味線索。',
    image: imgAroma,
  },
]

const active = ref(categories[0])
const filtered = computed(() =>
  active.value === '全部' ? articles : articles.filter((a) => a.category === active.value),
)
</script>

<template>
  <section class="news-list" aria-labelledby="news-list-title">
    <div class="news-list__head">
      <div class="news-list__heading">
        <p class="news-list__eyebrow">LATEST STORIES</p>
        <h2 id="news-list-title" class="news-list__title">最新消息</h2>
      </div>

      <div class="pills" role="group" aria-label="消息分類">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="pill"
          :class="{ 'pill--active': cat === active }"
          :aria-pressed="cat === active"
          @click="active = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <TransitionGroup tag="div" name="news-fade" class="news-list__items">
      <NewsCard
        v-for="a in filtered"
        :key="a.id"
        :date="a.date"
        :category="a.category"
        :title="a.title"
        :excerpt="a.excerpt"
        :image="a.image"
      />
    </TransitionGroup>
  </section>
</template>

<style scoped>
.news-list {
  width: min(1520px, 100% - 64px);
  margin: 0 auto;
  padding-top: 56px;
}

.news-list__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px 24px;
  min-height: 120px;
}

.news-list__heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 700;
  line-height: normal;
}
.news-list__eyebrow {
  height: 40px;
  font-size: 12px;
  color: #915226;
}
.news-list__title {
  height: 40px;
  font-size: 36px;
  color: var(--c-brown-900);
}

.pills {
  display: flex;
  gap: 12px;
}
.pill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  border: 1px solid rgba(145, 82, 38, 0.2);
  border-radius: 999px;
  background: var(--c-white);
  font-size: 16px;
  font-weight: 500;
  color: #915226;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.pill:hover {
  border-color: #915226;
}
.pill--active {
  border-color: #915226;
  background: #915226;
  font-weight: 700;
  color: var(--c-white);
}

.news-list__items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
}

.news-fade-enter-active,
.news-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.news-fade-enter-from,
.news-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
.news-fade-leave-active {
  display: none;
}

/* Mobile／News Content (206:452) */
@media (max-width: 768px) {
  .news-list {
    width: auto;
    padding: 34px 16px 0;
  }
  .news-list__head {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    min-height: 0;
  }
  .news-list__heading {
    gap: 7px;
  }
  .news-list__eyebrow {
    height: auto;
    font-size: 10px;
    color: var(--c-brown-800);
  }
  .news-list__title {
    height: auto;
    font-size: 27px;
  }
  .pills {
    gap: 7px;
  }
  .pill {
    flex: 0 1 84px;
    min-width: 0;
    height: 34px;
    border: 0;
    font-size: 12px;
    color: var(--c-brown-800);
  }
  .pill:first-child {
    flex-basis: 70px;
  }
  .pill--active {
    background: var(--c-brown-800);
    color: var(--c-white);
  }
  .news-list__items {
    margin-top: 24px;
  }
}
</style>
