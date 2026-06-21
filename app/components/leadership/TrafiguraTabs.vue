<template>
  <nav
    class="tabs-scroll sticky top-[86px] z-30 overflow-x-auto
           border-y border-slate-300/70 bg-[#f7f7f5]/90
           backdrop-blur-xl
           dark:border-white/[0.09] dark:bg-[#060b13]/90"
    :aria-label="t('leadership.tabsLabel')"
  >
    <div class="mx-auto flex min-w-max items-center justify-center">
      <button
        v-for="(group, index) in groups"
        :key="group.id"
        type="button"
        class="group relative flex min-h-[72px] items-center gap-3
               px-5 text-left transition-colors duration-300
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-inset
               focus-visible:ring-secondary-container/45
               md:px-8 lg:px-10"
        :class="modelValue === group.id
          ? 'text-slate-950 dark:text-white'
          : 'text-slate-400 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200'"
        :aria-current="modelValue === group.id ? 'page' : undefined"
        @click="$emit('update:modelValue', group.id)"
      >
        <span
          class="text-[10px] font-black tracking-[0.12em]"
          :class="modelValue === group.id
            ? 'text-secondary-container dark:text-orange-400'
            : 'text-slate-300 dark:text-slate-700'"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </span>

        <span class="text-sm font-black md:text-base">
          {{ group.label }}
        </span>

        <span
          class="ml-1 inline-flex h-6 min-w-6 items-center justify-center
                 rounded-full px-1.5 text-[9px] font-black"
          :class="modelValue === group.id
            ? 'bg-slate-900 text-white dark:bg-orange-500'
            : 'bg-slate-200 text-slate-500 dark:bg-white/[0.06] dark:text-slate-500'"
        >
          {{ safeCount(group.members) }}
        </span>

        <span
          class="absolute inset-x-5 bottom-0 h-[3px] origin-left
                 bg-secondary-container transition-transform duration-300
                 dark:bg-orange-400 md:inset-x-8 lg:inset-x-10"
          :class="modelValue === group.id ? 'scale-x-100' : 'scale-x-0'"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { LeadershipGroup, LeadershipGroupId } from '../../types/leadership'

const { t } = useI18n()

defineProps<{
  groups: LeadershipGroup[]
  modelValue: LeadershipGroupId
}>()

defineEmits<{
  'update:modelValue': [value: LeadershipGroupId]
}>()

const safeCount = (members: unknown) =>
  Array.isArray(members) ? members.length : 0
</script>

<style scoped>
.tabs-scroll {
  scrollbar-width: none;
}

.tabs-scroll::-webkit-scrollbar {
  display: none;
}
</style>
