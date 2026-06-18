<template>
  <div
    class="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full
           border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur-md
           transition-colors duration-300
           dark:border-white/10 dark:bg-slate-800/70 dark:shadow-black/10"
  >
    <!-- Status Dot -->
    <span class="relative flex h-2 w-2 shrink-0">
      <span
        class="absolute inline-flex h-full w-full animate-ping rounded-full
               bg-secondary-container opacity-75"
      ></span>

      <span
        class="relative inline-flex h-2 w-2 rounded-full
               bg-secondary-container
               shadow-[0_0_8px_rgba(249,115,22,0.55)]"
      ></span>
    </span>

    <!-- Text -->
    <span
      class="font-ibm-thai text-[12px] font-medium uppercase
             tracking-[0.2em] text-secondary-container
             transition-colors duration-300
             th:tracking-widest
             dark:text-orange-400"
    >
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>