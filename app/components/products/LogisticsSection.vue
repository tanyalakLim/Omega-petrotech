<template>
  <div class="scroll-reveal">
    <!-- Header -->
     <UiContentHeader
        icon="local_shipping"
        :title="$t('products.logistics.title')"
        :desc="$t('products.logistics.desc')"
        />
    <div class="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-5">
      <!-- Partners Card -->
      <div
        class="group relative overflow-hidden rounded-[2rem]
               border border-slate-800 bg-slate-900 p-8
               shadow-[0_8px_30px_rgb(0,0,0,0.12)]
               transition-all duration-500
               hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]
               dark:border-white/[0.08]
               dark:bg-[#0b1220]
               dark:shadow-[0_20px_55px_rgba(0,0,0,0.35)]
               dark:hover:border-blue-400/20
               dark:hover:bg-[#0e1829]
               md:p-10 lg:col-span-2"
      >
        <!-- Ambient Glow -->
        <div
          class="absolute -right-24 -top-24 z-0 h-64 w-64 rounded-full
                 bg-blue-500/20 blur-3xl
                 transition-transform duration-700
                 group-hover:scale-125
                 dark:bg-blue-500/[0.12]"
          aria-hidden="true"
        ></div>

        <div
          class="absolute bottom-0 left-0 z-0 h-1/2 w-full
                 bg-gradient-to-t from-slate-950/50 to-transparent
                 dark:from-black/45"
          aria-hidden="true"
        ></div>

        <!-- Dark Top Highlight -->
        <div
          class="pointer-events-none absolute inset-x-10 top-0 hidden h-px
                 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent
                 dark:block"
          aria-hidden="true"
        ></div>

        <div class="relative z-10 flex h-full flex-col">
          <!-- Icon -->
          <div
            class="mb-8 flex h-14 w-14 items-center justify-center
                   rounded-2xl border border-white/10 bg-white/10
                   text-blue-300 backdrop-blur-md
                   transition-all duration-300
                   group-hover:-rotate-3
                   dark:border-blue-400/15
                   dark:bg-blue-400/[0.08]
                   dark:text-blue-300"
          >
            <span class="material-symbols-outlined text-3xl">
              handshake
            </span>
          </div>

          <span
            class="mb-3 block text-[10px] font-bold uppercase
                   tracking-[0.2em] text-slate-400
                   th:tracking-widest dark:text-slate-500"
          >
            {{ $t('products.logistics.partners.label') }}
          </span>

          <h3
            class="mb-4 text-[28px] font-black tracking-tight
                   text-white dark:text-slate-50"
          >
            {{ $t('products.logistics.partners.title') }}
          </h3>

          <p
            class="mb-10 text-[15px] font-light leading-relaxed
                   text-slate-300 dark:text-slate-300"
          >
            {{ $t('products.logistics.partners.desc') }}
          </p>

          <!-- Note -->
          <div
            class="mt-auto rounded-2xl border border-white/10
                   bg-white/5 p-5 backdrop-blur-sm
                   transition-colors duration-300
                   group-hover:bg-white/10
                   dark:border-slate-700/60
                   dark:bg-slate-800/40
                   dark:group-hover:bg-slate-800/65"
          >
            <div class="flex items-start gap-3">
              <span
                class="material-symbols-outlined mt-0.5 text-lg
                       text-blue-400 dark:text-blue-300"
              >
                info
              </span>

              <p
                class="text-xs leading-relaxed text-slate-200
                       dark:text-slate-300"
              >
                {{ $t('products.logistics.partners.note') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Logistics Models -->
      <div
        class="scroll-reveal delay-300 rounded-3xl border
               border-slate-200 bg-white p-8 shadow-sm
               transition-all duration-500
               dark:border-slate-700/60
               dark:bg-[#0b1220]
               dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)]
               lg:col-span-3"
      >
        <span
          class="mb-3 block text-[10px] font-bold uppercase
                 tracking-[0.2em] text-secondary-container
                 th:tracking-widest dark:text-orange-400"
        >
          {{ $t('products.logistics.models.label') }}
        </span>

        <h3
          class="mb-6 text-[24px] font-bold text-primary
                 transition-colors duration-300 dark:text-white"
        >
          {{ $t('products.logistics.models.title') }}
        </h3>

        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            v-for="model in logisticsModels"
            :key="model.key"
            class="group/model relative overflow-hidden rounded-2xl
                   border border-slate-100 bg-slate-50 p-6
                   transition-all duration-300
                   hover:-translate-y-1 hover:border-secondary-container/30
                   hover:bg-white
                   dark:border-slate-700/60
                   dark:bg-slate-800/40
                   dark:hover:border-orange-400/25
                   dark:hover:bg-slate-800/70"
          >
            <!-- Dark Hover Glow -->
            <div
              class="pointer-events-none absolute -right-14 -top-14 hidden
                     h-36 w-36 rounded-full bg-orange-400/[0.04]
                     blur-[55px] transition-transform duration-500
                     group-hover/model:scale-125 dark:block"
              aria-hidden="true"
            ></div>

            <div
              class="relative z-10 mb-4 text-secondary-container
                     dark:text-orange-400"
            >
              <span class="material-symbols-outlined text-3xl">
                {{ model.icon }}
              </span>
            </div>

            <div class="relative z-10 mb-4 flex items-center justify-between">
              <div
                class="rounded-md bg-secondary-container/10 px-3 py-1
                       font-ibm-thai text-[10px] font-black uppercase
                       tracking-widest text-secondary-container
                       dark:border dark:border-orange-400/15
                       dark:bg-orange-400/[0.08]
                       dark:text-orange-400"
              >
                {{ $t(`products.logistics.models.${model.key}.time`) }}
              </div>
            </div>

            <h4
              class="relative z-10 mb-2 font-bold text-slate-900
                     transition-colors duration-300 dark:text-slate-50"
            >
              {{ $t(`products.logistics.models.${model.key}.name`) }}
            </h4>

            <p
              class="relative z-10 text-xs leading-relaxed text-slate-600
                     transition-colors duration-300 dark:text-slate-400"
            >
              {{ $t(`products.logistics.models.${model.key}.desc`) }}
            </p>
          </div>
        </div>

        <p
          class="mt-6 text-center text-xs italic text-slate-500
                 transition-colors duration-300 dark:text-slate-500"
        >
          {{ $t('products.logistics.models.footer') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const logisticsModels = [
  {
    key: 'offshore',
    icon: 'sailing'
  },
  {
    key: 'transit',
    icon: 'local_shipping'
  }
]
</script>
