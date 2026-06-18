<!-- components/home/HeroSection.vue -->
<template>
  <section
    class="relative overflow-hidden bg-primary py-[130px] pb-[100px]
           transition-colors duration-500
           dark:bg-[#050914]
           md:flex md:min-h-auto md:items-center
           border-b border-primary
           dark:border-white/[0.06]
           lg:min-h-screen lg:py-0"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <!-- Background Image -->
      <ClientOnly>
        <div
          class="absolute inset-0 bg-cover bg-center grayscale
                 opacity-40 transition-all duration-500
                 dark:opacity-30 dark:contrast-125"
          :style="{
            backgroundImage: `url('/images/hero-vessel.jpg?t=${Date.now()}')`
          }"
        ></div>
      </ClientOnly>

      <!-- Overlay: Light Mode คงเดิม -->
      <div
        class="absolute inset-0
               bg-gradient-to-tr
               from-primary/90 via-primary/80 to-transparent

               dark:from-[#050914]/95
               dark:via-[#07101e]/90
               dark:to-[#0c2540]/35"
      ></div>

      <!-- Micro Dot Grid: Light Mode คงเดิม -->
      <div
        class="absolute inset-0 opacity-10
               bg-[radial-gradient(#ff8928_1px,transparent_1px)]
               [background-size:20px_20px]
               dark:opacity-[0.07]"
      ></div>

      <!-- Dark Vignette -->
      <div
        class="pointer-events-none absolute inset-0 hidden
               bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(2,6,23,0.58)_100%)]
               dark:block"
        aria-hidden="true"
      ></div>
    </div>

    <!-- Main Content -->
    <div
      class="relative z-10 mx-auto grid w-full max-w-7xl
             grid-cols-12 items-center gap-8 px-4 pt-10
             md:px-8 lg:gap-16"
    >
      <!-- Left Content -->
      <div class="scroll-reveal col-span-12 lg:col-span-7">
        <!-- Tag -->
        <div
          class="mb-6 inline-flex items-center gap-3 rounded-full
                 border border-white/10 bg-white/5 px-4 py-2
                 transition-colors duration-300
                 dark:border-white/[0.08]
                 dark:bg-[#0b1424]/60
                 dark:backdrop-blur-md"
        >
          <span class="relative flex h-2 w-2 shrink-0">
            <span
              class="absolute inline-flex h-full w-full
                     animate-ping rounded-full
                     bg-secondary-container opacity-75
                     dark:bg-orange-400 dark:opacity-50"
            ></span>

            <span
              class="relative inline-flex h-2 w-2 rounded-full
                     bg-secondary-container
                     dark:bg-orange-400"
            ></span>
          </span>

          <span
            class="font-ibm-thai text-[10px] font-medium uppercase
                   tracking-[0.2em] text-white
                   th:tracking-widest
                   dark:text-slate-200"
          >
            {{ t('home.hero.tag') }}
          </span>
        </div>

        <!-- Heading -->
        <h1
          class="mb-6 font-ibm-thai text-4xl font-bold
                 leading-[1.2] tracking-tight text-white
                 md:text-5xl lg:text-6xl"
        >
          {{ t('home.hero.title_part1') }}

          <br class="hidden sm:inline">

          <span class="block pt-1 sm:inline">
            <span
              class="text-secondary-container
                     dark:text-orange-400"
            >
              {{ t('home.hero.title_part2') }}
            </span>
          </span>
        </h1>

        <!-- Subtitle -->
        <p
          class="mb-10 max-w-xl font-ibm-thai
                 text-xl font-light leading-relaxed
                 text-white/60
                 dark:text-slate-300/80
                 md:text-lg"
        >
          {{ t('home.hero.subtitle') }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-col gap-4 sm:flex-row">
          <!-- Primary Button -->
          <NuxtLink
            :to="localePath('/contact')"
            class="group flex w-full items-center justify-center gap-3
                   rounded-xl bg-secondary-container
                   px-8 py-4 font-ibm-thai text-xs font-bold
                   uppercase tracking-[0.1em] text-white
                   shadow-xl shadow-secondary-container/20
                   transition-all duration-300
                   hover:bg-white hover:text-primary

                   dark:bg-orange-500
                   dark:shadow-orange-500/15
                   dark:hover:bg-white
                   dark:hover:text-[#07101e]

                   sm:w-auto md:py-5"
          >
            {{ t('home.hero.btn_primary') }}

            <span
              class="material-symbols-outlined text-sm
                     transition-transform duration-300
                     group-hover:translate-x-1"
            >
              arrow_forward
            </span>
          </NuxtLink>

          <!-- Secondary Button -->
          <NuxtLink
            :to="localePath('/about')"
            class="flex w-full items-center justify-center
                   rounded-xl border border-white/20
                   px-8 py-4 font-ibm-thai text-xs
                   font-bold uppercase tracking-[0.1em]
                   text-white backdrop-blur-sm
                   transition-all duration-300
                   hover:bg-white/5

                   dark:border-white/[0.12]
                   dark:bg-white/[0.025]
                   dark:hover:border-white/25
                   dark:hover:bg-white/[0.07]

                   sm:w-auto md:py-5"
          >
            {{ t('home.hero.btn_secondary') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Statistics Card -->
      <div
        class="scroll-reveal col-span-12 hidden
               lg:col-span-5 lg:block"
      >
        <div
          class="relative overflow-hidden rounded-xl
                 border border-white/10 bg-white/5 p-10
                 backdrop-blur-md
                 transition-all duration-500

                 dark:border-white/[0.08]
                 dark:bg-[#0b1424]/70
                 dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >
          <!-- Dark Mode Gradient -->
          <div
            class="pointer-events-none absolute inset-0
                   hidden bg-gradient-to-br
                   from-blue-500/[0.05]
                   via-transparent
                   to-orange-500/[0.025]
                   dark:block"
            aria-hidden="true"
          ></div>

          <!-- Top Highlight -->
          <div
            class="pointer-events-none absolute inset-x-10 top-0
                   hidden h-px
                   bg-gradient-to-r from-transparent
                   via-blue-400/30 to-transparent
                   dark:block"
            aria-hidden="true"
          ></div>

          <div class="scan-line"></div>

          <div class="relative z-10 space-y-8">
            <!-- Main Statistic -->
            <div>
              <div
                class="mb-2 text-[9px] font-bold uppercase
                       tracking-[0.2em] text-white/40
                       th:tracking-widest
                       dark:text-slate-400"
              >
                {{ t('home.hero.stat_label_1') }}
              </div>

              <div class="font-mono text-4xl text-white">
                100M

                <span
                  class="text-lg text-secondary-container
                         dark:text-orange-400"
                >
                  +
                </span>
              </div>
            </div>

            <!-- Secondary Statistics -->
            <div class="grid grid-cols-2 gap-4">
              <div
                class="rounded-lg border border-white/5
                       bg-white/5 p-4
                       transition-colors duration-300

                       dark:border-white/[0.07]
                       dark:bg-white/[0.035]
                       dark:hover:border-orange-400/20
                       dark:hover:bg-white/[0.06]"
              >
                <div
                  class="mb-2 text-[9px] font-bold uppercase
                         tracking-[0.1em] text-white/50
                         dark:text-slate-400"
                >
                  {{ t('home.hero.stat_label_2') }}
                </div>

                <div class="text-2xl text-white">
                  AAA
                </div>
              </div>

              <div
                class="rounded-lg border border-white/5
                       bg-white/5 p-4
                       transition-colors duration-300

                       dark:border-white/[0.07]
                       dark:bg-white/[0.035]
                       dark:hover:border-orange-400/20
                       dark:hover:bg-white/[0.06]"
              >
                <div
                  class="mb-2 text-[9px] font-bold uppercase
                         tracking-[0.1em] text-white/50
                         dark:text-slate-400"
                >
                  {{ t('home.hero.stat_label_3') }}
                </div>

                <div class="text-2xl text-white">
                  2030
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Accent -->
          <div
            class="pointer-events-none absolute bottom-0
                   left-10 right-10 h-px
                   bg-gradient-to-r from-transparent
                   via-secondary-container/35 to-transparent
                   dark:via-orange-400/30"
            aria-hidden="true"
          ></div>
        </div>
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
.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 2px;
  pointer-events: none;
  opacity: 0.3;
  background: linear-gradient(
    to right,
    transparent,
    #ff8928,
    transparent
  );
  animation: scan 4s linear infinite;
}

@keyframes scan {
  0% {
    top: 0;
  }

  100% {
    top: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scan-line {
    animation: none;
  }
}
</style>