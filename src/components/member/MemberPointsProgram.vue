<script setup>
import { ref, onMounted } from 'vue'
import pointsImage from '../../assets/images/member/points-program.jpg'

// Member FAQ accordion — content from "03 · Member FAQ Content" (156:2318).
// Desktop (122:163) shows step 03 expanded; mobile (207:476) starts collapsed.
const faqs = [
  {
    no: '01',
    title: '免費註冊會員',
    intro: '加入知味所會員完全免費，完成手機驗證即可立即啟用會員資格：',
    items: [
      '填寫姓名、手機號碼與生日',
      '輸入簡訊驗證碼完成身份確認',
      '取得專屬會員條碼，結帳時出示即可',
      '優先收到季節菜單、活動與生日禮遇通知',
    ],
    note: '會員資料僅用於會員服務；您可隨時於會員中心修改資料或取消訂閱。',
  },
  {
    no: '02',
    title: '用餐累積點數',
    intro: '每次用餐結帳前出示會員條碼，消費即可累積點數：',
    items: [
      '餐飲消費每 NT$10 累積 1 點',
      '點數將於結帳後 24 小時內入帳',
      '折扣、招待及禮券支付部分不列入累積',
      '活動期間可享指定品項加倍點數',
    ],
    note: '點數可於會員中心查詢；若有漏登，請於消費日起 7 日內持發票洽詢。',
  },
  {
    no: '03',
    title: '兌換專屬禮遇',
    intro: '累積滿 50 點即可開始兌換專屬禮遇，多種好禮任你挑選：',
    items: [
      '招牌甜點兌換（50 點）',
      '主廚推薦料理升級（80 點）',
      '雙人精選套餐折抵（120 點）',
      '生日月份加碼 2 倍點數回饋',
      '會員專屬季節限定餐點搶先體驗',
    ],
    note: '點數有效期限為 12 個月，届滿未使用將自動歸零。詳細兌換品項請洽現場服務人員。',
  },
]

const openIndex = ref(2)
const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i
}

onMounted(() => {
  if (window.matchMedia('(max-width: 768px)').matches) openIndex.value = null
})
</script>

<template>
  <!-- Member／Points Program (122:157) -->
  <section id="points" class="points">
    <div class="points__intro">
      <p class="points__eyebrow">POINTS &amp; REWARDS</p>
      <h2 class="points__title">讓喜歡的味道，成為下一次期待</h2>
      <p class="points__text">
        <span class="desktop-only">結帳時出示會員手機號碼即可累積點數；點數有效期限為 12 個月，可於內用消費時直接折抵指定品項。</span>
        <span class="mobile-only">結帳前出示會員條碼即可累積點數，點數有效期限為 12 個月。</span>
      </p>
      <p class="points__rate">100 元 = 1 點　｜　50 點起兌換</p>
      <img class="points__image" :src="pointsImage" alt="桌上的知味所菜單與燭光" />
    </div>

    <div class="faq">
      <div
        v-for="(faq, i) in faqs"
        :key="faq.no"
        class="faq__item"
        :class="{ 'faq__item--open': openIndex === i }"
      >
        <h3 class="faq__heading">
          <button
            :id="`faq-btn-${i}`"
            class="faq__toggle"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-panel-${i}`"
            @click="toggle(i)"
          >
            <span class="faq__no">{{ faq.no }}</span>
            <span class="faq__title">{{ faq.title }}</span>
            <span class="faq__arrow" aria-hidden="true">▼</span>
          </button>
        </h3>
        <div
          :id="`faq-panel-${i}`"
          class="faq__panel"
          role="region"
          :aria-labelledby="`faq-btn-${i}`"
          :inert="openIndex !== i || undefined"
        >
          <div class="faq__panel-inner">
            <div class="faq__body">
              <p>{{ faq.intro }}</p>
              <ul>
                <li v-for="item in faq.items" :key="item">・{{ item }}</li>
              </ul>
              <p>{{ faq.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(1520px, 100% - 80px);
  min-height: 520px;
  margin: 60px auto 0;
  border-radius: 10px;
}

/* left column (122:158) */
.points__intro {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  min-height: 520px;
  padding: 74px 50px 225px 70px;
}
.points__eyebrow,
.points__title,
.points__text,
.points__rate {
  min-height: 40px;
  max-width: 580px;
  color: var(--c-brown-900);
}
.points__eyebrow {
  font-size: 12px;
  font-weight: 700;
}
.points__title {
  font-size: 31px;
  font-weight: 700;
  line-height: normal;
}
.points__text {
  font-size: 16px;
}
.points__rate {
  font-size: 18px;
  font-weight: 700;
}
.points__image {
  position: absolute;
  left: 0;
  right: 16px;
  bottom: 0;
  width: calc(100% - 16px);
  height: 203px;
  border-radius: 25px;
  object-fit: cover;
  object-position: 50% 55%;
}

/* right column (122:163) */
.faq {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 72px 80px;
}
.faq__item {
  max-width: 600px;
}

.faq__heading {
  font-size: inherit;
}
.faq__toggle {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 72px;
  padding: 0 24px;
  border-radius: 12px;
  background: #efe6d5;
  text-align: left;
  transition: background-color 0.2s ease;
}
.faq__toggle:hover {
  background: var(--c-sand);
}
.faq__no {
  width: 40px;
  flex-shrink: 0;
  font-size: 24px;
  font-weight: 700;
  color: rgba(74, 41, 19, 0.35);
}
.faq__title {
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--c-brown-900);
}
.faq__arrow {
  flex-shrink: 0;
  width: 10px;
  font-size: 10px;
  color: rgba(74, 41, 19, 0.4);
  transition: transform 0.3s ease;
}
.faq__item--open .faq__arrow {
  transform: rotate(180deg);
}

/* collapsible panel: animate grid row 0fr → 1fr */
.faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.faq__item--open .faq__panel {
  grid-template-rows: 1fr;
}
.faq__panel-inner {
  overflow: hidden;
}
.faq__body {
  padding: 16px 24px 20px;
  border-radius: 0 0 12px 12px;
  background: #fffcf6;
  font-size: 13px;
  line-height: 2;
  color: #7a6652;
}
.faq__body ul {
  margin: 26px 0;
  padding: 0;
  list-style: none;
}

.mobile-only {
  display: none;
}

@media (max-width: 1100px) {
  .points {
    grid-template-columns: minmax(0, 1fr);
  }
  .faq {
    padding: 0 70px 40px;
  }
  .faq__item {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: inline;
  }

  .points {
    gap: 26px;
    width: 100%;
    min-height: 0;
    margin-top: 26px;
  }

  /* Member／Mobile Points (207:470) */
  .points__intro {
    gap: 10px;
    min-height: 0;
    padding: 20px 18px;
    border-radius: 12px;
    background: var(--c-white);
  }
  .points__eyebrow,
  .points__title,
  .points__text,
  .points__rate {
    min-height: 0;
  }
  .points__eyebrow {
    font-size: 10px;
    color: var(--c-brown-800);
  }
  .points__title {
    font-size: 22px;
    line-height: 30px;
  }
  .points__text {
    font-size: 12px;
    line-height: 20px;
    color: #7a6652;
  }
  .points__rate {
    font-size: 14px;
  }
  .points__image {
    position: static;
    width: 100%;
    height: 130px;
    border-radius: 10px;
  }

  /* Member／Mobile FAQ (207:476) */
  .faq {
    gap: 8px;
    padding: 0;
  }
  .faq__toggle {
    gap: 0;
    height: 54px;
    padding: 0 16px;
    border-radius: 10px;
    background: #fffcf6;
  }
  .faq__item--open .faq__toggle {
    background: var(--c-sand);
  }
  .faq__no,
  .faq__title {
    width: auto;
    flex: none;
    font-size: 13px;
    font-weight: 500;
    color: var(--c-brown-900);
  }
  .faq__no::after {
    content: '　';
  }
  .faq__title {
    flex: 1;
  }
  .faq__arrow {
    width: 16px;
    text-align: center;
  }
  .faq__body {
    padding: 12px 16px 16px;
    font-size: 12px;
  }
  .faq__body ul {
    margin: 12px 0;
  }
}
</style>
