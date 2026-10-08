<script setup>
import iconTrain from '../../assets/images/space/icon-train.svg'
import iconBus from '../../assets/images/space/icon-bus.svg'
import iconCar from '../../assets/images/space/icon-car.svg'

// Space／Transportation (128:199) — __Transportation Item Hover (193:478):
// all rows share one neutral fill; the tan colour block (#d7c3a1) appears on hover only.
const routes = [
  { mode: '捷運', icon: iconTrain, text: '忠孝復興站 2 號出口，步行約 5 分鐘' },
  { mode: '公車', icon: iconBus, text: '路線 204、212 於仁愛路四段站下車' },
  { mode: '開車', icon: iconCar, text: '備有地下停車場，可由仁愛路入口進入' },
]
</script>

<template>
  <section class="transport" aria-labelledby="transport-title">
    <header class="transport__head">
      <span class="transport__no">04</span>
      <h2 id="transport-title" class="transport__title">交通方式</h2>
      <span class="transport__en">HOW TO GET HERE</span>
    </header>

    <ul class="transport__list">
      <li
        v-for="route in routes"
        :key="route.mode"
        class="route"
      >
        <span class="route__icon">
          <img :src="route.icon" alt="" width="20" height="20" />
        </span>
        <div class="route__content">
          <h3 class="route__mode">{{ route.mode }}</h3>
          <p class="route__text">{{ route.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.transport {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border-radius: 10px;
  background: var(--c-white);
  line-height: normal;
}

.transport__head {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}
.transport__no,
.transport__en {
  flex-shrink: 0;
  font-size: 14px;
  color: #915226;
  white-space: nowrap;
}
.transport__title {
  flex: 1 1 0;
  min-width: 0;
  font-size: 26px;
  color: var(--c-brown-900);
}

.transport__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.route {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border: 1px solid rgba(92, 58, 30, 0.12);
  border-radius: 12px;
  background: #fffcf6;
  transition: background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.route:hover,
.route:active {
  border-color: transparent;
  background: #d7c3a1;
  box-shadow: 0 5px 7px rgba(74, 41, 19, 0.14);
}

.route__icon {
  display: flex;
  transition: background-color 0.25s ease;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: var(--c-sand);
}
.route:hover .route__icon,
.route:active .route__icon {
  background: #fffcf6;
}

.route__content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}
.route__mode {
  font-size: 18px;
  font-weight: 700;
  color: var(--c-brown-900);
}
.route__text {
  font-size: 16px;
  color: #7a6652;
}

/* Space／Mobile Transportation (205:473) */
@media (max-width: 768px) {
  .transport {
    gap: 10px;
    padding: 18px 14px;
    border-radius: 12px;
  }
  .transport__head {
    flex-wrap: wrap;
    gap: 8px;
  }
  .transport__no {
    font-size: 20px;
    color: var(--c-brown-900);
  }
  .transport__title {
    font-size: 20px;
  }
  .transport__en {
    order: 1;
    flex-basis: 100%;
    margin-top: 2px;
    font-size: 10px;
    color: var(--c-brown-800);
  }
  .transport__list {
    gap: 10px;
  }
  .route {
    padding: 12px 14px;
    border-radius: 10px;
    background: #f8f5ec;
  }
  .route:hover,
  .route:active {
    background: #d7c3a1;
  }
  .route__icon {
    display: none;
  }
  .route__content {
    gap: 4px;
  }
  .route__mode {
    font-size: 15px;
  }
  .route__text {
    font-size: 11px;
    line-height: 18px;
  }
}
</style>
