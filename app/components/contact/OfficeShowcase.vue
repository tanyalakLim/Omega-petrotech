<template>
  <section
  v-bind="$attrs"
  class="location-showcase scroll-reveal overflow-hidden
         rounded-[2rem] border border-slate-200/80 bg-white
         shadow-[0_25px_80px_-35px_rgba(15,23,42,0.24)]
         dark:border-white/[0.08] dark:bg-[#0b1220]"
>
    <div class="grid items-stretch lg:grid-cols-[1.08fr_0.92fr]">
      <!-- Empire Tower image -->
      <div
        class="relative min-h-[380px] overflow-hidden border-b
               border-slate-200/80 bg-slate-100
               dark:border-white/[0.08] dark:bg-[#08111d]
               lg:min-h-[620px] lg:border-b-0 lg:border-r"
      >
        <NuxtImg
          src="/images/empire-tower.png"
          :alt="t('contact.showcase.imageAlt')"
          format="webp"
          preload
          class="h-full w-full object-cover"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t
                 from-slate-950/60 via-slate-900/10 to-transparent"
        ></div>

        <div class="absolute bottom-6 left-6 right-6">
          <div
            class="rounded-2xl border border-white/20 bg-white/10
                   p-4 text-white backdrop-blur-md
                   dark:bg-[#0b1424]/70"
          >
            <div
              class="mb-2 inline-flex items-center gap-2 rounded-full
                     border border-white/15 bg-white/10 px-3 py-1
                     text-[10px] font-bold uppercase tracking-[0.18em]"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping
                         rounded-full bg-secondary-container opacity-60"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 rounded-full
                         bg-secondary-container"
                ></span>
              </span>

              {{ t('contact.showcase.badge') }}
            </div>

            <h2 class="text-xl font-black md:text-2xl">
              {{ t('contact.showcase.building') }}
            </h2>

            <p class="mt-1 text-sm text-white/80">
              {{ t('contact.showcase.company') }} ·
              {{ t('contact.showcase.city') }}
            </p>
          </div>
        </div>

        <!-- Company map preview -->
        <button
          type="button"
          class="group/map absolute right-5 top-5 hidden w-[220px]
                 overflow-hidden rounded-2xl border border-white/70
                 bg-white/90 text-left
                 shadow-[0_15px_35px_-14px_rgba(15,23,42,0.28)]
                 backdrop-blur-xl transition-transform duration-300
                 hover:-translate-y-1 focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-secondary-container
                 dark:border-white/10 dark:bg-[#0b1424]/90 md:block"
          :aria-label="t('contact.showcase.openMap')"
          @click="openMap"
        >
          <div
            class="flex items-center justify-between gap-3 border-b
                   border-slate-200/80 p-3 dark:border-white/10"
          >
            <div class="flex min-w-0 items-center gap-2">
              <span
                class="material-symbols-outlined shrink-0 text-[18px]
                       text-secondary-container dark:text-orange-400"
              >
                map
              </span>

              <p
                class="truncate text-xs font-bold text-slate-900
                       dark:text-white"
              >
                {{ t('contact.showcase.mapTitle') }}
              </p>
            </div>

            <span
              class="material-symbols-outlined shrink-0 text-[17px]
                     text-slate-400 transition-all duration-300
                     group-hover/map:scale-110
                     group-hover/map:text-secondary-container
                     dark:text-slate-500
                     dark:group-hover/map:text-orange-400"
            >
              open_in_full
            </span>
          </div>

          <div class="relative overflow-hidden bg-white p-2">
            <NuxtImg
              src="/images/company-location-map.png"
              :alt="t('contact.showcase.mapAlt')"
              format="webp"
              class="h-[150px] w-full rounded-xl object-contain
                     transition-transform duration-500
                     group-hover/map:scale-[1.03]"
            />

            <div
              class="pointer-events-none absolute inset-2 flex items-center
                     justify-center rounded-xl bg-slate-950/0 opacity-0
                     transition-all duration-300
                     group-hover/map:bg-slate-950/30
                     group-hover/map:opacity-100"
            >
              <span
                class="inline-flex items-center gap-2 rounded-full
                       border border-white/20 bg-slate-950/60 px-3 py-2
                       text-[10px] font-bold text-white backdrop-blur-md"
              >
                <span class="material-symbols-outlined text-[16px]">
                  zoom_in
                </span>
                {{ t('contact.showcase.viewLarge') }}
              </span>
            </div>
          </div>
        </button>
      </div>

      <!-- Office information -->
      <div class="relative flex flex-col justify-between p-7 sm:p-9 lg:p-12">
        <div
          class="pointer-events-none absolute -left-16 -top-16
                 h-56 w-56 rounded-full bg-orange-100/70 blur-[80px]
                 dark:bg-orange-500/[0.06]"
          aria-hidden="true"
        ></div>

        <div
          class="pointer-events-none absolute -bottom-20 -right-14
                 h-56 w-56 rounded-full bg-blue-100/70 blur-[90px]
                 dark:bg-blue-500/[0.06]"
          aria-hidden="true"
        ></div>

        <div class="relative z-10">
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full
                   border border-orange-200/70 bg-orange-50
                   px-3.5 py-1.5 text-[10px] font-bold uppercase
                   tracking-[0.16em] text-secondary-container
                   dark:border-orange-400/20
                   dark:bg-orange-400/[0.08]
                   dark:text-orange-300"
          >
            <span class="material-symbols-outlined text-[15px]">
              corporate_fare
            </span>
            {{ t('contact.showcase.badge') }}
          </div>

          <h3
            class="text-3xl font-black tracking-tight text-slate-950
                   dark:text-white md:text-[2.2rem]"
          >
            {{ t('contact.showcase.company') }}
          </h3>

          <p
            class="mt-2 text-base font-medium text-secondary-container
                   dark:text-orange-400"
          >
            {{ t('contact.showcase.building') }} —
            {{ t('contact.showcase.city') }}
          </p>

          <div class="mt-8 space-y-5">
            <div class="info-row">
              <span class="info-icon">
                <span class="material-symbols-outlined text-[18px]">
                  location_on
                </span>
              </span>

              <div>
                <p class="info-label">
                  {{ t('contact.showcase.addressLabel') }}
                </p>
                <address class="info-value not-italic">
                  {{ t('contact.showcase.address.line1') }}<br>
                  {{ t('contact.showcase.address.line2') }}<br>
                  {{ t('contact.showcase.address.line3') }}
                </address>
              </div>
            </div>

            <div class="info-row">
              <span class="info-icon">
                <span class="material-symbols-outlined text-[18px]">
                  train
                </span>
              </span>

              <div>
                <p class="info-label">
                  {{ t('contact.showcase.transitLabel') }}
                </p>
                <p class="info-value">
                  {{ t('contact.showcase.transitValue') }}
                </p>
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <a :href="`tel:${t('contact.showcase.phoneHref')}`" class="office-contact-card">
                <span class="office-contact-icon">
                  <span class="material-symbols-outlined text-[18px]">
                    call
                  </span>
                </span>

                <span class="min-w-0">
                  <span class="office-contact-label">
                    {{ t('contact.showcase.phoneLabel') }}
                  </span>
                  <span class="office-contact-value">
                    {{ t('contact.showcase.phoneValue') }}
                  </span>
                </span>
              </a>

              <a :href="`mailto:info@omegapetrotech.com`" class="office-contact-card">
                <span class="office-contact-icon">
                  <span class="material-symbols-outlined text-[18px]">
                    mail
                  </span>
                </span>

                <span class="min-w-0">
                  <span class="office-contact-label">
                    {{ t('contact.showcase.emailLabel') }}
                  </span>
                  <span class="office-contact-value truncate">
                    info@omegapetrotech.com
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="relative z-10 mt-10 grid gap-3 sm:grid-cols-[1fr_auto]">
          <a
            :href="googleMapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center justify-center gap-2
                   rounded-xl bg-primary px-5 py-3.5 text-sm
                   font-bold text-white shadow-lg shadow-primary/10
                   hover:bg-secondary-container
                   dark:bg-orange-500 dark:hover:bg-white
                   dark:hover:text-[#07101e]"
          >
            <span class="material-symbols-outlined text-[18px]">
              near_me
            </span>
            {{ t('contact.showcase.directions') }}
            <span
              class="material-symbols-outlined text-[16px]
                     transition-transform duration-300
                     group-hover:translate-x-1"
            >
              arrow_forward
            </span>
          </a>

          <div
            class="inline-flex items-center justify-center gap-2
                   rounded-xl border border-slate-200 bg-slate-50
                   px-5 py-3.5 text-xs font-semibold text-slate-500
                   dark:border-slate-700/70 dark:bg-slate-900/60
                   dark:text-slate-400"
          >
            <span class="material-symbols-outlined text-[18px]">
              badge
            </span>
            {{ t('contact.showcase.licenseLabel') }}:
            {{ t('contact.showcase.licenseValue') }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <Transition name="map-lightbox">
      <div
        v-if="isMapOpen"
        class="fixed inset-0 z-[200] flex items-center justify-center
               bg-slate-950/90 p-4 backdrop-blur-md sm:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="t('contact.showcase.mapTitle')"
        @click.self="closeMap"
      >
        <div
          class="relative flex max-h-full w-full max-w-6xl flex-col
                 overflow-hidden rounded-2xl border border-white/10
                 bg-[#080f1c]
                 shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
        >
          <div
            class="flex shrink-0 items-center justify-between gap-4
                   border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4"
          >
            <div class="flex min-w-0 items-center gap-3">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center
                       rounded-xl bg-orange-500/10 text-orange-400"
              >
                <span class="material-symbols-outlined text-[21px]">
                  map
                </span>
              </div>

              <div class="min-w-0">
                <h3 class="truncate text-sm font-bold text-white sm:text-base">
                  {{ t('contact.showcase.mapTitle') }}
                </h3>
                <p class="mt-0.5 truncate text-[10px] text-slate-400">
                  {{ t('contact.showcase.mapLocation') }}
                </p>
              </div>
            </div>

            <button
              type="button"
              class="flex h-10 w-10 shrink-0 items-center justify-center
                     rounded-xl border border-white/10 bg-white/[0.05]
                     text-slate-300 transition-colors duration-200
                     hover:bg-white/10 hover:text-white
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-orange-400"
              :aria-label="t('contact.showcase.closeMap')"
              @click="closeMap"
            >
              <span class="material-symbols-outlined text-[22px]">
                close
              </span>
            </button>
          </div>

          <div class="relative min-h-0 flex-1 overflow-auto bg-white p-3 sm:p-6">
            <NuxtImg
              src="/images/company-location-map.png"
              :alt="t('contact.showcase.mapAlt')"
              format="webp"
              class="mx-auto h-auto max-h-[calc(100vh-160px)]
                     w-auto max-w-full object-contain"
            />
          </div>

          <div
            class="flex shrink-0 items-center justify-between gap-4
                   border-t border-white/10 px-4 py-3 text-[10px]
                   text-slate-400 sm:px-6"
          >
            <span>{{ t('contact.showcase.closeHint') }}</span>

            <span class="hidden items-center gap-1 sm:flex">
              <span class="material-symbols-outlined text-[14px]">
                location_on
              </span>
              {{ t('contact.showcase.mapLocation') }}
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  inheritAttrs: false
})

const isMapOpen = ref(false)
let previousBodyOverflow = ''

const openMap = () => {
  isMapOpen.value = true
}

const closeMap = () => {
  isMapOpen.value = false
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMapOpen.value) {
    closeMap()
  }
}

watch(isMapOpen, (isOpen) => {
  if (!import.meta.client) return

  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousBodyOverflow
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)

  if (import.meta.client) {
    document.body.style.overflow = previousBodyOverflow
  }
})

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Empire+Tower+1+South+Sathorn+Road+Bangkok+10120'
</script>

<style scoped>
.info-row {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.info-icon {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(226 232 240);
  border-radius: 0.9rem;
  background: rgb(248 250 252);
  color: rgb(255 137 40);
}

.info-label {
  margin-bottom: 0.3rem;
  color: rgb(148 163 184);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.info-value {
  color: rgb(71 85 105);
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.75;
}

.office-contact-card {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid rgb(226 232 240);
  border-radius: 0.875rem;
  background: rgba(248, 250, 252, 0.9);
  padding: 0.75rem;
  transition:
    border-color 300ms ease,
    background-color 300ms ease,
    transform 300ms ease;
}

.office-contact-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 137, 40, 0.38);
  background: rgb(255 247 237);
}

.office-contact-icon {
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background: white;
  color: rgb(255 137 40);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}

.office-contact-label,
.office-contact-value {
  display: block;
}

.office-contact-label {
  margin-bottom: 0.15rem;
  color: rgb(148 163 184);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.office-contact-value {
  color: rgb(51 65 85);
  font-size: 0.75rem;
  font-weight: 700;
}

.dark .info-icon {
  border-color: rgba(71, 85, 105, 0.7);
  background: rgba(15, 23, 42, 0.75);
  color: rgb(251 146 60);
}

.dark .info-value {
  color: rgb(203 213 225);
}

.dark .office-contact-card {
  border-color: rgba(71, 85, 105, 0.7);
  background: rgba(15, 23, 42, 0.64);
}

.dark .office-contact-card:hover {
  border-color: rgba(251, 146, 60, 0.3);
  background: rgba(30, 41, 59, 0.78);
}

.dark .office-contact-icon {
  background: rgba(30, 41, 59, 0.9);
  color: rgb(251 146 60);
  box-shadow: none;
}

.dark .office-contact-value {
  color: rgb(226 232 240);
}

.map-lightbox-enter-active,
.map-lightbox-leave-active {
  transition: opacity 250ms ease;
}

.map-lightbox-enter-active > div,
.map-lightbox-leave-active > div {
  transition:
    opacity 250ms ease,
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.map-lightbox-enter-from,
.map-lightbox-leave-to {
  opacity: 0;
}

.map-lightbox-enter-from > div {
  opacity: 0;
  transform: translateY(16px) scale(0.97);
}

.map-lightbox-leave-to > div {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {
  .office-contact-card,
  .map-lightbox-enter-active,
  .map-lightbox-leave-active,
  .map-lightbox-enter-active > div,
  .map-lightbox-leave-active > div {
    transition-duration: 0.01ms !important;
  }
}
</style>
