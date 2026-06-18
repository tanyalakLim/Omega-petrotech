<template>
  <section
    v-bind="$attrs"
    class="scroll-reveal office-network-card group relative isolate flex h-full flex-col overflow-hidden
           rounded-[2rem] border border-slate-200/80 bg-white
           shadow-[0_24px_75px_-42px_rgba(15,23,42,0.34)]
           dark:border-white/[0.08] dark:bg-[#0b1220]
           dark:shadow-[0_30px_90px_-44px_rgba(0,0,0,0.82)]"
  >
    <!-- Ambient background -->
    <div
      class="pointer-events-none absolute -right-24 -top-28 -z-10
             h-72 w-72 rounded-full bg-blue-100/70 blur-[100px]
             dark:bg-blue-500/[0.06]"
      aria-hidden="true"
    ></div>

    <div
      class="pointer-events-none absolute -bottom-28 -left-24 -z-10
             h-72 w-72 rounded-full bg-orange-100/70 blur-[100px]
             dark:bg-orange-500/[0.05]"
      aria-hidden="true"
    ></div>

    

    <!-- Office image -->
    <div class="relative overflow-hidden bg-slate-100 dark:bg-[#07101c]">
      <NuxtImg
        src="/images/jb-one-uaq-office.png"
        :alt="t('contact.offices.imageAlt')"
        format="webp"
        class="aspect-[16/9] w-full object-cover
               transition-transform duration-700
               group-hover:scale-[1.02]"
      />

      <div
        class="pointer-events-none absolute inset-0
               bg-gradient-to-t from-slate-950/60
               via-slate-950/5 to-transparent"
        aria-hidden="true"
      ></div>

      <div class="absolute bottom-5 left-5 right-5">
        <span
          class="mb-2 inline-flex items-center rounded-full
                 border border-white/20 bg-slate-950/35
                 px-3 py-1 text-[9px] font-black uppercase
                 tracking-[0.16em] text-white backdrop-blur-md"
        >
          {{ t('contact.offices.networkLabel') }}
        </span>

        <h3 class="text-2xl font-black tracking-tight text-white">
          {{ t('contact.offices.location') }}
        </h3>
      </div>
    </div>

    <!-- Office information -->
    <div class="relative z-10 flex flex-1 flex-col space-y-5 p-6 sm:p-7">
      <p
        class="text-sm font-light leading-7 text-slate-600
               dark:text-slate-300"
      >
        {{ t('contact.offices.intro') }}
      </p>

      <dl class="space-y-3.5">
        <!-- Operating name -->
        <div class="office-detail-row">
          <span class="office-detail-icon">
            <span class="material-symbols-outlined text-[18px]">
              corporate_fare
            </span>
          </span>

          <div class="min-w-0">
            <dt class="office-detail-label">
              {{ t('contact.offices.operatingNameLabel') }}
            </dt>
            <dd class="office-detail-value">
              {{ t('contact.offices.operatingName') }}
            </dd>
          </div>
        </div>

        <!-- Address -->
        <div class="office-detail-row">
          <span class="office-detail-icon">
            <span class="material-symbols-outlined text-[18px]">
              location_on
            </span>
          </span>

          <div class="min-w-0">
            <dt class="office-detail-label">
              {{ t('contact.offices.addressLabel') }}
            </dt>
            <dd class="office-detail-value leading-6">
              {{ t('contact.offices.address.line1') }}<br>
              {{ t('contact.offices.address.line2') }}<br>
              {{ t('contact.offices.address.line3') }}
            </dd>
          </div>
        </div>

      </dl>

      <a
        :href="t('contact.offices.websiteHref')"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-auto inline-flex w-full items-center justify-center gap-2
               rounded-xl bg-primary px-5 py-3.5 text-sm font-bold
               text-white shadow-lg shadow-primary/10
               hover:bg-secondary-container
               dark:bg-orange-500 dark:hover:bg-white
               dark:hover:text-[#07101e]"
      >
        <span class="material-symbols-outlined text-[19px]">
          travel_explore
        </span>

        {{ t('contact.offices.visitWebsite') }}

        <span
          class="material-symbols-outlined text-[16px]
                 transition-transform duration-300
                 group-hover:translate-x-1"
        >
          arrow_forward
        </span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineOptions({
  inheritAttrs: false
})

const { t } = useI18n()
</script>

<style scoped>
.office-detail-row {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  border: 1px solid rgb(226 232 240);
  border-radius: 1rem;
  background: rgba(248, 250, 252, 0.78);
  padding: 0.9rem;
  transition:
    border-color 250ms ease,
    background-color 250ms ease,
    transform 250ms ease;
}

.office-detail-row:hover {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.25);
  background: white;
}

.office-detail-icon {
  display: flex;
  width: 2.45rem;
  height: 2.45rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(219 234 254);
  border-radius: 0.8rem;
  background: rgb(239 246 255);
  color: rgb(37 99 235);
}

.office-detail-label {
  margin-bottom: 0.2rem;
  color: rgb(148 163 184);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.office-detail-value {
  color: rgb(51 65 85);
  font-size: 0.78rem;
  font-weight: 700;
}

.dark .office-detail-row {
  border-color: rgba(71, 85, 105, 0.68);
  background: rgba(15, 23, 42, 0.68);
}

.dark .office-detail-row:hover {
  border-color: rgba(96, 165, 250, 0.25);
  background: rgba(30, 41, 59, 0.78);
}

.dark .office-detail-icon {
  border-color: rgba(96, 165, 250, 0.18);
  background: rgba(96, 165, 250, 0.08);
  color: rgb(147 197 253);
}

.dark .office-detail-value {
  color: rgb(226 232 240);
}

@media (prefers-reduced-motion: reduce) {
  .office-detail-row,
  .office-detail-row * {
    transition-duration: 0.01ms !important;
  }
}
</style>
