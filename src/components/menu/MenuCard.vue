<script setup>
// Menu Card (Figma 119:147 desktop, 204:467 mobile)
defineProps({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
  src: { type: String, required: true },
})
</script>

<template>
  <article class="menu-card">
    <div class="menu-card__media">
      <img :src="src" :alt="name" loading="lazy" />
    </div>
    <div class="menu-card__info">
      <h3 class="menu-card__name">{{ name }}</h3>
      <p class="menu-card__desc">{{ desc }}</p>
      <p class="menu-card__price">{{ price }}</p>
    </div>
  </article>
</template>

<style scoped>
.menu-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: 10px;
  background: #fffbf2;
  overflow: hidden;
}

.menu-card__media {
  aspect-ratio: 480 / 350;
  overflow: hidden;
}
.menu-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.menu-card:hover .menu-card__media img {
  transform: scale(1.04);
}

.menu-card__info {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 14px;
  min-height: 260px;
  padding: 24px 30px;
  background: var(--c-white);
}

.menu-card__name,
.menu-card__desc,
.menu-card__price {
  min-height: 40px;
  line-height: normal;
}

.menu-card__name {
  font-size: 22px;
  font-weight: 700;
  color: var(--c-brown-900);
}

.menu-card__desc {
  font-size: 15px;
  color: #7a6652;
}

.menu-card__price {
  font-size: 16px;
  font-weight: 700;
  color: #915226;
}

@media (max-width: 1100px) {
  .menu-card__info {
    min-height: 220px;
    padding: 20px 22px;
  }
  .menu-card__name {
    font-size: 19px;
  }
}

@media (max-width: 768px) {
  .menu-card {
    border-radius: 12px;
    background: #fffcf6;
  }

  .menu-card__media {
    aspect-ratio: auto;
    height: 128px;
  }

  .menu-card__info {
    gap: 7px;
    min-height: 0;
    padding: 12px 12px 14px;
  }

  .menu-card__name,
  .menu-card__desc,
  .menu-card__price {
    min-height: 0;
  }

  .menu-card__name {
    font-size: 15px;
    line-height: 22px;
  }

  .menu-card__desc {
    font-size: 11px;
    line-height: 18px;
  }

  .menu-card__price {
    font-size: 12px;
    color: var(--c-brown-800);
  }
}
</style>
