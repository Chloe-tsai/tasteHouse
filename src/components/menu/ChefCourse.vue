<script setup>
// Menu／Chef Course (Figma 119:165 desktop, 204:485 mobile)
import BaseButton from '../common/BaseButton.vue'
import chefCourse from '../../assets/images/menu/chef-course.jpg'
</script>

<template>
  <section class="chef">
    <div class="chef__card">
      <div class="chef__media">
        <img :src="chefCourse" alt="知味季節套餐：香煎鮭魚佐時蔬" loading="lazy" />
      </div>

      <div class="chef__copy">
        <p class="chef__eyebrow" lang="en">CHEF'S COURSE</p>
        <h2 class="chef__title">知味季節套餐</h2>
        <p class="chef__desc">
          <span class="chef__desktop">從前菜、湯品到主餐與甜點，依當日市場食材設計。讓香氣循序展開，也讓每一道味道都有停留的位置。</span>
          <span class="chef__mobile">從前菜、湯品到主餐與甜點，依當日市場食材設計，讓香氣循序展開。</span>
        </p>
        <p class="chef__price">
          <span class="chef__desktop">午間 NT$ 1,680　／　晚間 NT$ 2,280</span>
          <span class="chef__mobile">午間 NT$ 1,680 ／ 晚間 NT$ 2,280</span>
        </p>
        <BaseButton class="chef__cta" variant="primary" label="查看完整菜單" href="#seasonal-menu" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.chef {
  padding: 70px 40px 181px;
}

.chef__card {
  display: grid;
  grid-template-columns: 780fr 740fr;
  max-width: 1520px;
  height: 630px;
  margin: 0 auto;
  border-radius: 12px;
  background: #e5dbc7;
  overflow: hidden;
}

.chef__media {
  min-width: 0;
  overflow: hidden;
}
.chef__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 70%;
}

.chef__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  min-width: 0;
  padding: 90px 72px 0;
  background: var(--c-white);
  line-height: normal;
}

.chef__copy > p,
.chef__title {
  width: 100%;
  max-width: 520px;
  min-height: 40px;
}

.chef__eyebrow {
  font-size: 13px;
  font-weight: 700;
  color: #915226;
}

.chef__title {
  font-size: 34px;
  font-weight: 700;
  color: var(--c-brown-900);
}

.chef__desc {
  font-size: 17px;
  color: #7a6652;
}

.chef__price {
  font-size: 18px;
  font-weight: 700;
  color: var(--c-brown-900);
}

.chef__mobile {
  display: none;
}

.chef__copy .chef__cta {
  width: 190px;
  height: 48px;
}

@media (max-width: 1100px) {
  .chef__card {
    height: auto;
    min-height: 520px;
  }
  .chef__copy {
    gap: 16px;
    padding: 56px 40px;
  }
  .chef__title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .chef {
    padding: 28px 16px 44px;
  }

  .chef__card {
    grid-template-columns: 1fr;
    min-height: 0;
    background: var(--c-white);
  }

  .chef__media {
    height: 230px;
  }
  .chef__media img {
    object-position: 50% 60%;
  }

  .chef__copy {
    gap: 10px;
    padding: 22px 18px 24px;
  }

  .chef__copy > p,
  .chef__title {
    min-height: 0;
  }

  .chef__eyebrow {
    font-size: 11px;
    color: var(--c-brown-800);
  }
  .chef__title {
    font-size: 24px;
  }
  .chef__desc {
    font-size: 13px;
    line-height: 21px;
  }
  .chef__price {
    font-size: 14px;
  }

  .chef__desktop {
    display: none;
  }
  .chef__mobile {
    display: inline;
  }

  .chef__copy .chef__cta {
    width: 140px;
    min-width: 0;
    height: 44px;
    padding: 0;
    border-radius: 6px;
    color: var(--c-cream);
  }
  .chef__cta :deep(.th-btn__label) {
    font-size: 14px;
  }
}
</style>
