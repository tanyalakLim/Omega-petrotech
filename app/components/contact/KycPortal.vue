<template>
  <aside
    class="scroll-reveal kyc-panel group relative overflow-hidden
           rounded-[2rem] border border-slate-800 bg-[#0a1424]
           text-white shadow-[0_28px_85px_-38px_rgba(2,6,23,0.95)]
           dark:border-white/[0.08] dark:bg-[#060c16]"
  >
    <!-- Background effects -->
    <div
      class="pointer-events-none absolute -right-24 -top-28 h-72 w-72
             rounded-full bg-blue-500/[0.14] blur-[100px]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72
             rounded-full bg-orange-500/[0.10] blur-[105px]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute inset-0 opacity-[0.10]
             bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)]
             [background-size:36px_36px]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-12 -right-10
             text-white/[0.025]"
      aria-hidden="true"
    >
      <span class="material-symbols-outlined text-[190px]">
        verified_user
      </span>
    </div>

    <!-- Header -->
    <header
      class="relative z-10 border-b border-white/[0.08]
             px-7 py-7 sm:px-8"
    >
      <div class="mb-6 flex items-start justify-between gap-4">
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center
                 rounded-[1.1rem] border border-blue-400/15
                 bg-blue-400/[0.09] text-blue-300
                 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <span class="material-symbols-outlined text-[28px]">
            verified_user
          </span>
        </div>

        <span
          class="inline-flex items-center gap-2 rounded-full border
                 border-emerald-400/15 bg-emerald-400/[0.07]
                 px-3 py-1.5 text-[9px] font-black uppercase
                 tracking-[0.12em] text-emerald-300"
        >
          <span class="relative flex h-1.5 w-1.5">
            <span
              class="absolute inline-flex h-full w-full animate-ping
                     rounded-full bg-emerald-400 opacity-50"
            ></span>
            <span
              class="relative inline-flex h-1.5 w-1.5 rounded-full
                     bg-emerald-400"
            ></span>
          </span>
          {{ t('contact.kyc.eyebrow') }}
        </span>
      </div>

      <h2 class="text-2xl font-black leading-tight text-white md:text-[1.7rem]">
        {{ t('contact.kyc.title') }}
      </h2>

      <p class="mt-3 text-sm font-light leading-7 text-slate-300/80">
        {{ t('contact.kyc.desc') }}
      </p>
    </header>

    <!-- Steps -->
    <div class="relative z-10 px-7 py-7 sm:px-8">
      <div class="relative space-y-3">

        <div
          v-for="step in steps"
          :key="step.id"
          class="kyc-step group/step"
        >
          <span class="kyc-step-number">
            {{ step.number }}
          </span>

          <div class="min-w-0 flex-1">
            <p class="kyc-step-title">
              {{ t(`contact.kyc.steps.${step.id}`) }}
            </p>
          </div>

          <span
            class="material-symbols-outlined shrink-0 text-[17px]
                   text-emerald-400 transition-transform duration-300
                   group-hover/step:scale-110"
          >
            check_circle
          </span>
        </div>
      </div>

      <!-- Features -->
      <div
        class="my-7 grid grid-cols-3 divide-x divide-white/[0.08]
               rounded-2xl border border-white/[0.08]
               bg-white/[0.035] py-4"
      >
        <div
          v-for="feature in features"
          :key="feature.id"
          class="px-2 text-center"
        >
          <span
            class="material-symbols-outlined block text-[19px]"
            :class="feature.iconClass"
          >
            {{ feature.icon }}
          </span>

          <span
            class="mt-1.5 block text-[9px] font-semibold leading-4
                   text-slate-400"
          >
            {{ t(`contact.kyc.features.${feature.id}`) }}
          </span>
        </div>
      </div>

      <!-- CTA -->
      <a
        href="#"
        class="group/button inline-flex w-full items-center justify-center
               gap-2 rounded-xl bg-white px-6 py-3.5
               text-sm font-bold text-slate-900
               transition-all duration-300 hover:-translate-y-0.5
               hover:bg-orange-500 hover:text-white
               dark:bg-orange-500 dark:text-white
               dark:hover:bg-white dark:hover:text-[#07101e]"
      >
        <span class="material-symbols-outlined text-[20px]">
          folder_zip
        </span>
        {{ t('contact.kyc.button') }}
        <span
          class="material-symbols-outlined text-[16px]
                 transition-transform duration-300
                 group-hover/button:translate-x-1"
        >
          arrow_forward
        </span>
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = [
  { id: 'profile', number: '01' },
  { id: 'documents', number: '02' },
  { id: 'review', number: '03' }
] as const

const features = [
  {
    id: 'secureUpload',
    icon: 'cloud_upload',
    iconClass: 'text-blue-300'
  },
  {
    id: 'encrypted',
    icon: 'encrypted',
    iconClass: 'text-orange-300'
  },
  {
    id: 'reviewed',
    icon: 'fact_check',
    iconClass: 'text-emerald-300'
  }
] as const
</script>

<style scoped>
.kyc-step {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.035);
  padding: 0.85rem;
  transition:
    transform 250ms ease,
    border-color 250ms ease,
    background-color 250ms ease;
}

.kyc-step:hover {
  transform: translateX(3px);
  border-color: rgba(251, 146, 60, 0.18);
  background: rgba(255, 255, 255, 0.055);
}

.kyc-step-number {
  position: relative;
  z-index: 1;
  display: flex;
  width: 2.1rem;
  height: 2.1rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(251, 146, 60, 0.14);
  border-radius: 0.7rem;
  background: rgba(251, 146, 60, 0.1);
  color: rgb(253 186 116);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    monospace;
  font-size: 0.64rem;
  font-weight: 850;
}

.kyc-step-title {
  color: rgb(241 245 249);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.55;
}

@media (prefers-reduced-motion: reduce) {
  .kyc-step,
  .kyc-step * {
    transition-duration: 0.01ms !important;
  }
}
</style>
