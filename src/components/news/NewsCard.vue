<script setup>
// News Card (121:147) with __News Title Underline hover (137:203):
// hovering / focusing the title expands a 2px underline from left to right.
defineProps({
  date: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String, required: true },
  imagePos: { type: String, default: '50% 50%' },
  href: { type: String, default: '#' },
})
</script>

<template>
  <article class="news-card">
    <div class="news-card__media">
      <img :src="image" :alt="title" :style="{ objectPosition: imagePos }" loading="lazy" />
    </div>

    <div class="news-card__body">
      <p class="news-card__meta">
        <time class="news-card__date" :datetime="date.replaceAll('.', '-')">{{ date }}</time>
        <span class="news-card__category">{{ category }}</span>
      </p>
      <h3 class="news-card__title">
        <a :href="href" class="news-card__title-link">{{ title }}</a>
      </h3>
      <p class="news-card__excerpt">{{ excerpt }}</p>
      <a :href="href" class="news-card__more" :aria-label="`閱讀更多：${title}`">閱讀更多 →</a>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  display: flex;
  height: 365px;
  border-radius: 8px;
  background: #fffcf6;
  overflow: hidden;
}

.news-card__media {
  flex: 0 0 34.2%; /* 520 / 1520 */
  max-width: 520px;
}
.news-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-card__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  padding: 52px 64px 0;
  background: var(--c-white);
}

.news-card__meta {
  display: flex;
  gap: 30px;
  height: 28px;
  font-size: 13px;
  line-height: normal;
}
.news-card__date {
  width: 130px;
  font-weight: 700;
  color: #915226;
}
.news-card__category {
  color: #7a6652;
}

/* Title row = 800px hit area; underline sits 2px below the 40px title box */
.news-card__title {
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 40px;
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-brown-900);
}
.news-card__title::after {
  content: '';
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  height: 2px;
  background: #915226;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.35s ease, opacity 0.2s ease;
}
.news-card__title:hover::after,
.news-card__title:focus-within::after {
  opacity: 1;
  transform: scaleX(1);
}
.news-card__title-link {
  display: block;
  outline-offset: 4px;
}

.news-card__excerpt {
  max-width: 790px;
  min-height: 40px;
  font-size: 16px;
  line-height: normal;
  color: #7a6652;
}

.news-card__more {
  display: inline-flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #915226;
  transition: color 0.2s ease;
}
.news-card__more:hover {
  color: var(--c-brown-900);
}

@media (max-width: 1200px) {
  .news-card__body {
    padding: 40px 40px 0;
  }
  .news-card__title {
    font-size: 24px;
  }
}

/* Mobile News Card (206:465): stacked image + copy */
@media (max-width: 768px) {
  .news-card {
    flex-direction: column;
    height: auto;
    border-radius: 10px;
  }
  .news-card__media {
    flex: none;
    max-width: none;
    height: 190px;
  }
  .news-card__body {
    gap: 8px;
    padding: 16px 16px 18px;
  }
  .news-card__meta {
    gap: 0;
    height: auto;
    font-size: 11px;
    font-weight: 500;
    color: var(--c-brown-800);
  }
  .news-card__date {
    width: auto;
    font-weight: 500;
    color: inherit;
  }
  .news-card__date::after {
    content: '\3000'; /* full-width space, as in the design */
  }
  .news-card__category {
    color: inherit;
  }
  .news-card__title {
    min-height: 0;
    font-size: 19px;
    line-height: 27px;
  }
  .news-card__excerpt {
    min-height: 0;
    font-size: 12px;
    line-height: 20px;
  }
  .news-card__more {
    height: auto;
    font-size: 12px;
    color: var(--c-brown-800);
  }
}
</style>
