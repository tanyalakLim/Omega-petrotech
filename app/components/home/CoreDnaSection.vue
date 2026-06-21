<template>
  <section
    class="technical-grid relative overflow-hidden bg-[#f8fafc] py-20
           font-ibm-thai text-primary transition-colors duration-500
           dark:bg-[#070b14] dark:text-slate-100
           md:py-28
           border-b border-slate-100/90
           dark:border-white/[0.06]"
           
  >
    <!-- Ambient Light -->
    <div
      class="pointer-events-none absolute right-1/4 top-1/4
             h-[500px] w-[500px] rounded-full
             bg-secondary-container/5 blur-[120px]
             dark:bg-orange-500/[0.06]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute bottom-0 left-1/4
             h-[400px] w-[400px] rounded-full
             bg-blue-500/[0.03] blur-[100px]
             dark:bg-blue-500/[0.08]"
      aria-hidden="true"
    ></div>

    <!-- Dark Mode Additional Glow -->
    <div
      class="pointer-events-none absolute -right-52 -top-52
             hidden h-[620px] w-[620px] rounded-full
             bg-blue-600/[0.08] blur-[160px]
             dark:block"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-60 -left-52
             hidden h-[600px] w-[600px] rounded-full
             bg-orange-500/[0.05] blur-[160px]
             dark:block"
      aria-hidden="true"
    ></div>

    <!-- Dark Vignette -->
    <div
      class="pointer-events-none absolute inset-0 hidden
             bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.5)_100%)]
             dark:block"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4">
      <!-- Header Layer -->
      <div
        class="mb-20 flex flex-col items-start justify-between
               gap-8 md:mb-24 lg:flex-row lg:items-end lg:gap-16"
      >
        <div class="max-w-2xl">
          <div class="mb-4 flex items-center gap-4 md:mb-6">
            <div
              class="h-[2px] w-12 bg-secondary-container
                     dark:bg-orange-400"
            ></div>

            <span
              class="block text-[11px] font-bold uppercase
                     tracking-[0.2em] text-secondary-container
                     transition-colors duration-300
                     th:tracking-widest
                     dark:text-slate-400"
            >
              {{ $t('home.dna.tag') }}
            </span>
          </div>

          <h2
            class="scroll-reveal text-3xl font-extrabold
                   leading-[1.4] tracking-tight text-primary
                   transition-colors duration-300
                   dark:text-white md:text-5xl"
          >
            {{ $t('home.dna.title_part1') }}

            <br class="hidden sm:inline">

            <span class="block sm:pt-0 lg:pt-2">
              <span
                class="block text-primary/80
                       transition-colors duration-300
                       dark:text-slate-300 sm:inline"
              >
                {{ $t('home.dna.title_part2') }}
              </span>
            </span>
          </h2>
        </div>

        <!-- Quote -->
        <div
          class="w-full border-l-2 border-slate-200
                 pl-6 font-light italic leading-relaxed
                 text-on-surface-variant/70
                 transition-colors duration-300
                 dark:border-slate-700
                 dark:text-slate-400
                 lg:w-1/3 lg:pl-8"
        >
          “{{ $t('home.dna.quote') }}”
        </div>
      </div>

      <!-- DNA Cards -->
      <div
        class="grid grid-cols-1 gap-8
               md:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="card in dnaCards"
          :key="card.id"
          class="dna-white-card scroll-reveal group relative
                 flex h-full flex-col overflow-hidden rounded-2xl
                 border border-slate-200/60 bg-white/80
                 p-8 backdrop-blur-sm
                 transition-colors duration-500

                 dark:border-slate-700/60
                 dark:bg-[#0b1220]/90
                 dark:backdrop-blur-md
                 dark:hover:border-orange-400/30
                 dark:hover:bg-[#0e1829]

                 md:p-10"
          :style="{ transitionDelay: card.delay }"
        >
          <!-- Hover Gradient -->
          <div
            class="pointer-events-none absolute inset-0 rounded-2xl
                   bg-gradient-to-b from-slate-50/50 to-transparent
                   opacity-0 transition-opacity duration-500
                   group-hover:opacity-100

                   dark:from-blue-500/[0.045]
                   dark:via-transparent
                   dark:to-orange-500/[0.025]"
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

          <!-- Decorative Dark Glow -->
          <div
            class="pointer-events-none absolute -right-20 -top-20
                   hidden h-48 w-48 rounded-full
                   bg-blue-500/[0.05] blur-[70px]
                   transition-transform duration-700
                   group-hover:scale-125
                   dark:block"
            aria-hidden="true"
          ></div>

          <!-- Card Icon -->
          <div class="relative z-10 mb-8">
            <div
              class="flex h-14 w-14 items-center justify-center
                     rounded-xl border border-slate-100 bg-slate-50
                     text-primary shadow-sm
                     transition-all duration-500

                     group-hover:scale-105
                     group-hover:border-primary
                     group-hover:bg-primary
                     group-hover:text-white

                     dark:border-slate-700/70
                     dark:bg-slate-800/70
                     dark:text-slate-200
                     dark:shadow-black/20
                     dark:group-hover:border-orange-400
                     dark:group-hover:bg-orange-500
                     dark:group-hover:text-white"
            >
              <span
                class="material-symbols-outlined text-2xl
                       transition-transform duration-300
                       group-hover:rotate-3"
              >
                {{ card.icon }}
              </span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="relative z-10">
            <h3
              class="mb-4 text-xl font-bold tracking-tight
                     text-primary transition-colors duration-300
                     group-hover:text-secondary-container

                     dark:text-slate-50
                     dark:group-hover:text-orange-400"
            >
              {{ $t(`home.dna.card${card.id}_title`) }}
            </h3>

            <p
              class="mb-8 text-sm font-light leading-relaxed
                     text-on-surface-variant
                     transition-colors duration-300
                     group-hover:text-primary/80

                     dark:text-slate-400
                     dark:group-hover:text-slate-300"
            >
              {{ $t(`home.dna.card${card.id}_desc`) }}
            </p>
          </div>

          <!-- Card Footer -->
          <div
            class="relative z-10 mt-auto flex items-center
                   justify-between border-t border-slate-100
                   pt-5 transition-colors duration-300

                   dark:border-slate-700/60"
          >
            <NuxtLink
              to="/about"
              class="inline-flex items-center gap-1.5
                     text-xs font-semibold uppercase tracking-wider
                     text-primary/60 transition-colors duration-300
                     group-hover:text-secondary-container

                     dark:text-slate-400
                     dark:group-hover:text-orange-400"
            >
              <span>
                {{ $t('home.dna.more') }}
              </span>

              <span
                class="material-symbols-outlined text-xs
                       transition-transform duration-300
                       group-hover:translate-x-1"
              >
                arrow_forward
              </span>
            </NuxtLink>

            <span
              class="material-symbols-outlined text-sm
                     text-slate-300 transition-colors duration-300
                     group-hover:text-secondary-container/40

                     dark:text-slate-600
                     dark:group-hover:text-orange-400/50"
            >
              {{ card.footerIcon }}
            </span>
          </div>

          <!-- Bottom Accent -->
          <div
            class="pointer-events-none absolute bottom-0 left-8
                   h-[2px] w-0 rounded-full
                   bg-gradient-to-r from-secondary-container
                   to-orange-400 transition-all duration-500
                   group-hover:w-20"
            aria-hidden="true"
          ></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const dnaCards = [
  {
    id: 1,
    icon: 'account_balance',
    footerIcon: 'link',
    delay: '0ms'
  },
  {
    id: 2,
    icon: 'verified_user',
    footerIcon: 'lock',
    delay: '150ms'
  },
  {
    id: 3,
    icon: 'hub',
    footerIcon: 'grid_view',
    delay: '300ms'
  }
]
</script>

<style scoped>
.dna-white-card {
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.5s ease,
    background-color 0.5s ease,
    box-shadow 0.5s ease;

  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.01),
    0 2px 4px -1px rgba(0, 0, 0, 0.01);
}

.dna-white-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 137, 40, 0.4);

  box-shadow:
    0 20px 35px -10px rgba(15, 23, 42, 0.08),
    0 0 25px -5px rgba(255, 137, 40, 0.05);
}

/* Dark Mode Card Shadow */
.dark .dna-white-card {
  box-shadow:
    0 14px 35px -14px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.025);
}

.dark .dna-white-card:hover {
  border-color: rgba(251, 146, 60, 0.3);

  box-shadow:
    0 24px 55px -16px rgba(0, 0, 0, 0.58),
    0 0 28px -12px rgba(249, 115, 22, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

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

@media (prefers-reduced-motion: reduce) {
  .dna-white-card,
  .dna-white-card * {
    transition-duration: 0.01ms !important;
  }
}
</style>