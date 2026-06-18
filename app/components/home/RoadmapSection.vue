<!-- components/home/RoadmapSection.vue -->
<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b
           from-[#060b13] to-primary py-20 text-white
           transition-colors duration-500

           dark:from-[#030711]
           dark:via-[#050b16]
           dark:to-[#07101e]

           md:py-28
           border-b border-slate-100/90
           dark:border-white/[0.06]"
  >
    <!-- Background Effects -->
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <!-- Main Orange Ambient -->
      <div
        class="absolute left-1/2 top-1/4
               h-[500px] w-[500px]
               -translate-x-1/2 rounded-full
               bg-secondary-container/10 blur-[120px]

               dark:bg-orange-500/[0.07]
               dark:blur-[150px]"
      ></div>

      <!-- Blue Ambient -->
      <div
        class="absolute bottom-10 left-10
               h-[300px] w-[300px] rounded-full
               bg-blue-500/5 blur-[100px]

               dark:bg-blue-500/[0.09]
               dark:blur-[130px]"
      ></div>

      <!-- Dark Mode Top Blue Glow -->
      <div
        class="absolute -right-48 -top-56
               hidden h-[680px] w-[680px]
               rounded-full bg-blue-600/[0.10]
               blur-[170px] dark:block"
      ></div>

      <!-- Dark Mode Bottom Orange Glow -->
      <div
        class="absolute -bottom-60 -left-48
               hidden h-[580px] w-[580px]
               rounded-full bg-orange-500/[0.045]
               blur-[160px] dark:block"
      ></div>

      <!-- Dot Grid -->
      <div
        class="absolute inset-0 opacity-10
               bg-[radial-gradient(#ff8928_1px,transparent_1px)]
               [background-size:20px_20px]

               "
      ></div>

      <!-- Dark Technical Grid -->
      <div
        class="absolute inset-0 hidden opacity-[0.12]
               bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)]
               [background-size:48px_48px]
               dark:block"
      ></div>

      <!-- Center Light -->
      <div
        class="absolute left-1/2 top-[45%]
               hidden h-[420px] w-[900px]
               -translate-x-1/2 -translate-y-1/2
               rounded-full bg-blue-500/[0.025]
               blur-[120px] dark:block"
      ></div>

      <!-- Dark Vignette -->
      <div
        class="absolute inset-0 hidden
               bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.60)_100%)]
               dark:block"
      ></div>
    </div>

    <div
      class="relative z-10 mx-auto max-w-container-max
             px-4 xl:px-margin-desktop"
    >
      <!-- Section Header -->
      <div
        class="scroll-reveal mx-auto mb-20 max-w-3xl
               text-center md:mb-28"
      >
        <span
          class="mb-4 block animate-pulse
                 text-[11px] font-bold uppercase
                 tracking-[0.2em] text-secondary-container
                 th:tracking-widest

                 dark:text-orange-400"
        >
          {{ t('home.roadmap.tag') }}
        </span>

        <h2
          class="mb-4 bg-gradient-to-r
                 from-white via-white to-white/70
                 bg-clip-text py-2 text-3xl font-extrabold
                 leading-normal tracking-tight text-transparent

                 dark:from-white
                 dark:via-slate-100
                 dark:to-slate-400

                 md:text-5xl"
        >
          {{ t('home.roadmap.title') }}
        </h2>

        <!-- Status -->
        <div
          class="inline-flex items-center gap-2 rounded-full
                 border border-white/10 bg-white/5
                 px-4 py-2 backdrop-blur-md

                 dark:border-slate-700/60
                 dark:bg-[#0b1424]/70
                 dark:shadow-[0_12px_35px_rgba(0,0,0,0.20)]"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full
                     animate-ping rounded-full bg-emerald-400
                     opacity-60"
            ></span>

            <span
              class="relative inline-flex h-2 w-2
                     rounded-full bg-emerald-400"
            ></span>
          </span>

          <p
            class="text-sm font-light tracking-wide
                   text-white/70 dark:text-slate-300"
          >
            {{ t('home.roadmap.status') }}
          </p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative mx-auto mb-20 max-w-6xl">
        <!-- Desktop Timeline Line -->
        <div
          class="absolute left-0 top-[38px] hidden
                 h-[2px] w-full
                 bg-gradient-to-r
                 from-blue-500/20
                 via-secondary-container
                 to-orange-500/20

                 dark:from-blue-500/[0.12]
                 dark:via-orange-400/70
                 dark:to-orange-500/[0.12]

                 lg:block"
        ></div>

        <!-- Timeline Cards -->
        <div
          class="relative grid grid-cols-1 gap-12
                 lg:grid-cols-3 lg:gap-8"
        >
          <div
            v-for="phase in phases"
            :key="phase.id"
            class="group relative scroll-reveal"
            :style="{ transitionDelay: phase.delay }"
          >
            <!-- Timeline Node -->
            <div
              class="absolute -top-[11px] left-1/2 z-20
                     hidden -translate-x-1/2
                     items-center justify-center lg:flex"
            >
              <div
                class="flex h-6 w-6 items-center justify-center
                       rounded-full border-2 border-white/20
                       bg-[#060b13]
                       transition-all duration-500
                       group-hover:scale-110
                       group-hover:border-secondary-container

                       dark:border-slate-600
                       dark:bg-[#07101e]
                       dark:group-hover:border-orange-400
                       dark:group-hover:shadow-[0_0_18px_rgba(251,146,60,0.30)]"
              >
                <div
                  class="h-2 w-2 rounded-full bg-white/40
                         transition-colors duration-300
                         group-hover:bg-secondary-container

                         dark:bg-slate-500
                         dark:group-hover:bg-orange-400"
                ></div>
              </div>
            </div>

            <!-- Phase Card -->
            <article
              class="roadmap-card h-full rounded-2xl
                     border border-white/[0.06]
                     bg-gradient-to-b
                     from-white/[0.04] to-transparent
                     p-8 backdrop-blur-md
                     transition-all duration-500

                     group-hover:-translate-y-2
                     group-hover:border-white/[0.15]
                     group-hover:bg-white/[0.08]

                    ]

                     md:p-10"
            >
              <!-- Dark Card Gradient -->
              <div
                class="pointer-events-none absolute inset-0 hidden
                       rounded-2xl bg-gradient-to-br
                       from-blue-500/[0.04]
                       via-transparent
                       to-orange-500/[0.025]
                       opacity-0 transition-opacity duration-500
                       group-hover:opacity-100 dark:block"
              ></div>

              <!-- Top Highlight -->
              <div
                class="pointer-events-none absolute inset-x-8 top-0
                       hidden h-px
                       bg-gradient-to-r from-transparent
                       via-blue-400/25 to-transparent
                       dark:block"
              ></div>

              <div class="relative z-10">
                <!-- Date + Icon -->
                <div
                  class="mb-6 flex items-center justify-between"
                >
                  <div
                    class="rounded-md bg-secondary-container/10
                           px-3 py-1 font-ibm-thai
                           text-[10px] font-black uppercase
                           tracking-widest text-secondary-container

                           dark:border dark:border-orange-400/15
                           dark:bg-orange-400/[0.08]
                           dark:text-orange-400"
                  >
                    {{ t(`home.roadmap.p${phase.id}_date`) }}
                  </div>

                  <div
                    class="flex h-10 w-10 items-center
                           justify-center rounded-xl
                           border border-white/10 bg-white/5
                           text-white/70 shadow-inner
                           transition-all duration-500

                           group-hover:border-secondary-container
                           group-hover:bg-secondary-container
                           group-hover:text-white

                           dark:border-slate-700/70
                           dark:bg-slate-800/60
                           dark:text-slate-300
                           dark:group-hover:border-orange-400
                           dark:group-hover:bg-orange-500
                           dark:group-hover:text-white"
                  >
                    <span
                      class="material-symbols-outlined text-lg"
                    >
                      {{ phase.icon }}
                    </span>
                  </div>
                </div>

                <!-- Title -->
                <h4
                  class="font-ibm-thai text-xl font-bold
                         tracking-tight text-white
                         transition-colors duration-300
                         group-hover:text-secondary-container

                         dark:text-slate-50
                         dark:group-hover:text-orange-400"
                >
                  {{ t(`home.roadmap.p${phase.id}_title`) }}
                </h4>

                <!-- Subtitle -->
                <p
                  class="mb-6 mt-1.5 border-b border-white/5
                         pb-4 text-xs font-light uppercase
                         tracking-wide text-white/40

                         dark:border-slate-700/60
                         dark:text-slate-500"
                >
                  {{ t(`home.roadmap.p${phase.id}_subtitle`) }}
                </p>

                <!-- Bullet List -->
                <ul
                  class="space-y-4 text-sm font-light
                         text-white/60 dark:text-slate-400"
                >
                  <li
                    v-for="bulletIndex in phase.bulletsCount"
                    :key="bulletIndex"
                    class="group/item flex items-start gap-3"
                  >
                    <span
                      class="material-symbols-outlined mt-1 shrink-0
                             text-xs text-secondary-container/70
                             transition-transform duration-300
                             group-hover/item:translate-x-1

                             dark:text-orange-400/70"
                    >
                      arrow_forward_ios
                    </span>

                    <span
                      class="leading-relaxed
                             transition-colors duration-300
                             group-hover/item:text-white

                             dark:group-hover/item:text-slate-100"
                    >
                      {{
                        t(
                          `home.roadmap.p${phase.id}_bullet${bulletIndex}`
                        )
                      }}
                    </span>
                  </li>
                </ul>
              </div>

              <!-- Bottom Accent -->
              <div
                class="pointer-events-none absolute bottom-0
                       left-8 h-[2px] w-0 rounded-full
                       bg-gradient-to-r from-secondary-container
                       to-orange-400 transition-all duration-500
                       group-hover:w-20"
              ></div>
            </article>
          </div>
        </div>
      </div>

      <!-- Strategic Enablers -->
      <div
        class="scroll-reveal mx-auto max-w-5xl
               border-t border-white/[0.08] pt-12

               dark:border-slate-700/60"
        style="transition-delay: 400ms"
      >
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Trade Finance -->
          <article
            class="group relative flex items-center gap-5
                   overflow-hidden rounded-xl
                   border border-blue-500/10
                   bg-gradient-to-r
                   from-[#0a1424] to-[#0e1d33]
                   p-6 shadow-2xl
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:border-blue-500/30

                   dark:border-blue-400/[0.10]
                   dark:from-[#081321]
                   dark:to-[#0a1728]
                   dark:shadow-black/30
                   dark:hover:border-blue-400/30
                   dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <!-- Watermark -->
            <div
              class="pointer-events-none absolute -bottom-6 -right-6
                     select-none text-8xl font-black
                     text-blue-500/[0.02]

                     dark:text-blue-300/[0.025]"
            >
              USD
            </div>

            <!-- Glow -->
            <div
              class="pointer-events-none absolute -right-16 -top-20
                     hidden h-44 w-44 rounded-full
                     bg-blue-500/[0.06] blur-[70px]
                     transition-transform duration-700
                     group-hover:scale-125 dark:block"
            ></div>

            <!-- Icon -->
            <div
              class="relative z-10 flex h-12 w-12 shrink-0
                     items-center justify-center rounded-xl
                     border border-blue-500/20
                     bg-blue-500/10 text-blue-400
                     transition-all duration-500

                     group-hover:bg-blue-500
                     group-hover:text-white

                     dark:border-blue-400/20
                     dark:bg-blue-400/[0.08]
                     dark:text-blue-300
                     dark:group-hover:bg-blue-500
                     dark:group-hover:text-white"
            >
              <span class="material-symbols-outlined">
                account_balance
              </span>
            </div>

            <div class="relative z-10">
              <h5
                class="font-ibm-thai text-sm font-bold
                       uppercase tracking-wide text-white
                       dark:text-slate-100"
              >
                {{ t('home.roadmap.enabler1_title') }}
              </h5>

              <p
                class="mt-1 text-sm font-light leading-relaxed
                       text-white/40 dark:text-slate-400"
              >
                {{ t('home.roadmap.enabler1_desc') }}
              </p>
            </div>
          </article>

          <!-- Risk & Legal Compliance -->
          <article
            class="group relative flex items-center gap-5
                   overflow-hidden rounded-xl
                   border border-orange-500/10
                   bg-gradient-to-r
                   from-[#14140f] to-[#1f1e16]
                   p-6 shadow-2xl
                   transition-all duration-300
                   hover:-translate-y-1
                   hover:border-orange-500/30

                   dark:border-orange-400/[0.10]
                   dark:from-[#141108]
                   dark:to-[#1a150b]
                   dark:shadow-black/30
                   dark:hover:border-orange-400/30
                   dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <!-- Watermark -->
            <div
              class="pointer-events-none absolute -bottom-6 -right-6
                     select-none text-8xl font-black
                     text-orange-500/[0.02]

                     dark:text-orange-300/[0.025]"
            >
              RISK
            </div>

            <!-- Glow -->
            <div
              class="pointer-events-none absolute -right-16 -top-20
                     hidden h-44 w-44 rounded-full
                     bg-orange-500/[0.05] blur-[70px]
                     transition-transform duration-700
                     group-hover:scale-125 dark:block"
            ></div>

            <!-- Icon -->
            <div
              class="relative z-10 flex h-12 w-12 shrink-0
                     items-center justify-center rounded-xl
                     border border-orange-500/20
                     bg-orange-500/10 text-orange-400
                     transition-all duration-500

                     group-hover:bg-orange-500
                     group-hover:text-white

                     dark:border-orange-400/20
                     dark:bg-orange-400/[0.08]
                     dark:text-orange-300
                     dark:group-hover:bg-orange-500
                     dark:group-hover:text-white"
            >
              <span class="material-symbols-outlined">
                gavel
              </span>
            </div>

            <div class="relative z-10">
              <h5
                class="font-ibm-thai text-sm font-bold
                       uppercase tracking-wide text-white
                       dark:text-slate-100"
              >
                {{ t('home.roadmap.enabler2_title') }}
              </h5>

              <p
                class="mt-1 text-sm font-light leading-relaxed
                       text-white/40 dark:text-slate-400"
              >
                {{ t('home.roadmap.enabler2_desc') }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const phases = [
  {
    id: 0,
    icon: 'inventory',
    delay: '0ms',
    bulletsCount: 4
  },
  {
    id: 1,
    icon: 'verified',
    delay: '150ms',
    bulletsCount: 3
  },
  {
    id: 2,
    icon: 'local_shipping',
    delay: '300ms',
    bulletsCount: 4
  }
]
</script>

<style scoped>
.roadmap-card {
  position: relative;
}

@media (prefers-reduced-motion: reduce) {
  .roadmap-card,
  .roadmap-card * {
    transition-duration: 0.01ms !important;
  }

  .animate-pulse,
  .animate-ping {
    animation: none !important;
  }
}
</style>