<template>
  <div
    class="mb-12"
    :class="wrapperClass"
  >
    <component
      :is="as"
      class="scroll-reveal mb-4 flex items-center gap-4
             text-2xl font-bold text-primary
             transition-colors duration-300
             dark:text-white md:text-3xl"
    >
      <span
        v-if="icon"
        class="material-symbols-outlined shrink-0 text-4xl
               text-secondary-container
               dark:text-orange-400"
        aria-hidden="true"
      >
        {{ icon }}
      </span>

      <span>
        {{ title }}
      </span>
    </component>

    <p
      v-if="desc"
      class="scroll-reveal delay-300 max-w-4xl
             text-lg leading-relaxed text-slate-600
             transition-colors duration-300
             dark:text-slate-300"
    >
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    desc?: string
    icon?: string
    as?: 'h1' | 'h2' | 'h3'
    wrapperClass?: string
  }>(),
  {
    desc: '',
    icon: '',
    as: 'h2',
    wrapperClass: ''
  }
)
</script>