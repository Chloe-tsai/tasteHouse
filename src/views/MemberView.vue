<script setup>
import MemberHero from '../components/member/MemberHero.vue'
import MemberBenefits from '../components/member/MemberBenefits.vue'
import MemberPointsProgram from '../components/member/MemberPointsProgram.vue'
import MemberJoin from '../components/member/MemberJoin.vue'
</script>

<template>
  <MemberHero />
  <!-- Content／Background (118:239) -->
  <div class="member-content">
    <MemberBenefits />
    <MemberPointsProgram />
    <MemberJoin />
  </div>
</template>

<style scoped>
.member-content {
  padding-bottom: 66px;
  background: #f8f5ec;
}

@media (max-width: 768px) {
  .member-content {
    padding: 34px 16px 42px;
  }
}
</style>
