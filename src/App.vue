<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import BackToTop from './components/common/BackToTop.vue'

defineProps({
  page: { type: String, required: true },
  view: { type: Object, required: true },
})
</script>

<template>
  <div id="top">
    <SiteHeader :current="page" />
    <main>
      <component :is="view" />
    </main>
    <SiteFooter />
    <BackToTop />
  </div>
</template>
