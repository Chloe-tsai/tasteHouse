import { ref } from 'vue'

/**
 * Looping index for carousels / step tracks.
 * @param {number} length total number of slides
 */
export function useCarousel(length) {
  const index = ref(0)

  const go = (i) => {
    index.value = (i + length) % length
  }
  const next = () => go(index.value + 1)
  const prev = () => go(index.value - 1)

  return { index, go, next, prev }
}

/**
 * Horizontal swipe detection: drag left → onLeft, drag right → onRight.
 * Bind the returned handlers to pointerdown / pointerup / pointerleave.
 */
export function useSwipe({ onLeft, onRight, threshold = 60 }) {
  let startX = null

  const onPointerDown = (e) => {
    startX = e.clientX
  }
  const onPointerUp = (e) => {
    if (startX === null) return
    const dx = e.clientX - startX
    startX = null
    if (dx < -threshold) onLeft?.()
    else if (dx > threshold) onRight?.()
  }
  const onPointerLeave = () => {
    startX = null
  }

  return { onPointerDown, onPointerUp, onPointerLeave }
}
