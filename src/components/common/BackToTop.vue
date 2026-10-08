<script setup>
import macaronPhoto from '../../assets/images/common/macaron-photo.png'
import macaronMask from '../../assets/images/common/macaron-mask.svg'

// Back to Top／Macaron (298:387): fixed on the right side, click → scroll to top.
// 回到最上面
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const maskStyle = {
  maskImage: `url("${macaronMask}")`,
  WebkitMaskImage: `url("${macaronMask}")`,
}
</script>

<template>
  <button class="to-top" aria-label="回到頂端" @click="toTop">
    <span class="to-top__photo" :style="maskStyle">
      <img :src="macaronPhoto" alt="" />
    </span>
  </button>
</template>

<style scoped>
.to-top {
  position: fixed;
  right: 39px;
  bottom: 24px;
  z-index: 40;
  width: 130px;
  height: 265.107px;
  filter: drop-shadow(0 14px 15px rgba(61, 43, 28, 0.24));
  transition: transform 0.3s ease;
}
.to-top:hover {
  transform: translateY(-6px);
}

.to-top__photo {
  position: absolute;
  left: -103.42px;
  top: -105.83px;
  width: 322.788px;
  height: 484.18px;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: 104.35px 107.916px;
  -webkit-mask-position: 104.35px 107.916px;
  mask-size: 128.143px 260.929px;
  -webkit-mask-size: 128.143px 260.929px;
  pointer-events: none;
}
.to-top__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .to-top {
    right: 12px;
    bottom: 12px;
    transform-origin: bottom right;
    scale: 0.4;
  }
}
</style>
