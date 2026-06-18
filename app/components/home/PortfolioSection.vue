<template>
  <section
    class="relative overflow-hidden bg-white py-20 text-primary
           transition-colors duration-500
           dark:bg-[#070b14] dark:text-slate-100
           md:py-28
           border-b border-slate-100/90
           dark:border-white/[0.06]"
  >
    <!-- Background Ambient -->
    <div
      class="pointer-events-none absolute left-0 top-1/3
             h-[500px] w-[500px] rounded-full
             bg-blue-500/[0.02] blur-[120px]
             dark:bg-blue-500/[0.08]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute bottom-1/4 right-0
             h-[400px] w-[400px] rounded-full
             bg-secondary-container/5 blur-[100px]
             dark:bg-orange-500/[0.07]"
      aria-hidden="true"
    ></div>


    <!-- Dark Mode Technical Grid -->
    <div
      class="pointer-events-none absolute inset-0 hidden opacity-[0.16]
             bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)]
             [background-size:44px_44px]
             dark:block"
      aria-hidden="true"
    ></div>

    <!-- Dark Mode Vignette -->
    <div
      class="pointer-events-none absolute inset-0 hidden
             bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.50)_100%)]
             dark:block"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-4">
      <div
        class="grid grid-cols-12 items-stretch gap-8 lg:gap-16"
      >
        <!-- Left Content -->
        <div
          class="scroll-reveal row col-span-12 flex flex-col
                 justify-center lg:col-span-6"
        >
          <!-- Tag -->
          <div class="mb-4 flex items-center gap-4 md:mb-6">
            <div
              class="h-[2px] w-12 bg-secondary-container
                     dark:bg-orange-400"
            ></div>

            <span
              class="block font-ibm-thai text-[11px] font-bold
                     uppercase tracking-[0.2em]
                     text-secondary-container
                     transition-colors duration-300
                     th:tracking-widest
                     dark:text-slate-400"
            >
              {{ $t('home.portfolio.tag') }}
            </span>
          </div>

          <!-- Title -->
          <h2
            class="mb-10 font-ibm-thai text-3xl font-extrabold
                   leading-tight tracking-tight text-primary
                   transition-colors duration-300
                   dark:text-white
                   md:mb-14 md:text-5xl"
          >
            {{ $t('home.portfolio.title') }}

            <br class="hidden sm:inline">

            <span class="block sm:pt-0 lg:pt-2">
              <span
                class="block text-primary/80
                       transition-colors duration-300
                       dark:text-slate-300 sm:inline"
              >
                {{ $t('home.portfolio.title2') }}
              </span>
            </span>
          </h2>

          <!-- Portfolio Items -->
          <div class="space-y-4 md:space-y-5">
            <article
              v-for="item in portfolioItems"
              :key="item.id"
              class="portfolio-item-card group relative cursor-pointer
                     overflow-hidden rounded-2xl border
                     border-slate-300/70 bg-[#f8fafc] p-6
                     transition-all duration-500

                     hover:border-secondary-container/50

                     dark:border-slate-700/60
                     dark:bg-[#0b1220]
                     dark:hover:border-orange-400/30
                     dark:hover:bg-[#0e1829]"
            >
              <!-- Hover Gradient -->
              <div
                class="pointer-events-none absolute inset-0
                       bg-gradient-to-r
                       from-secondary-container/[0.04]
                       to-transparent opacity-0
                       transition-opacity duration-500
                       group-hover:opacity-100

                       dark:from-orange-400/[0.065]
                       dark:via-blue-500/[0.025]
                       dark:to-transparent"
                aria-hidden="true"
              ></div>

              <!-- Dark Top Highlight -->
              <div
                class="pointer-events-none absolute inset-x-8 top-0
                       hidden h-px bg-gradient-to-r
                       from-transparent via-blue-400/20
                       to-transparent dark:block"
                aria-hidden="true"
              ></div>

              <div
                class="relative z-10 mb-1 flex items-start
                       justify-between gap-4"
              >
                <h4
                  class="font-ibm-thai text-base font-bold
                         text-primary transition-colors duration-300
                         group-hover:text-secondary-container

                         dark:text-slate-50
                         dark:group-hover:text-orange-400

                         md:text-lg"
                >
                  {{ $t(item.titleKey) }}
                </h4>

                <!-- Icon -->
                <div
                  class="flex h-8 w-8 shrink-0 items-center
                         justify-center rounded-lg bg-slate-100
                         text-primary/60 transition-all duration-500

                         group-hover:bg-secondary-container
                         group-hover:text-white

                         dark:border dark:border-slate-700/70
                         dark:bg-slate-800/80
                         dark:text-slate-400
                         dark:group-hover:border-orange-400
                         dark:group-hover:bg-orange-500
                         dark:group-hover:text-white"
                >
                  <span
                    class="material-symbols-outlined text-lg"
                  >
                    {{ item.icon }}
                  </span>
                </div>
              </div>

              <p
                class="relative z-10 max-w-90 text-xs
                       leading-relaxed text-on-surface-variant/80
                       transition-colors duration-300

                       dark:text-slate-400
                       dark:group-hover:text-slate-300

                       md:text-sm"
              >
                {{ $t(item.descKey) }}
              </p>

              <!-- Bottom Accent -->
              <div
                class="pointer-events-none absolute bottom-0 left-6
                       h-[2px] w-0 rounded-full
                       bg-gradient-to-r from-secondary-container
                       to-orange-400 transition-all duration-500
                       group-hover:w-20"
                aria-hidden="true"
              ></div>
            </article>
          </div>
        </div>

        <!-- Right Image -->
        <div
          class="scroll-reveal col-span-12 mt-8 flex flex-col
                 lg:col-span-6 lg:mt-0"
          style="transition-delay: 200ms"
        >
          <div
            class="group/img relative h-full min-h-[380px] w-full
                   overflow-hidden rounded-2xl border
                   border-slate-200/40 bg-slate-100
                   shadow-[0_20px_45px_-12px_rgba(15,23,42,0.08)]

                   dark:border-white/[0.08]
                   dark:bg-[#0b1220]
                   dark:shadow-[0_30px_70px_-18px_rgba(0,0,0,0.55)]

                   lg:min-h-0"
          >
            <!-- Image -->
            <NuxtImg
              src="/images/cargo-logistics.jpg"
              format="webp"
              preload
              alt="cargo logistics"
              class="h-full w-full object-cover
                     transition-all duration-700
                     group-hover/img:scale-105
                     dark:brightness-[0.72]
                     dark:contrast-110
                     dark:saturate-[0.85]"
            />

            <!-- Light Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t
                     from-primary/25 via-transparent to-transparent
                     mix-blend-multiply

                     dark:from-[#020617]/85
                     dark:via-[#07101e]/20
                     dark:to-blue-950/10
                     dark:mix-blend-normal"
            ></div>

            <!-- Dark Ambient Image Glow -->
            <div
              class="pointer-events-none absolute inset-0 hidden
                     bg-gradient-to-br
                     from-blue-500/[0.06]
                     via-transparent
                     to-orange-500/[0.04]
                     dark:block"
              aria-hidden="true"
            ></div>

            <!-- Image Top Highlight -->
            <div
              class="pointer-events-none absolute inset-x-10 top-0
                     hidden h-px bg-gradient-to-r
                     from-transparent via-blue-300/30
                     to-transparent dark:block"
              aria-hidden="true"
            ></div>

            <!-- Floating Information Card -->
            <div
              class="absolute bottom-4 left-4 right-4
                     max-w-full rounded-xl border
                     border-white/60 bg-white/90 p-5
                     font-ibm-thai
                     shadow-[0_15px_35px_-8px_rgba(15,23,42,0.12)]
                     backdrop-blur-md
                     transition-all duration-500
                     hover:bg-white

                     dark:border-white/[0.09]
                     dark:bg-[#0b1424]/90
                     dark:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.50)]
                     dark:hover:bg-[#0e192b]/95

                     sm:bottom-6 sm:left-6 sm:right-6
                     sm:max-w-[320px]
                     lg:right-auto"
            >
              <div class="mb-3 flex items-center gap-3">
                <!-- Card Icon -->
                <div
                  class="flex h-9 w-9 shrink-0 items-center
                         justify-center rounded-lg bg-primary
                         shadow-sm transition-colors duration-300

                         dark:border dark:border-blue-400/15
                         dark:bg-blue-500/15"
                >
                  <span
                    class="material-symbols-outlined
                           text-sm text-white
                           dark:text-blue-300"
                  >
                    bar_chart
                  </span>
                </div>

                <div class="min-w-0">
                  <div
                    class="text-[8px] font-black uppercase
                           tracking-[0.2em] text-slate-400
                           th:tracking-widest
                           dark:text-slate-500"
                  >
                    {{ $t('home.portfolio.card_status') }}
                  </div>

                  <div
                    class="mt-0.5 truncate text-xs font-bold
                           tracking-tight text-primary
                           dark:text-slate-100"
                  >
                    {{ $t('home.portfolio.card_title') }}
                  </div>
                </div>
              </div>

              <!-- Progress -->
              <div
                class="h-1 w-full overflow-hidden rounded-full
                       bg-slate-100 dark:bg-slate-700/70"
              >
                <div
                  class="h-full w-3/4 rounded-full
                         bg-secondary-container
                         dark:bg-orange-400"
                ></div>
              </div>

              <!-- Footer Link -->
              <NuxtLink
                :to="localePath('/products')"
                class="mt-3 flex cursor-pointer items-center
                       justify-between border-t
                       border-slate-100/60 pt-2.5
                       transition-opacity hover:opacity-80

                       dark:border-slate-700/70"
              >
                <span
                  class="text-[9px] font-bold uppercase
                         tracking-wider text-slate-400
                         dark:text-slate-500"
                >
                  {{ $t('home.portfolio.card_footer') }}
                </span>

                <span
                  class="material-symbols-outlined text-xs
                         text-primary transition-colors
                         group-hover/img:text-secondary-container

                         dark:text-slate-300
                         dark:group-hover/img:text-orange-400"
                >
                  east
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()

const portfolioItems = [
  {
    id: 1,
    titleKey: 'home.portfolio.item1_title',
    descKey: 'home.portfolio.item1_desc',
    icon: 'local_gas_station'
  },
  {
    id: 2,
    titleKey: 'home.portfolio.item2_title',
    descKey: 'home.portfolio.item2_desc',
    icon: 'propane_tank'
  },
  {
    id: 3,
    titleKey: 'home.portfolio.item3_title',
    descKey: 'home.portfolio.item3_desc',
    icon: 'wb_sunny'
  }
]
</script>

<style scoped>
.portfolio-item-card {
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.02);
}

.portfolio-item-card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 18px 40px -15px rgba(15, 23, 42, 0.14),
    0 0 24px -12px rgba(255, 137, 40, 0.12);
}

.dark .portfolio-item-card {
  box-shadow:
    0 12px 30px -15px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.dark .portfolio-item-card:hover {
  box-shadow:
    0 24px 50px -18px rgba(0, 0, 0, 0.62),
    0 0 26px -14px rgba(249, 115, 22, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

@media (prefers-reduced-motion: reduce) {
  .portfolio-item-card {
    transition-duration: 0.01ms !important;
  }
}
</style>