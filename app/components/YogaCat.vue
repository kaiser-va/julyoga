<script setup lang="ts">
withDefaults(defineProps<{ pose?: 'dance' | 'sit'; label?: string }>(), { pose: 'dance', label: 'Aquarellkatze in einer Yogapose' })
</script>

<template>
  <svg class="yoga-cat" :viewBox="pose === 'dance' ? '830 170 205 225' : '875 1320 170 175'" role="img" :aria-label="label">
    <image href="/images/julyoga-flyer.png" width="1086" height="1536" />
  </svg>
</template>
