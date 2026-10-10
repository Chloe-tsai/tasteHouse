<script setup>
import { ref, computed } from 'vue'
import MenuCard from './MenuCard.vue'
import dishSalmon from '../../assets/images/menu/dish-salmon.jpg'
import dishPrawn from '../../assets/images/menu/dish-prawn.jpg'
import dishToast from '../../assets/images/menu/dish-toast.jpg'


// Menu／Categories (119:140): Pill / Pill Active buttons (Taste House / Button 186:410, 186:414)
const categories = [
  { key: 'chef', label: '主廚推薦', short: '推薦' },
  { key: 'starter', label: '前菜' },
  { key: 'main', label: '主餐' },
  { key: 'dessert', label: '甜點' },
  { key: 'drink', label: '飲品' },
]

// Menu／Featured Dishes (119:146); the 4th card only appears in the mobile 2-column grid (156:2344)
const dishes = [
  {
    id: 'salmon',
    category: 'main',
    name: '香煎鮭魚・味噌奶油',
    desc: '以白味噌與焦化奶油收尾，搭配當季蔬菜。',
    price: 'NT$ 680',
    src: dishSalmon,
  },
  {
    id: 'salmon-2',
    category: 'main',
    name: '香煎鮭魚・味噌奶油',
    desc: '以白味噌與焦化奶油收尾，搭配當季蔬菜。',
    price: 'NT$ 680',
    src: dishSalmon,
  },
  {
    id: 'salmon-3',
    category: 'main',
    name: '香煎鮭魚・味噌奶油',
    desc: '以白味噌與焦化奶油收尾，搭配當季蔬菜。',
    price: 'NT$ 680',
    src: dishSalmon,
  },
  {
    id: 'prawn',
    category: 'starter',
    name: '炭烤海虎蝦・柚香',
    desc: '炭火封住鮮甜，加入柚子與香草的清爽尾韻。',
    price: 'NT$ 720',
    src: dishPrawn,
  },
  {
    id: 'prawn-2',
    category: 'starter',
    name: '炭烤海虎蝦・柚香',
    desc: '炭火封住鮮甜，加入柚子與香草的清爽尾韻。',
    price: 'NT$ 720',
    src: dishPrawn,
  },
  {
    id: 'prawn-3',
    category: 'starter',
    name: '炭烤海虎蝦・柚香',
    desc: '炭火封住鮮甜，加入柚子與香草的清爽尾韻。',
    price: 'NT$ 720',
    src: dishPrawn,
  },
  {
    id: 'toast',
    category: 'dessert',
    name: '半熟蛋吐司・香料醬',
    desc: '酥脆吐司、柔嫩蛋心與自製香料醬的日常美味。',
    price: 'NT$ 420',
    src: dishToast,
  },
  {
    id: 'toast-2',
    category: 'dessert',
    name: '半熟蛋吐司・香料醬',
    desc: '酥脆吐司、柔嫩蛋心與自製香料醬的日常美味。',
    price: 'NT$ 420',
    src: dishToast,
  },
  {
    id: 'toast-3',
    category: 'dessert',
    name: '半熟蛋吐司・香料醬',
    desc: '酥脆吐司、柔嫩蛋心與自製香料醬的日常美味。',
    price: 'NT$ 420',
    src: dishToast,
  },  
]

const active = ref(categories[0].key)
const tabRefs = ref([])
const filtered = computed(() => dishes.filter((d) => d.category === active.value))

// Arrow-key navigation between tabs
const onKeydown = (e, i) => {
  const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
  if (!step) return
  e.preventDefault()
  const next = (i + step + categories.length) % categories.length
  active.value = categories[next].key
  tabRefs.value[next]?.focus()
}
</script>

<template>
  <section id="seasonal-menu" class="seasonal">
    <header class="seasonal__heading">
      <p class="seasonal__eyebrow" lang="en">SEASONAL SELECTION</p>
      <h2 class="seasonal__title">本季菜單</h2>
    </header>

    <div class="seasonal__tabs" role="tablist" aria-label="菜單分類">
      <button
        v-for="(cat, i) in categories"
        :key="cat.key"
        :ref="(el) => (tabRefs[i] = el)"
        type="button"
        role="tab"
        class="pill"
        :class="{ 'pill--active': cat.key === active }"
        :aria-label="cat.label"
        :aria-selected="cat.key === active"
        :tabindex="cat.key === active ? 0 : -1"
        aria-controls="seasonal-panel"
        @click="active = cat.key"
        @keydown="onKeydown($event, i)"
      >
        <span class="pill__label">{{ cat.label }}</span>
        <span v-if="cat.short" class="pill__label pill__label--short">{{ cat.short }}</span>
      </button>
    </div>

    <Transition name="fade" mode="out-in">
      <div id="seasonal-panel" :key="active" class="seasonal__grid" role="tabpanel">
        <MenuCard
          v-for="dish in filtered"
          :key="dish.id"
          :class="{ 'seasonal__card--mobile': dish.mobileOnly }"
          :name="dish.name"
          :desc="dish.desc"
          :price="dish.price"
          :src="dish.src"
        />
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.seasonal {
  padding: 66px 40px 0;
}

.seasonal__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-weight: 700;
  line-height: normal;
}
.seasonal__eyebrow {
  height: 40px;
  font-size: 12px;
  color: #915226;
}
.seasonal__title {
  height: 40px;
  font-size: 36px;
  color: var(--c-brown-900);
}

.seasonal__tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
  padding: 4px 0;
}

.pill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  flex-shrink: 0;
  border: 1px solid rgba(145, 82, 38, 0.2);
  border-radius: 999px;
  background: var(--c-white);
  color: #915226;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.pill:hover {
  border-color: #915226;
  background: #915226;
  color: var(--c-white);
}
.pill--active {
  border-color: #915226;
  background: #915226;
  color: var(--c-white);
  font-weight: 700;
}
.pill--active:hover {
  border-color: var(--c-brown-900);
  background: var(--c-brown-900);
}
.pill:focus-visible {
  outline: 2px solid var(--c-brown-500);
  outline-offset: 2px;
}
.pill__label--short {
  display: none;
}

.seasonal__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
  max-width: 1520px;
  margin: 32px auto 0;
}

.seasonal__grid > .seasonal__card--mobile {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1100px) {
  .seasonal__grid {
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .seasonal {
    padding: 36px 16px 0;
  }

  .seasonal__heading {
    gap: 8px;
  }
  .seasonal__eyebrow {
    height: auto;
    font-size: 11px;
    color: var(--c-brown-800);
  }
  .seasonal__title {
    height: auto;
    font-size: 28px;
  }

  .seasonal__tabs {
    justify-content: flex-start;
    gap: 6px;
    margin-top: 28px;
    padding: 0 0 2px;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .seasonal__tabs::-webkit-scrollbar {
    display: none;
  }

  .pill {
    width: 63px;
    height: 36px;
    border: 0;
    color: var(--c-brown-800);
    font-size: 13px;
  }
  .pill:first-child {
    width: 67px;
  }
  .pill:hover,
  .pill--active {
    background: var(--c-brown-800);
    color: var(--c-white);
  }

  .pill__label {
    display: none;
  }
  .pill__label--short,
  .pill__label:only-child {
    display: inline;
  }

  .seasonal__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 28px;
  }

  .seasonal__grid > .seasonal__card--mobile {
    display: flex;
  }
}
</style>
