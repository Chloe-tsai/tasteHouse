<script setup>
// Space／Details (120:152) — __Space Info Card Hover (191:500):
// all cards share one neutral fill; the tan colour block (#d7c3a1) appears on hover only.
const details = [
  { no: '01', title: '座席配置', text: '吧台 8 席、一般座席 36 席，另設 8 人包廂。' },
  { no: '02', title: '空間服務', text: '提供生日、紀念日與小型聚會的桌面安排。' },
  { no: '03', title: '無障礙資訊', text: '入口與主要用餐區皆可無障礙通行。' },
]
</script>

<template>
  <section class="details" aria-label="空間資訊">
    <article
      v-for="item in details"
      :key="item.no"
      class="detail"
    >
      <h3 class="detail__head">
        <span class="detail__no">{{ item.no }}</span>
        <span class="detail__title">{{ item.title }}</span>
      </h3>
      <p class="detail__text">{{ item.text }}</p>
      <span class="detail__arrow" aria-hidden="true">›</span>
    </article>
  </section>
</template>

<style scoped>
.details {
  display: flex;
  gap: 28px;
  background: var(--c-white);
}

.detail {
  position: relative;
  flex: 1 1 488px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 56px 24px 32px;
  border: 1px solid rgba(92, 58, 30, 0.12);
  border-radius: 999px;
  background: #fffcf6;
  line-height: normal;
  transition: background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.detail:hover,
.detail:active {
  border-color: transparent;
  background: #d7c3a1;
  box-shadow: 0 6px 8px rgba(74, 41, 19, 0.16);
}

.detail__head {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}
.detail__no {
  font-size: 14px;
  color: #915226;
}
.detail__title {
  font-size: 26px;
  color: var(--c-brown-900);
}

.detail__text {
  font-size: 16px;
  color: #7a6652;
}

.detail__arrow {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  font-family: Inter, var(--font-sans);
  font-size: 32px;
  line-height: 1;
  color: #5c3b1f;
}

@media (max-width: 1100px) {
  .details {
    flex-direction: column;
    gap: 16px;
    background: none;
  }
  .detail {
    flex-basis: auto;
  }
}

/* Space／Mobile Details (205:463) */
@media (max-width: 768px) {
  .details {
    gap: 10px;
  }
  .detail {
    gap: 6px;
    padding: 16px 18px;
    border-radius: 18px;
  }
  .detail__head {
    gap: 8px;
  }
  .detail__no,
  .detail__title {
    font-size: 18px;
    color: var(--c-brown-900);
  }
  .detail__text {
    font-size: 12px;
    line-height: 19px;
  }
  .detail__arrow {
    display: none;
  }
}
</style>
