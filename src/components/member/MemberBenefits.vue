<script setup>
import decoPattern01 from '../../assets/images/member/deco-pattern-01.svg'
import decoPattern03 from '../../assets/images/member/deco-pattern-03.svg'

// Member／Benefits (122:141). Mobile copy (207:457) differs slightly, kept in `mobileText`.
const benefits = [
  {
    no: '01',
    title: '用餐點數',
    text: '每消費 NT$100 累積 1 點，可兌換指定料理與飲品。',
    href: '#points',
    deco: 'pattern-01',
  },
  {
    no: '02',
    title: '生日禮遇',
    text: '生日當月享專屬甜點，與同行親友一起分享。',
    mobileText: '生日當月享專屬點數與限定招待。',
    href: '#join',
    deco: 'pattern-02',
    tinted: true,
  },
  {
    no: '03',
    title: '優先邀請',
    text: '優先收到季節餐會、限定菜單與活動席次。',
    href: './news.html',
    deco: 'pattern-03',
  },
]
</script>

<template>
  <section class="benefits">
    <!-- Member／Heading (122:137) -->
    <header class="benefits__heading">
      <p class="benefits__eyebrow">TASTE HOUSE MEMBER</p>
      <h2 class="benefits__title">每一次相聚，都值得被記得</h2>
      <p class="benefits__lead">
        <span class="desktop-only">加入會員，累積用餐點數並收到專屬季節邀請。</span>
        <span class="mobile-only">加入會員，累積點數與專屬禮遇。</span>
      </p>
    </header>

    <ul class="benefits__list">
      <li
        v-for="item in benefits"
        :key="item.no"
        class="benefit"
        :class="{ 'benefit--tinted': item.tinted }"
      >
        <p class="benefit__no">{{ item.no }}</p>
        <h3 class="benefit__title">{{ item.title }}</h3>
        <p class="benefit__text">
          <template v-if="item.mobileText">
            <span class="desktop-only">{{ item.text }}</span>
            <span class="mobile-only">{{ item.mobileText }}</span>
          </template>
          <template v-else>{{ item.text }}</template>
        </p>
        <!-- Taste House / Button, Style=Text (147:215 / hover 147:218) -->
        <a :href="item.href" class="benefit__link">了解更多 →</a>

        <img
          v-if="item.deco === 'pattern-01'"
          class="benefit__deco benefit__deco--01"
          :src="decoPattern01"
          alt=""
          width="180"
          height="180"
        />
        <span v-else-if="item.deco === 'pattern-02'" class="benefit__deco benefit__deco--02" aria-hidden="true">
          <span class="diamond diamond--lg"></span>
          <span class="diamond diamond--md"></span>
          <span class="diamond diamond--sm"></span>
        </span>
        <img
          v-else
          class="benefit__deco benefit__deco--03"
          :src="decoPattern03"
          alt=""
          width="180"
          height="190"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.benefits {
  padding-top: 56px;
}

.benefits__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 150px;
  text-align: center;
}
.benefits__eyebrow {
  height: 40px;
  font-size: 12px;
  font-weight: 700;
  color: #915226;
}
.benefits__title {
  height: 40px;
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-brown-900);
}
.benefits__lead {
  height: 40px;
  font-size: 16px;
  color: #7a6652;
}

.benefits__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  width: min(1520px, 100% - 80px);
  margin: 30px auto 0;
  padding: 0;
  list-style: none;
}

.benefit {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  height: 380px;
  padding: 52px 46px 0;
  border-radius: 10px;
  background: #fffcf6;
  overflow: hidden;
}
.benefit--tinted {
  background: var(--c-sand);
}

.benefit__no,
.benefit__title,
.benefit__text,
.benefit__link {
  position: relative;
  z-index: 1;
}

.benefit__no {
  min-height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #915226;
}
.benefit__title {
  min-height: 40px;
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  color: var(--c-brown-900);
}
.benefit__text {
  min-height: 40px;
  max-width: 390px;
  font-size: 16px;
  color: #7a6652;
}

.benefit__link {
  display: inline-flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #915226;
  transition: color 0.2s ease;
}
.benefit__link:hover,
.benefit__link:focus-visible {
  color: var(--c-brown-900);
}

.benefit__deco {
  position: absolute;
  right: -2px; /* left 310px in a 488px card */
  top: 210px;
  pointer-events: none;
}
.benefit__deco--02 {
  right: -69px; /* left 377px in a 488px card */
  top: 148px;
  width: 180px;
  height: 180px;
}

/* Deco Pattern 02 (130:224): three rotated squares */
.diamond {
  position: absolute;
  border-radius: 4px;
  transform: rotate(45deg);
}
.diamond--lg {
  left: 54.85px;
  top: -30px;
  width: 120px;
  height: 120px;
  border: 2px solid var(--c-white);
  opacity: 0.5;
}
.diamond--md {
  left: 76.57px;
  top: 20px;
  width: 80px;
  height: 80px;
  border: 2px solid var(--c-white);
  opacity: 0.5;
}
.diamond--sm {
  left: 98.28px;
  top: 70px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.35);
}

.mobile-only {
  display: none;
}

@media (max-width: 1100px) {
  .benefit {
    padding: 40px 32px 0;
  }
  .benefit__title {
    font-size: 24px;
  }
}

@media (max-width: 900px) {
  .benefits__list {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: inline;
  }

  .benefits {
    padding-top: 0;
  }
  .benefits__heading {
    gap: 8px;
    height: auto;
  }
  .benefits__eyebrow {
    height: auto;
    font-size: 10px;
    color: var(--c-brown-800);
  }
  .benefits__title {
    height: auto;
    font-size: 24px;
  }
  .benefits__lead {
    height: auto;
    font-size: 12px;
    line-height: 19px;
  }

  .benefits__list {
    gap: 10px;
    width: 100%;
    margin-top: 26px;
  }
  .benefit {
    gap: 7px;
    height: auto;
    padding: 18px;
    border-radius: 12px;
  }
  .benefit__no {
    min-height: 0;
    font-size: 11px;
    color: var(--c-brown-800);
  }
  .benefit__title {
    min-height: 0;
    font-size: 20px;
  }
  .benefit__text {
    min-height: 0;
    font-size: 12px;
    line-height: 20px;
  }
  .benefit__link,
  .benefit__deco {
    display: none;
  }
}
</style>
