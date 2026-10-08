<script setup>
import ReservationHero from '../components/reservation/ReservationHero.vue'
import ReservationForm from '../components/reservation/ReservationForm.vue'
import ReservationInfo from '../components/reservation/ReservationInfo.vue'
import ReservationContact from '../components/reservation/ReservationContact.vue'
</script>

<template>
  <ReservationHero />

  <!-- Content／Background (118:283) -->
  <section id="booking" class="booking" aria-labelledby="booking-title">
    <header class="booking__heading">
      <p class="booking__eyebrow">BOOK YOUR TABLE</p>
      <h2 id="booking-title" class="booking__title">預留一段好好吃飯的時間</h2>
      <p class="booking__sub">線上訂位開放未來 30 天座席。</p>
    </header>

    <div class="booking__main">
      <ReservationForm class="booking__form" />
      <ReservationInfo class="booking__info" />
    </div>

    <ReservationContact class="booking__contact" />
  </section>
</template>

<style scoped>
.booking {
  padding: 56px 40px 136px;
  background: #f8f5ec;
}

/* Reservation／Heading (123:137): three 40px rows, 12px gap */
.booking__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.booking__eyebrow {
  font-size: 12px;
  font-weight: 700;
  line-height: 40px;
  color: #915226;
}

.booking__title {
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  color: #4a2913;
}

.booking__sub {
  font-size: 16px;
  line-height: 40px;
  color: #7a6652;
}

/* Reservation／Main (123:141): 930 + 36 + 554 = 1520 */
.booking__main {
  display: flex;
  align-items: stretch;
  gap: 36px;
  max-width: 1520px;
  min-height: 1030px;
  margin: 25px auto 0;
}

.booking__form {
  flex: 930 1 0;
  min-width: 0;
}

.booking__info {
  flex: 554 1 0;
  min-width: 0;
}

.booking__contact {
  max-width: 1520px;
  margin: 55px auto 0;
}

@media (max-width: 1280px) {
  .booking__main {
    gap: 28px;
    min-height: 0;
  }
}

@media (max-width: 1024px) {
  .booking__main {
    flex-direction: column;
  }
  .booking__form,
  .booking__info {
    flex: none;
  }
}

/* Mobile／Reservation Content (208:452) */
@media (max-width: 768px) {
  .booking {
    padding: 34px 16px 42px;
  }
  .booking__heading {
    gap: 8px;
  }
  .booking__eyebrow {
    font-size: 10px;
    line-height: normal;
    color: var(--c-brown-800);
  }
  .booking__title {
    font-size: 24px;
    line-height: normal;
  }
  .booking__sub {
    font-size: 12px;
    line-height: normal;
  }
  .booking__main {
    gap: 24px;
    margin-top: 24px;
  }
  .booking__contact {
    margin-top: 24px;
  }
}
</style>
