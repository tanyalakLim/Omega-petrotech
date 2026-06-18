<template>

    <div
      class="relative z-10 mx-auto max-w-7xl space-y-12
             px-6 xl:px-margin-desktop"
    >
      <!-- Header Section -->
      <div class="mb-16 space-y-6 text-center md:mb-20">
        <h3
          class="mb-3 text-sm font-bold uppercase
                 tracking-[0.3em] text-secondary-container
                 transition-colors duration-300
                 th:tracking-widest
                 dark:text-orange-400"
        >
          {{ t('about.jv.sectionTitle') }}
        </h3>

        <h2
          class="scroll-reveal mb-6 text-3xl font-black
                 leading-tight text-slate-950
                 transition-colors duration-300
                 dark:text-white md:text-5xl"
        >
          {{ t('about.jv.mainHeading') }}
        </h2>

        <p
          class="scroll-reveal mx-auto max-w-2xl
                 text-base font-light leading-relaxed
                 text-slate-600 transition-colors duration-300
                 dark:text-slate-300 md:text-lg"
        >
          {{ t('about.jv.subHeading') }}
        </p>

      </div>

      <!-- Cards Grid -->
      <div
        class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3"
      >
        <article
          v-for="card in cardStructures"
          :key="card.id"
          class="scroll-reveal group relative flex flex-col
                 justify-between overflow-hidden rounded-3xl
                 border border-slate-100 bg-white p-8
                 shadow-sm transition-all duration-300
                 hover:-translate-y-1
                 hover:border-secondary-container/50

                 dark:border-slate-700/60
                 dark:bg-[#0b1220]
                 dark:shadow-black/20
                 dark:hover:border-orange-400/30
                 dark:hover:bg-[#0e1829]
                 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.32)]"
          :style="{ transitionDelay: card.delay }"
        >
          <!-- Hover Background -->
          <div
            class="pointer-events-none absolute inset-0
                   bg-gradient-to-br
                   from-secondary-container/[0.04]
                   via-transparent to-blue-500/[0.02]
                   opacity-0 transition-opacity duration-500
                   group-hover:opacity-100

                   dark:from-orange-400/[0.06]
                   dark:via-transparent
                   dark:to-blue-500/[0.04]"
            aria-hidden="true"
          ></div>

          <!-- Dark Top Highlight -->
          <div
            class="pointer-events-none absolute inset-x-8 top-0
                   hidden h-px
                   bg-gradient-to-r from-transparent
                   via-blue-400/25 to-transparent
                   dark:block"
            aria-hidden="true"
          ></div>

          <!-- Watermark -->
          <div
            class="pointer-events-none absolute -bottom-8 -right-6
                   text-slate-900/[0.025]
                   transition-all duration-700
                   group-hover:-translate-x-2
                   group-hover:-translate-y-2
                   group-hover:scale-110
                   dark:text-white/[0.025]"
            aria-hidden="true"
          >
            <span class="material-symbols-outlined text-[120px]">
              {{ card.icon }}
            </span>
          </div>

          <!-- Card Content -->
          <div class="relative z-10">
            <!-- Company Tag -->
            <div
              class="mb-6 inline-flex items-center gap-2
                     rounded-xl bg-slate-900 px-4 py-1.5
                     text-xs font-bold text-white
                     transition-colors duration-300

                     dark:border dark:border-white/[0.08]
                     dark:bg-slate-800/80
                     dark:text-orange-300"
            >
              <span
                class="h-1.5 w-1.5 rounded-full
                       bg-secondary-container
                       dark:bg-orange-400"
              ></span>

              {{ card.tag }}
            </div>

            <!-- Company Title -->
            <h4
              class="mb-3 text-xl font-bold leading-snug
                     tracking-wide text-slate-950
                     transition-colors duration-300
                     dark:text-slate-50"
            >
              {{ t(`about.jv.cards.${card.id}.title`) }}
            </h4>

            <!-- Description -->
            <p
              class="hyphens-auto text-sm font-light
                     leading-relaxed text-slate-600
                     transition-colors duration-300
                     dark:text-slate-300"
            >
              {{ t(`about.jv.cards.${card.id}.description`) }}
            </p>
          </div>

          <!-- Card Footer -->
          <div
            class="relative z-10 mt-8 flex items-center gap-3
                   border-t border-slate-100 pt-4
                   text-xs font-semibold
                   text-secondary-container
                   transition-colors duration-300

                   dark:border-slate-700/60
                   dark:text-orange-400"
          >
            <div
              class="flex h-8 w-8 shrink-0 items-center
                     justify-center rounded-lg
                     bg-orange-50 text-secondary-container
                     transition-all duration-300

                     group-hover:bg-secondary-container
                     group-hover:text-white

                     dark:bg-orange-400/[0.08]
                     dark:text-orange-400
                     dark:group-hover:bg-orange-500
                     dark:group-hover:text-white"
            >
              <span class="material-symbols-outlined text-sm">
                {{ card.icon }}
              </span>
            </div>

            <span class="leading-normal">
              {{ t(`about.jv.cards.${card.id}.footerText`) }}
            </span>
          </div>

          <!-- Bottom Accent -->
          <div
            class="absolute bottom-0 left-8 h-[2px] w-0
                   rounded-full
                   bg-gradient-to-r
                   from-secondary-container to-orange-400
                   transition-all duration-500
                   group-hover:w-20"
            aria-hidden="true"
          ></div>
        </article>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cardStructures = [
  {
    id: 'bmi',
    tag: 'BMI International',
    icon: 'shield',
    delay: '0ms'
  },
  {
    id: 'jb1',
    tag: 'JB1 Group FZC',
    icon: 'language',
    delay: '150ms'
  },
  {
    id: 'ept',
    tag: 'EPT (Thailand)',
    icon: 'gavel',
    delay: '300ms'
  }
]
</script>

<style scoped>
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