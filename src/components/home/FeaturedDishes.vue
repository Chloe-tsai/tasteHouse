<script setup>
import { computed } from 'vue'
import { useCarousel } from '../../composables/useCarousel'
import sectionBorder from '../../assets/images/home/section-border.svg'
import dotActive from '../../assets/images/home/dot-active.svg'
import dot from '../../assets/images/home/dot.svg'
import dish1 from '../../assets/images/home/dish-1.png'
import dish2 from '../../assets/images/home/dish-2.png'
import dish3 from '../../assets/images/home/dish-3.png'

// Featured Dishes Click Carousel (155:570): click left/right arrows to rotate three slides.
const dishes = [
  { id: 1, src: dish1, alt: '香煎鮭魚佐時蔬奶油醬', pos: '50% 62%' },
  { id: 2, src: dish2, alt: '炭烤鮮蝦佐檸檬', pos: '50% 61%' },
  { id: 3, src: dish3, alt: '吐司佐太陽蛋', pos: '50% 50%' },
]

const { index, go } = useCarousel(dishes.length)
const slides = computed(() => [...dishes.slice(index.value), ...dishes.slice(0, index.value)])
</script>

<template>
  <section id="menu" class="dishes">
    <header class="dishes__heading">
      <p class="dishes__eyebrow">精選料理</p>
      <h2 class="dishes__title">美味特色</h2>
      <img class="dishes__border" :src="sectionBorder" alt="" width="400" height="1.5" />
    </header>

    <div class="carousel">
      <button class="carousel__arrow" aria-label="上一道料理" @click="go(index - 1)">‹</button>

      <TransitionGroup tag="ul" name="slide" class="carousel__track">
        <li v-for="dish in slides" :key="dish.id" class="dish">
          <img :src="dish.src" :alt="dish.alt" :style="{ objectPosition: dish.pos }" />
        </li>
      </TransitionGroup>

      <button class="carousel__arrow" aria-label="下一道料理" @click="go(index + 1)">›</button>
    </div>

    <div class="carousel__dots">
      <button
        v-for="(d, i) in dishes"
        :key="d.id"
        class="carousel__dot"
        :aria-label="`第 ${i + 1} 張`"
        :aria-current="i === index"
        @click="go(i)"
      >
        <img :src="i === index ? dotActive : dot" alt="" width="10" height="10" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.dishes {
  padding: 55px 0 213px;
  background: var(--c-gray-bg);
}

.dishes__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.dishes__eyebrow {
  font-size: 14px;
  letter-spacing: 3px;
  color: rgba(92, 58, 30, 0.7);
}
.dishes__title {
  margin-top: 11px;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-brown-800);
}
.dishes__border {
  width: 400px;
  height: 1.5px;
  margin-top: 22px;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 145px;
  padding: 0 16px;
}

.carousel__track {
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.dish {
  width: 480px;
  height: 520px;
  flex-shrink: 0;
  border: 1px solid rgba(92, 58, 30, 0.2);
  border-radius: 8px;
  background: #f8f6f3;
  overflow: hidden;
}
.dish img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.dish:hover img {
  transform: scale(1.04);
}

.slide-move {
  transition: transform 0.45s ease;
}

.carousel__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border: 1px solid rgba(92, 58, 30, 0.3);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.8);
  font-size: 28px;
  line-height: 1;
  padding-bottom: 4px;
  color: var(--c-brown-800);
  transition: background-color 0.2s ease, color 0.2s ease;
}
.carousel__arrow:hover {
  background: var(--c-brown-800);
  color: var(--c-white);
}

.carousel__dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}
.carousel__dot,
.carousel__dot img {
  width: 10px;
  height: 10px;
}

@media (max-width: 1700px) {
  .carousel__track {
    gap: 24px;
  }
  .dish {
    width: min(480px, (100vw - 200px) / 3);
    height: auto;
    aspect-ratio: 480 / 520;
  }
}

@media (max-width: 768px) {
  .dishes {
    padding: 48px 0 64px;
  }
  .dishes__title {
    margin-top: 10px;
    font-size: 28px;
  }
  .dishes__border {
    width: 160px;
  }
  .carousel {
    margin-top: 32px;
    gap: 8px;
  }
  .dish {
    width: calc(100vw - 120px);
  }
  .dish:not(:first-child) {
    display: none;
  }
  .carousel__arrow {
    width: 36px;
    height: 36px;
    font-size: 22px;
  }
}
</style>
