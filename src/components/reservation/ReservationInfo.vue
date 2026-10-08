<script setup>
import pancakes from '../../assets/images/reservation/reservation-pancakes.jpg'

const hours = ['午餐 11:30–14:30', '晚餐 17:30–22:00', '電話 02-2771-0000']

const policies = [
  '座席保留 10 分鐘，逾時將視現場狀況安排。',
  '如需取消或變更，請於用餐前 24 小時聯繫。',
  '六人以上團體與包廂需求，請改以電話洽詢。',
]
</script>

<template>
  <!-- Reservation／Info (123:180) -->
  <aside class="r-info">
    <div class="venue">
      <img class="venue__img" :src="pancakes" alt="知味所的鬆餅料理" width="554" height="360" />
      <div class="venue__copy">
        <h2 class="venue__title">知味所 Taste House</h2>
        <address class="venue__address">台北市大安區仁愛路四段 120 號</address>
        <ul class="venue__hours">
          <li v-for="line in hours" :key="line">{{ line }}</li>
        </ul>
      </div>
    </div>

    <div class="policy">
      <h2 class="policy__title">訂位須知</h2>
      <ul class="policy__list">
        <li v-for="item in policies" :key="item">{{ item }}</li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.r-info {
  display: flex;
  flex-direction: column;
  gap: 26px;
  background: var(--c-white);
  color: #7a6652;
}

/* the desktop image and copy are two separate cards; on mobile they merge (208:491) */
.venue {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.venue__img {
  width: 100%;
  height: 360px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 50% 64%;
}

.venue__copy {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 300px;
  padding: 36px 40px;
  background: var(--c-sand);
  border-radius: 8px;
  font-size: 15px;
}

.venue__title {
  font-size: 24px;
  font-weight: 700;
  color: #4a2913;
}

.venue__address {
  font-style: normal;
  line-height: 1.7;
}

.venue__hours,
.policy__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.venue__hours {
  line-height: 1.9;
}

.policy {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  min-height: 318px;
  padding: 34px 40px 36px;
  background: #fffcf6;
  border-radius: 8px;
}

.policy__title {
  font-size: 22px;
  font-weight: 700;
  color: #4a2913;
}

.policy__list {
  font-size: 15px;
  line-height: 2;
}
.policy__list li::before {
  content: '• ';
}

@media (max-width: 1280px) {
  .venue__copy,
  .policy {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (max-width: 768px) {
  .r-info {
    gap: 24px;
    background: none;
  }
  .venue {
    gap: 0;
    overflow: hidden;
    background: var(--c-white);
    border-radius: 12px;
  }
  .venue__img {
    height: 210px;
    border-radius: 0;
  }
  .venue__copy {
    gap: 9px;
    min-height: 0;
    padding: 20px 18px;
    border-radius: 0;
    font-size: 12px;
  }
  .venue__title {
    font-size: 20px;
  }
  .venue__address,
  .venue__hours {
    line-height: 21px;
  }
  .venue__address {
    margin-bottom: -9px;
  }
  .policy {
    gap: 8px;
    min-height: 0;
    padding: 20px 18px;
    background: var(--c-white);
    border-radius: 12px;
  }
  .policy__title {
    font-size: 20px;
  }
  .policy__list {
    font-size: 12px;
    line-height: 22px;
  }
  .policy__list li::before {
    content: '・';
  }
}
</style>
