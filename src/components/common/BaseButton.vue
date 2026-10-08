<script setup>
// Taste House / Button — Primary / Secondary / Nav, Default + Hover
defineProps({
  label: { type: String, required: true },
  subLabel: { type: String, default: '' },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'nav'].includes(v),
  },
  href: { type: String, default: '#' },
})
</script>

<template>
  <a :href="href" class="th-btn" :class="`th-btn--${variant}`">
    <span class="th-btn__label">{{ label }}</span>
    <span v-if="subLabel" class="th-btn__sub">{{ subLabel }}</span>
  </a>
</template>

<style scoped>
.th-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 24px;
  border-radius: 4px;
  white-space: nowrap;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.th-btn__label {
  font-size: 15px;
  font-weight: 700;
}

.th-btn__sub {
  font-size: 13px;
  color: var(--c-gray-sub);
}

.th-btn--primary {
  height: 47px;
  min-width: 128px;
  background: var(--c-brown-900);
  color: var(--c-white);
}
.th-btn--primary:hover {
  background: #915226;
}

.th-btn--secondary {
  height: 50px;
  min-width: 131px;
  background: var(--c-sand);
  color: var(--c-brown-900);
}
.th-btn--secondary:hover {
  background: var(--c-brown-900);
  color: var(--c-white);
}

.th-btn--nav {
  height: 35px;
  width: 144px;
  border-radius: 10px;
  background: var(--c-brown-600);
  color: var(--c-white);
}
.th-btn--nav .th-btn__label {
  font-size: 16px;
}
.th-btn--nav:hover {
  background: var(--c-brown-700);
}
.th-btn--nav:hover .th-btn__sub {
  color: var(--c-white);
}
</style>
