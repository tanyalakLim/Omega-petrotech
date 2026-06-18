<template>
  <section :class="bordered && 'border-t border-slate-100 pt-7 dark:border-slate-800'">
    <div class="mb-5 flex items-center gap-3">
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
        :class="iconClass"
      >
        <span class="material-symbols-outlined text-[20px]">
          {{ icon }}
        </span>
      </div>

      <div>
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">
          {{ title }}
        </h3>
        <p class="text-[11px] text-slate-400">{{ subtitle }}</p>
      </div>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  iconClass: string
  title: string
  subtitle: string
  bordered?: boolean
}>()
</script>
