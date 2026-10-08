<script setup>
import MenuHero from '../components/menu/MenuHero.vue'
import SeasonalMenu from '../components/menu/SeasonalMenu.vue'
import ChefCourse from '../components/menu/ChefCourse.vue'
</script>

<template>
  <MenuHero />
  <!-- Content／Background (118:107) -->
  <div class="menu-content">
    <SeasonalMenu />
    <ChefCourse />
  </div>
</template>

<style scoped>
.menu-content {
  background: #f8f5ec;
}
</style>
