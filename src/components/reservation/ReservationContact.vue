<template>
  <!-- Reservation／Contact (123:189) -->
  <section class="r-contact" aria-labelledby="r-contact-title">
    <div class="r-contact__text">
      <h2 id="r-contact-title" class="r-contact__title">需要協助安排多人聚餐？</h2>
      <p class="r-contact__desc">
        歡迎致電 <a href="tel:0227710000">02-2771-0000</a>，由專人協助確認座席<span
          class="r-contact__desc-extra"
          >與菜單</span
        >。
      </p>
    </div>
    <p class="r-contact__hours">服務時間 10:30–21:00</p>
  </section>
</template>

<style scoped>
.r-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 320px;
  padding: 0 70px;
  background: var(--c-brown-900);
  border-radius: 10px;
}

/* Figma frame 123:190: 150px tall, content starts at its top */
.r-contact__text {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 150px;
  max-width: 800px;
}

.r-contact__title {
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  color: #fff7e5;
}

.r-contact__desc {
  font-size: 16px;
  line-height: 40px;
  color: #e5d6bd;
}
.r-contact__desc a:hover {
  text-decoration: underline;
}

.r-contact__hours {
  flex-shrink: 0;
  align-self: center;
  font-size: 17px;
  font-weight: 700;
  line-height: 40px;
  color: #fff7e5;
  text-align: right;
}

@media (max-width: 1100px) {
  .r-contact {
    padding: 0 48px;
  }
}

/* Reservation／Mobile Contact (208:499) */
@media (max-width: 768px) {
  .r-contact {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    min-height: 0;
    padding: 22px 18px;
    border-radius: 12px;
  }
  .r-contact__text {
    gap: 8px;
    min-height: 0;
  }
  .r-contact__title {
    font-size: 19px;
    line-height: normal;
    color: var(--c-cream);
  }
  .r-contact__desc {
    font-size: 12px;
    line-height: 19px;
    color: #f5e8d1;
  }
  .r-contact__desc-extra,
  .r-contact__hours {
    display: none;
  }
}
</style>
