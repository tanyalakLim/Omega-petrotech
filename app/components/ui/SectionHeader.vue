<template>
  <div
    class="mx-auto mb-16 max-w-3xl space-y-6 text-center"
  >
    <!-- Tag -->
    <UiBaseTag
      v-if="tag"
      :text="tag"
    />

    <!-- Title -->
    <component
      :is="as"
      class="scroll-reveal grid gap-2 font-ibm-thai text-3xl font-bold tracking-tight transition-colors duration-300 md:text-5xl"
      :class="headingClass"
    >
      <template
        v-for="(part, index) in formattedTitle"
        :key="index"
      >
        <span
          :class="
            index > 0
              ? 'block text-primary/80 dark:text-slate-300/80'
              : ''
          "
        >
          {{ part }}
        </span>
      </template>
    </component>

    <!-- Description -->
    <p
      v-if="desc"
      class="mx-auto text-base font-light leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-300 md:text-lg"
    >
      {{ desc }}
    </p>

    <!-- Divider -->
    <div
      v-else
      class="mx-auto mb-12 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-90 dark:opacity-100"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    tag?: string
    title: string | string[]
    desc?: string
    as?: 'h1' | 'h2'
  }>(),
  {
    as: 'h2'
  }
)

const formattedTitle = computed(() => {
  return Array.isArray(props.title)
    ? props.title
    : [props.title]
})

const headingClass = computed(() => {
  if (props.as === 'h1') {
    return 'font-black text-slate-950 dark:text-white'
  }

  return 'text-primary dark:text-slate-100'
})
</script>