<script setup>
// 空間／Desktop (116:78) · 空間／Mobile 375 (202:453)
import SpaceHero from '../components/space/SpaceHero.vue'
import SpaceIntro from '../components/space/SpaceIntro.vue'
import SpaceGallery from '../components/space/SpaceGallery.vue'
import SpaceDetails from '../components/space/SpaceDetails.vue'
import SpaceTransportation from '../components/space/SpaceTransportation.vue'
import SpaceVisitNote from '../components/space/SpaceVisitNote.vue'
</script>

<template>
  <SpaceHero />

  <!-- Content／Background (118:151) -->
  <div class="space-content">
    <SpaceIntro class="space-content__intro" />
    <SpaceGallery class="space-content__gallery" />
    <SpaceDetails class="space-content__details" />
    <SpaceTransportation class="space-content__transport" />
    <SpaceVisitNote class="space-content__visit" />
  </div>
</template>

<style scoped>
.space-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 80px;
  background: #f8f5ec;
}
.space-content > * {
  width: min(1520px, 100% - 80px);
}

.space-content__intro {
  width: min(1160px, 100% - 32px);
}
.space-content__gallery {
  margin-top: 30px;
}
.space-content__details {
  margin-top: 60px;
}
.space-content__transport {
  margin-top: 20px;
}
.space-content__visit {
  margin-top: 35px;
}

/* Mobile／Space Content (205:452) */
@media (max-width: 768px) {
  .space-content {
    padding: 34px 16px 40px;
  }
  .space-content > *,
  .space-content__intro {
    width: 100%;
  }
  .space-content__gallery,
  .space-content__details,
  .space-content__transport,
  .space-content__visit {
    margin-top: 24px;
  }
}
</style>
