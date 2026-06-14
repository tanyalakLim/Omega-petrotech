<!-- components/home/CtaSection.vue -->
<template>
  <section class="font-ibm-thai py-20 md:py-28 bg-[#f8fafc] text-primary overflow-hidden relative technical-grid">
    <!-- แสง Ambient Light จางๆ ด้านหลัง -->
    <div
      class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/5 rounded-full blur-[120px] pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none">
    </div>

    <div class="max-w-4xl mx-auto px-6 xl:px-margin-desktop text-center relative z-10 scroll-reveal">
      <div
        class="inline-flex items-center gap-2 mb-6 md:mb-8 bg-slate-50 border border-outline-variant/30 px-6 py-2 rounded-full">
        <span class="text-[12px] font-bold text-secondary-container uppercase tracking-[0.2em]">{{ $t('home.cta.tag')
          }}</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-10 tracking-tight">{{ $t('home.cta.title') }}
      </h2>
      <p
        class="text-on-surface-variant text-base md:text-xl font-light mb-10 md:mb-16 leading-relaxed max-w-3xl mx-auto">
        {{ $t('home.cta.subtitle') }}
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto sm:max-w-none">
        <NuxtLink :to="localePath('/contact')"
          class="inline-flex items-center justify-center gap-2 bg-primary text-white font-ibm-thai px-8 py-4 md:py-5 text-[14px] font-medium uppercase tracking-[0.1em] hover:bg-secondary-container transition-all rounded-xl shadow-2xl w-full sm:w-auto group">
          <span>{{ $t('home.cta.btn_primary') }}</span>

          <span class="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
            east
          </span>
        </NuxtLink>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-30">
    </div>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const localePath = useLocalePath()
</script>