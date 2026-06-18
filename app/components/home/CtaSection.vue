<!-- components/home/CtaSection.vue -->
<template>
  <section
    class="technical-grid relative overflow-hidden
           bg-[#f8fafc] py-20 font-ibm-thai text-primary
           transition-colors duration-500
           dark:bg-[#070b14] dark:text-slate-100
           md:py-28"
  >
    <!-- Ambient Light: Orange -->
    <div
      class="pointer-events-none absolute right-1/4 top-1/4
             h-[500px] w-[500px] rounded-full
             bg-secondary-container/5 blur-[120px]
             dark:bg-orange-500/[0.07]"
      aria-hidden="true"
    ></div>

    <!-- Ambient Light: Blue -->
    <div
      class="pointer-events-none absolute bottom-0 left-1/4
             h-[400px] w-[400px] rounded-full
             bg-blue-500/[0.03] blur-[100px]
             dark:bg-blue-500/[0.09]"
      aria-hidden="true"
    ></div>


    <!-- Dark Mode Center Glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2
             hidden h-[350px] w-[850px]
             -translate-x-1/2 -translate-y-1/2
             rounded-full bg-blue-500/[0.035]
             blur-[110px] dark:block"
      aria-hidden="true"
    ></div>

    <!-- Dark Mode Vignette -->
    <div
      class="pointer-events-none absolute inset-0 hidden
             bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.52)_100%)]
             dark:block"
      aria-hidden="true"
    ></div>

    <!-- Main Content -->
    <div
      class="scroll-reveal relative z-10 mx-auto
             max-w-4xl px-6 text-center
             xl:px-margin-desktop"
    >
      <!-- Tag -->
      <UiBaseTag :text="t('home.cta.tag')" />

      <!-- Title -->
      <h2
        class="my-6 text-3xl font-bold tracking-tight
               text-primary transition-colors duration-300
               dark:text-white
               md:mb-10 md:text-5xl"
      >
        {{ t('home.cta.title') }}
      </h2>

      <!-- Subtitle -->
      <p
        class="mx-auto mb-10 max-w-3xl
               text-base font-light leading-relaxed
               text-on-surface-variant
               transition-colors duration-300
               dark:text-slate-300
               md:mb-16 md:text-xl"
      >
        {{ t('home.cta.subtitle') }}
      </p>

      <!-- Actions -->
      <div
        class="mx-auto flex max-w-md flex-col
               justify-center gap-4
               sm:max-w-none sm:flex-row"
      >
        <NuxtLink
          :to="localePath('/contact')"
          class="group inline-flex w-full items-center
                 justify-center gap-2 rounded-xl
                 bg-primary px-8 py-4
                 font-ibm-thai text-[14px] font-medium
                 uppercase tracking-[0.1em] text-white
                 shadow-2xl
                 transition-all duration-300
                 hover:-translate-y-0.5
                 hover:bg-secondary-container

                 dark:bg-orange-500
                 dark:text-white
                 dark:shadow-[0_18px_45px_rgba(249,115,22,0.16)]
                 dark:hover:bg-white
                 dark:hover:text-[#07101e]
                 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]

                 sm:w-auto md:py-5"
        >
          <span>
            {{ t('home.cta.btn_primary') }}
          </span>

          <span
            class="material-symbols-outlined text-lg
                   transition-transform duration-300
                   group-hover:translate-x-1"
          >
            east
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
/* Light Mode Grid */
.technical-grid {
  background-image:
    linear-gradient(
      to right,
      rgba(226, 232, 240, 0.4) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(226, 232, 240, 0.4) 1px,
      transparent 1px
    );

  background-size: 40px 40px;
}

/* Dark Mode Grid */
.dark .technical-grid {
  background-image:
    linear-gradient(
      to right,
      rgba(100, 116, 139, 0.08) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(100, 116, 139, 0.08) 1px,
      transparent 1px
    );

  background-size: 40px 40px;
}
</style>