<script setup>
import facebook from '../../assets/images/common/facebook.svg'
import instagram from '../../assets/images/common/instagram.svg'
import line from '../../assets/images/common/line.svg'
import topBorder from '../../assets/images/common/footer-top-border.svg'
import divider from '../../assets/images/common/footer-divider.svg'

const socials = [
  { name: 'Facebook', icon: facebook, href: '#' },
  { name: 'Instagram', icon: instagram, href: '#' },
  { name: 'LINE', icon: line, href: '#' },
]
</script>

<template>
  <footer class="footer">
    <img class="footer__top-border" :src="topBorder" alt="" width="1920" height="1" />

    <div class="footer__inner">
      <div class="footer__brand">
        <p class="footer__logo">Taste House</p>
        <p class="footer__slogan">知味所在，和洋交會。</p>
        <ul class="footer__social">
          <li v-for="s in socials" :key="s.name">
            <a :href="s.href" :aria-label="s.name">
              <img :src="s.icon" alt="" width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>

      <address class="footer__contact">
        <p class="footer__heading">聯絡我們</p>
        <p><span class="footer__emoji" aria-hidden="true">📍 </span>台北市大安區仁愛路四段 120 號</p>
        <p><span class="footer__emoji" aria-hidden="true">📞 </span><a href="tel:0227710000">02-2771-0000</a></p>
        <p><span class="footer__emoji" aria-hidden="true">✉️ </span><a href="mailto:info@tastehouse.tw">info@tastehouse.tw</a></p>
      </address>

      <a
        class="footer__map"
        href="https://www.google.com/maps/search/?api=1&query=台北市大安區仁愛路四段120號"
        target="_blank"
        rel="noopener"
      >
        <span class="footer__map-pin">📍</span>
        <span class="footer__map-title">Google Map</span>
        <span class="footer__map-label">地圖位置</span>
        <span class="footer__map-addr">台北市大安區仁愛路四段 120 號</span>
      </a>
    </div>

    <div class="footer__bottom">
      <img class="footer__divider" :src="divider" alt="" width="1520" height="1" />
      <p class="footer__copy">© 2026 Taste House. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  min-height: 244px;
  background: var(--c-gray-bar);
  color: var(--c-gray-text);
  overflow: hidden;
}

.footer__top-border {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 1px;
  pointer-events: none;
}

.footer__inner {
  display: grid;
  grid-template-columns: 370px 537px 495px;
  width: min(1520px, 100% - 48px);
  margin: 0 auto;
  padding-top: 28px;
}

.footer__brand,
.footer__contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-top: 15px;
}
.footer__logo {
  font-size: 28px;
  font-weight: 700;
}
.footer__slogan {
  font-size: 14px;
}
.footer__social {
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: opacity 0.2s ease;
}
.footer__social a:hover {
  opacity: 0.6;
}
.footer__social img {
  width: 20px;
  height: 20px;
}

.footer__contact {
  gap: 0;
  font-style: normal;
  font-size: 14px;
  line-height: 2;
}
.footer__heading {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
}

.footer__map {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 149px;
  padding-top: 19px;
  border: 1px solid rgba(212, 204, 192, 0.2);
  border-radius: 8px;
  background: var(--c-gray-bar);
}
.footer__map-pin {
  font-size: 32px;
  line-height: normal;
}
.footer__map-title {
  margin-top: 4px;
  font-size: 14px;
}
.footer__map-addr {
  margin-top: 10px;
  font-size: 12px;
}

.footer__bottom {
  width: min(1520px, 100% - 48px);
  margin: 19px auto 0;
  padding-bottom: 18px;
  text-align: center;
}
.footer__divider {
  width: 100%;
  height: 1px;
}
.footer__copy {
  margin-top: 12px;
  font-size: 12px;
}

@media (max-width: 1500px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr minmax(0, 495px);
    gap: 32px;
  }
}

.footer__map-label {
  display: none;
}

/* Mobile footer (Figma 206:493): brown text, no icons, map placeholder */
@media (max-width: 768px) {
  .footer {
    color: var(--c-brown-800);
  }
  .footer__top-border,
  .footer__social,
  .footer__emoji,
  .footer__map-pin,
  .footer__map-title,
  .footer__map-addr {
    display: none;
  }
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 12px;
    width: auto;
    padding: 36px 24px 0;
  }
  .footer__brand {
    gap: 6px;
    padding: 0 0 12px;
    border-bottom: 1px solid rgba(92, 58, 30, 0.2);
  }
  .footer__slogan {
    font-size: 13px;
    color: rgba(92, 58, 30, 0.75);
  }
  .footer__contact {
    padding-top: 0;
    font-size: 12px;
    line-height: 22px;
    color: rgba(92, 58, 30, 0.78);
  }
  .footer__heading {
    margin-bottom: 6px;
    font-size: 15px;
    color: var(--c-brown-800);
  }
  .footer__map {
    justify-content: center;
    height: 150px;
    padding-top: 0;
    border-color: rgba(212, 204, 192, 0.55);
    background: rgba(212, 204, 192, 0.3);
  }
  .footer__map-label {
    display: block;
    font-size: 13px;
    color: rgba(92, 58, 30, 0.6);
  }
  .footer__bottom {
    width: auto;
    margin: 12px 24px 0;
    padding-bottom: 28px;
    text-align: left;
  }
  .footer__divider {
    display: none;
  }
  .footer__copy {
    margin-top: 0;
    font-size: 10px;
    color: rgba(92, 58, 30, 0.55);
  }
}
</style>
