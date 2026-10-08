<script setup>
import { computed } from 'vue'
import { useCarousel, useSwipe } from '../../composables/useCarousel'
import flowLine from '../../assets/images/home/journey-flow-line.svg'
import chevronActive from '../../assets/images/home/chevron-right-active.svg'
import chevron from '../../assets/images/home/chevron-right.svg'
import leaf from '../../assets/images/home/leaf.svg'
import leaf2 from '../../assets/images/home/leaf-2.svg'
import cloudFog from '../../assets/images/home/cloud-fog.svg'
import chopsticks from '../../assets/images/home/chopsticks.svg'
import smokeWisp from '../../assets/images/home/smoke-wisp.svg'
import seed from '../../assets/images/home/seed-decoration.svg'
import journey01 from '../../assets/images/home/journey-01.png'
import journey02 from '../../assets/images/home/journey-02.png'
import journey03 from '../../assets/images/home/journey-03.png'
import story01 from '../../assets/images/home/aroma-story-hero.png'
import story02 from '../../assets/images/home/aroma-story-hero-02.png'
import story03 from '../../assets/images/home/aroma-story-hero-03.png'

// Aroma Journey Drag Track (155:497):
// drag left or click any card chevron to advance 01 → 02 → 03, then loop to 01.
const steps = [
  {
    no: '01',
    title: '食材甦醒',
    caption: '火候喚醒食材原本的氣息',
    captionStyle: { left: '62px', top: '59px', fontSize: '13px' },
    card: journey01,
    story: {
      title: '流傳香味',
      lead: '香氣，是一道料理最早抵達記憶的方式。',
      body: '從鍋中的第一縷熱氣，到入口後留下的餘韻，每一種氣味，都藏著食材、時間與人的故事。知味所想留住的，不只是餐桌上的片刻，而是離開之後仍停留在記憶裡的那道餘香。',
      quote: '味道會走遠，記憶會留下。',
      image: story01,
      imagePos: '50% 70%',
      imageCaption: '香氣先抵達，故事才開始。',
    },
  },
  {
    no: '02',
    title: '香氣交會',
    caption: '煙、奶油與炭火在空氣相遇',
    captionStyle: { left: '32px', top: '67px', fontSize: '14px' },
    card: journey02,
    story: {
      title: '香氣交會',
      lead: '煙從炭火裡升起，奶油在鐵鍋邊緣化開，兩種截然不同的氣味，在空氣中撞了個滿懷。',
      body: '這是知味所最誠實的時刻——不是刀工，也不是擺盤，而是柴燒與奶脂交會的那一瞬間，分不清究竟該想起京都，還是里昂。',
      quote: '香氣不分東西，只分先來後到。',
      image: story02,
      imagePos: '50% 27%',
      imageCaption: '香氣不分東西，只分先來後到。',
    },
  },
  {
    no: '03',
    title: '記憶留存',
    caption: '入口之後，餘香仍停在記憶裡',
    captionStyle: { left: '20px', top: '67px', fontSize: '14px' },
    card: journey03,
    story: {
      title: '記憶留存',
      lead: '最後一口嚥下之後，味道並沒有真正離開。',
      body: '它換了一種方式留下來——變成隔天早上，突然想起的那道柚子胡椒香；變成走出巷口很久之後，衣服上還沒散去的炭火氣。知味所在意的，從來不只是餐桌上的四十分鐘。',
      quote: '餐畢，是記憶開始的地方。',
      image: story03,
      imagePos: '50% 62%',
      imageCaption: '餐畢，是記憶開始的地方。',
    },
  },
]

const { index: active, go, next, prev } = useCarousel(steps.length)
const current = computed(() => steps[active.value])
const swipe = useSwipe({ onLeft: next, onRight: prev })
</script>

<template>
  <section id="aroma" class="aroma">
    <!-- decorations -->
    <img class="deco deco--leaf" :src="leaf" alt="" width="280" height="280" />
    <img class="deco deco--cloud" :src="cloudFog" alt="" width="240" height="240" />
    <img class="deco deco--leaf2" :src="leaf2" alt="" width="320" height="320" />
    <p class="aroma__bignum" aria-hidden="true">{{ current.no }}</p>
    <img class="deco deco--smoke" :src="smokeWisp" alt="" width="200" height="240" />
    <img class="deco deco--seed" :src="seed" alt="" width="200" height="200" />
    <div class="deco deco--chopsticks" aria-hidden="true">
      <img :src="chopsticks" alt="" width="54.7595" height="87.5142" />
    </div>

    <header class="aroma__heading">
      <p class="aroma__eyebrow">WHERE THE AROMA LEADS</p>
      <h2 class="aroma__title">香氣所至</h2>
    </header>

    <div
      class="track"
      @pointerdown="swipe.onPointerDown"
      @pointerup="swipe.onPointerUp"
      @pointerleave="swipe.onPointerLeave"
    >
      <img class="track__line" :src="flowLine" alt="" width="1600" height="80" draggable="false" />

      <ol class="track__cards">
        <li
          v-for="(step, i) in steps"
          :key="step.no"
          class="card"
          :class="{ 'card--active': i === active }"
          @click="go(i)"
        >
          <img class="card__bg" :src="step.card" alt="" draggable="false" />
          <span class="card__no">{{ step.no }}</span>
          <h3 class="card__title">{{ step.title }}</h3>
          <p class="card__caption" :style="step.captionStyle">{{ step.caption }}</p>
          <button
            class="card__chevron"
            :aria-label="`下一個香氣故事（目前 ${step.no}）`"
            @click.stop="go(i + 1)"
          >
            <img :src="i === active ? chevronActive : chevron" alt="" width="20" height="20" />
          </button>
        </li>
      </ol>

      <Transition name="story" mode="out-in">
        <article :key="current.no" class="story">
          <div class="story__text">
            <p class="story__eyebrow">{{ current.no }} / &nbsp;AROMA STORY</p>
            <h3 class="story__title">{{ current.story.title }}</h3>
            <p class="story__lead">{{ current.story.lead }}</p>
            <p class="story__body">{{ current.story.body }}</p>
            <blockquote class="story__quote">{{ current.story.quote }}</blockquote>
          </div>
          <figure class="story__figure">
            <img
              :src="current.story.image"
              :style="{ objectPosition: current.story.imagePos }"
              alt=""
              draggable="false"
            />
            <figcaption>{{ current.story.imageCaption }}</figcaption>
          </figure>
        </article>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.aroma {
  position: relative;
  height: 1052px;
  padding-top: 38px;
  overflow: hidden;
  background: var(--c-cream);
}

/* ---------- decorations (positions relative to 1920 frame) ---------- */
.deco {
  position: absolute;
  pointer-events: none;
}
.deco--leaf {
  left: 6.25%;
  top: 520px;
  width: 280px;
  height: 280px;
}
.deco--cloud {
  left: 85.94%;
  top: 450px;
  width: 240px;
  height: 240px;
}
.deco--leaf2 {
  left: 75.52%;
  top: 1000px;
  width: 320px;
  height: 320px;
}
.deco--smoke {
  left: 26.93%;
  top: 219px;
  width: 200px;
  height: 240px;
}
.deco--seed {
  left: 64.95%;
  top: 239px;
  width: 200px;
  height: 200px;
}
.deco--chopsticks {
  left: 44.17%;
  top: 471px;
  width: 122.474px;
  height: 122.474px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.deco--chopsticks img {
  width: 54.7595px;
  height: 87.5142px;
  transform: rotate(-79.48deg);
}

.aroma__bignum {
  position: absolute;
  left: 27.08%;
  top: -40px;
  font-size: 280px;
  font-weight: 700;
  line-height: 280px;
  color: var(--c-brown-800);
  opacity: 0.03;
  pointer-events: none;
}

/* ---------- heading ---------- */
.aroma__heading {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}
.aroma__eyebrow {
  font-size: 13px;
  line-height: 20px;
  color: rgba(92, 58, 30, 0.65);
}
.aroma__title {
  font-size: 34px;
  font-weight: 700;
  line-height: 51px;
  color: var(--c-brown-800);
}

/* ---------- track ---------- */
.track {
  position: relative;
  touch-action: pan-y;
  user-select: none;
}

.track__line {
  position: absolute;
  top: -28px;
  left: 50%;
  width: 1600px;
  height: 80px;
  transform: translateX(-50%);
  pointer-events: none;
}

.track__cards {
  display: flex;
  justify-content: space-between;
  width: min(1676px, 100% - 48px);
  margin: 34px auto 0;
  padding: 0;
  list-style: none;
}

.card {
  position: relative;
  width: 216px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
}
.card--active {
  box-shadow: 0 10px 24px rgba(59, 33, 15, 0.14);
}
.card__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.card__no {
  position: absolute;
  left: 7px;
  top: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(92, 58, 30, 0.24);
  border-radius: 29px;
  background: var(--c-paper);
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.9px;
  color: var(--c-brown-800);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.card--active .card__no {
  border-color: rgba(92, 58, 30, 0);
  background: var(--c-cream-light);
}
.card__title {
  position: absolute;
  left: 62px;
  top: 25px;
  font-size: 23px;
  font-weight: 700;
  line-height: 34px;
  white-space: nowrap;
  color: var(--c-brown-800);
}
.card__caption {
  position: absolute;
  line-height: 24px;
  white-space: nowrap;
  color: var(--c-brown-800);
}
.card__chevron {
  position: absolute;
  left: 195px;
  top: 150px;
  width: 20px;
  height: 20px;
}
.card__chevron img {
  width: 20px;
  height: 20px;
}

/* ---------- story row ---------- */
.story {
  display: flex;
  align-items: center;
  gap: 140px;
  width: min(1660px, 100% - 48px);
  height: 500px;
  margin: 21px auto 0;
}
.story__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  width: 660px;
  height: 420px;
  flex-shrink: 0;
}
.story__eyebrow {
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  white-space: pre;
  color: rgba(92, 58, 30, 0.58);
}
.story__title {
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  color: var(--c-brown-800);
}
.story__lead {
  max-width: 620px;
  font-size: 20px;
  line-height: 34px;
  color: rgba(92, 58, 30, 0.92);
}
.story__body {
  max-width: 620px;
  font-size: 16px;
  line-height: 32px;
  color: rgba(92, 58, 30, 0.78);
}
.story__quote {
  margin: 0;
  padding-left: 19px;
  border-left: 3px solid rgba(92, 58, 30, 0.62);
  font-size: 18px;
  line-height: 32px;
  color: var(--c-brown-800);
}
.story__figure {
  position: relative;
  width: 860px;
  height: 500px;
  flex-shrink: 0;
  margin: 0;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(59, 33, 15, 0.16);
}
.story__figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.story__figure::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 140px;
  background: linear-gradient(to bottom, rgba(31, 18, 8, 0), rgba(31, 18, 8, 0.62));
}
.story__figure figcaption {
  position: absolute;
  left: 24px;
  top: 448px;
  z-index: 1;
  font-size: 24px;
  line-height: 28px;
  white-space: nowrap;
  color: rgba(255, 247, 230, 0.95);
}

.story-enter-active,
.story-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.story-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.story-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

/* ---------- responsive ---------- */
@media (max-width: 1700px) {
  /* the 1600px flow line only lines up with the cards at full width */
  .track__line {
    display: none;
  }
  .story {
    gap: 60px;
  }
  .story__text {
    width: auto;
    flex: 1 1 0;
    flex-shrink: 1;
  }
  .story__figure {
    width: auto;
    flex: 1.3 1 0;
  }
}

@media (max-width: 1100px) {
  .aroma {
    height: auto;
    padding-bottom: 60px;
  }
  .deco--chopsticks,
  .deco--smoke,
  .deco--seed,
  .track__line {
    display: none;
  }
  .track__cards {
    justify-content: center;
    gap: 24px;
  }
  .story {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    height: auto;
    margin-top: 48px;
  }
  .story__text {
    height: auto;
  }
  .story__figure {
    flex: none;
    height: 400px;
  }
  .story__figure figcaption {
    top: auto;
    bottom: 24px;
  }
}

@media (max-width: 768px) {
  .aroma {
    padding-top: 48px;
  }
  .aroma__eyebrow {
    font-size: 12px;
    letter-spacing: 1px;
  }
  .aroma__title {
    font-size: 28px;
  }
  .aroma__bignum {
    display: none;
  }
  .track__cards {
    margin-top: 24px;
  }
  .card {
    display: none;
    width: 216px;
  }
  .card--active {
    display: block;
  }
  .story__text {
    gap: 14px;
  }
  .story__title {
    font-size: 26px;
    line-height: 40px;
  }
  .story__lead {
    font-size: 16px;
    line-height: 28px;
  }
  .story__body {
    font-size: 14px;
    line-height: 26px;
  }
  .story__quote {
    font-size: 15px;
  }
  .story__figure {
    height: 230px;
    border-radius: 16px;
  }
  .story__figure figcaption {
    left: auto;
    right: 16px;
    bottom: 16px;
    font-size: 15px;
  }
}
</style>
