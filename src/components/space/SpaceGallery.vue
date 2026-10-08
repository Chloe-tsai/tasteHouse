<script setup>
import { useCarousel, useSwipe } from '../../composables/useCarousel'
import mainDining from '../../assets/images/space/main-dining.jpg'
import windowSeats from '../../assets/images/space/window-seats.jpg'
import privateRoom from '../../assets/images/space/private-room.jpg'
import dotActive from '../../assets/images/space/dot-active.svg'
import dot from '../../assets/images/space/dot.svg'

// Desktop: Space／Gallery (120:141) — one large + two stacked images.
// Mobile: Space／Mobile Environment Carousel (214:452) — swipe / dot pagination.
const spaces = [
  { id: 'main', src: mainDining, label: '主餐區 MAIN DINING', alt: '主餐區', pos: '50% 50%' },
  { id: 'window', src: windowSeats, label: '窗邊座席 WINDOW SEATS', alt: '窗邊座席', pos: '50% 71%' },
  { id: 'private', src: privateRoom, label: '私密包廂 PRIVATE ROOM', alt: '私密包廂', pos: '50% 50%' },
]

const { index, go, next, prev } = useCarousel(spaces.length)
const swipe = useSwipe({ onLeft: next, onRight: prev, threshold: 40 })
</script>

<template>
  <section class="gallery" aria-label="空間環境">
    <div
      class="gallery__viewport"
      @pointerdown="swipe.onPointerDown"
      @pointerup="swipe.onPointerUp"
      @pointerleave="swipe.onPointerLeave"
    >
      <figure
        v-for="space in spaces"
        :key="space.id"
        class="gallery__item"
        :class="`gallery__item--${space.id}`"
        :style="{ '--i': index }"
      >
        <img :src="space.src" :alt="space.alt" :style="{ objectPosition: space.pos }" draggable="false" />
        <figcaption class="gallery__caption">{{ space.label }}</figcaption>
      </figure>
    </div>

    <div class="gallery__dots">
      <button
        v-for="(space, i) in spaces"
        :key="space.id"
        class="gallery__dot"
        :aria-label="`第 ${i + 1} 張：${space.alt}`"
        :aria-current="i === index"
        @click="go(i)"
      >
        <img :src="i === index ? dotActive : dot" alt="" width="24" height="24" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.gallery__viewport {
  display: grid;
  grid-template-columns: minmax(0, 900fr) minmax(0, 592fr);
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 28px;
  aspect-ratio: 1520 / 690;
}

.gallery__item {
  position: relative;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
}
.gallery__item--main {
  grid-row: 1 / span 2;
}
.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.gallery__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  font-weight: 700;
  line-height: normal;
  color: var(--c-white);
}

/* Main dining: 180px gradient band, caption 100px from bottom */
.gallery__item--main .gallery__caption {
  height: 180px;
  padding: 80px 48px 0;
  font-size: 25px;
  background: linear-gradient(to right, rgba(26, 15, 8, 0), rgba(26, 15, 8, 0.8));
}

/* Side images: 90px translucent bar */
.gallery__item--window .gallery__caption,
.gallery__item--private .gallery__caption {
  height: 90px;
  padding: 29px 30px 0;
  font-size: 19px;
  background: rgba(20, 13, 8, 0.58);
}

.gallery__dots {
  display: none;
}

@media (max-width: 768px) {
  .gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .gallery__viewport {
    display: flex;
    gap: 12px;
    width: 100%;
    height: 240px;
    aspect-ratio: auto;
    border-radius: 10px;
    overflow: hidden;
    touch-action: pan-y;
  }

  .gallery__item {
    flex: 0 0 100%;
    height: 100%;
    transform: translateX(calc(var(--i) * (-100% - 12px)));
    transition: transform 0.45s ease;
  }

  .gallery__caption {
    display: none;
  }

  .gallery__dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    height: 24px;
  }
  .gallery__dot img {
    width: 24px;
    height: 24px;
  }
}
</style>
