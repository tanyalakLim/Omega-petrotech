<template>
  <div class="inline-flex items-center gap-3 mb-4 bg-white/70 border border-white/10 px-4 py-2 rounded-full">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
    </span>
    <span class="text-[12px] font-ibm-thai font-medium text-secondary-container uppercase tracking-[0.2em] th:tracking-widest">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
// กำหนด Props รับค่าข้อความจากภายนอก
defineProps<{
  text: string
}>()
</script>