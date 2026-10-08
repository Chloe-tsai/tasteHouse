<script setup>
import { ref } from 'vue'
import BaseButton from '../common/BaseButton.vue'
import logo from '../../assets/images/common/logo.png'

defineProps({
  // current page key, exposed to assistive tech via aria-current
  current: { type: String, default: 'home' },
})

const navLinks = [
  { key: 'about', label: '關於', sub: 'About', href: './index.html' },
  { key: 'menu', label: '菜單', sub: 'Menu', href: './menu.html' },
  { key: 'space', label: '空間', sub: 'Space', href: './space.html' },
  { key: 'news', label: '消息', sub: 'News', href: './news.html' },
  { key: 'member', label: '會員', sub: 'Member', href: './member.html' },
]

const menuOpen = ref(false)
const keyword = ref('')
</script>

<template>
  <header class="header">
    <a href="./index.html" class="header__logo" aria-label="知味所 Taste House 首頁">
      <img :src="logo" alt="知味所" width="194" height="74" />
    </a>

    <form class="search" role="search" @submit.prevent>
      <span class="search__icon" aria-hidden="true">⌕</span>
      <label class="visually-hidden" for="site-search">搜尋</label>
      <input id="site-search" v-model="keyword" type="search" placeholder="搜尋 Search..." />
    </form>

    <button
      class="header__toggle"
      :aria-expanded="menuOpen"
      aria-controls="site-nav"
      aria-label="開啟選單"
      @click="menuOpen = !menuOpen"
    >
      <span></span><span></span><span></span>
    </button>

    <nav id="site-nav" class="nav" :class="{ 'nav--open': menuOpen }" @click="menuOpen = false">
      <ul class="nav__links">
        <li v-for="link in navLinks" :key="link.label">
          <a
            :href="link.href"
            class="nav-link"
            :aria-current="link.key === current ? 'page' : undefined"
          >
            <span class="nav-link__label">{{ link.label }}</span>
            <span class="nav-link__sub">{{ link.sub }}</span>
          </a>
        </li>
      </ul>
      <BaseButton variant="nav" label="訂位" sub-label="Reservation" href="./reservation.html" />
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  height: var(--header-h);
  padding-right: 47px;
  background: var(--c-gray-bar);
}

.header__logo img {
  width: 194px;
  height: 74px;
  object-fit: cover;
}

/* Search Bar (56:68) */
.search {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 220px;
  height: 36px;
  margin-left: 20px;
  padding: 10px 12px;
  border: 1px solid #d9d4cc;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.search__icon {
  font-size: 20px;
  color: rgba(92, 58, 30, 0.6);
}
.search input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: 16px;
  color: var(--c-brown-800);
}
.search input::placeholder {
  color: rgba(92, 58, 30, 0.5);
}

/* nav-row (42:104) */
.nav {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  padding: 0 10px;
}
.nav__links {
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Taste House / Nav Link (155:256) */
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 35px;
  padding: 0 12px;
  border-radius: 4px;
  white-space: nowrap;
  transition: background-color 0.2s ease, border-radius 0.2s ease;
}
.nav-link__label {
  font-size: 16px;
  font-weight: 700;
  color: var(--c-gray-text);
}
.nav-link__sub {
  font-size: 13px;
  color: var(--c-gray-sub);
}
.nav-link:hover {
  background: var(--c-gray-text);
  border-radius: 10px;
}
.nav-link:hover .nav-link__label {
  color: var(--c-white);
}

.header__toggle {
  display: none;
}

@media (max-width: 1100px) {
  .header {
    padding-right: 16px;
  }
  .search {
    display: none;
  }
  .header__toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    margin-left: auto;
    padding: 10px 8px;
  }
  .header__toggle span {
    display: block;
    height: 2px;
    background: var(--c-gray-text);
    border-radius: 1px;
  }
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 12px 16px 20px;
    background: var(--c-gray-bar);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    display: none;
  }
  .nav--open {
    display: flex;
  }
  .nav__links {
    flex-direction: column;
    gap: 4px;
  }
  .nav-link {
    justify-content: flex-start;
    height: 44px;
  }
  .nav :deep(.th-btn--nav) {
    width: 100%;
    height: 44px;
  }
}

/* Mobile header (Figma 203:472): 64px, logo 112×42 */
@media (max-width: 768px) {
  .header {
    height: 64px;
    padding: 0 16px;
  }
  .header__logo img {
    width: 112px;
    height: 42px;
    object-fit: contain;
  }
}
</style>
