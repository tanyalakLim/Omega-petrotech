<template>
  <section class="scroll-reveal">
    <div
      class="office-network-panel relative overflow-hidden rounded-[2rem]
             border border-slate-200/80 bg-white
             shadow-[0_24px_75px_-42px_rgba(15,23,42,0.34)]
             dark:border-white/[0.08] dark:bg-[#0b1220]
             dark:shadow-[0_30px_90px_-44px_rgba(0,0,0,0.82)]"
    >
      <!-- Ambient background -->
      <div
        class="pointer-events-none absolute -right-28 -top-36 h-80 w-80
               rounded-full bg-blue-100/70 blur-[105px]
               dark:bg-blue-500/[0.06]"
        aria-hidden="true"
      ></div>

      <div
        class="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72
               rounded-full bg-orange-100/70 blur-[100px]
               dark:bg-orange-500/[0.05]"
        aria-hidden="true"
      ></div>

      <!-- Card header -->
      <header
        class="relative z-10 flex flex-col gap-5 border-b
               border-slate-200/80 px-6 py-7
               dark:border-white/[0.08]
               sm:flex-row sm:items-start sm:justify-between
               md:px-8 md:py-8"
      >
        <div class="flex min-w-0 items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center
                   rounded-2xl border border-orange-200/80 bg-orange-50
                   text-secondary-container shadow-sm
                   dark:border-orange-400/20
                   dark:bg-orange-400/[0.08]
                   dark:text-orange-300"
          >
            <span class="material-symbols-outlined text-[24px]">
              public
            </span>
          </div>

          <div class="min-w-0">
            <h2
              class="text-2xl font-black tracking-tight text-slate-950
                     dark:text-white md:text-3xl"
            >
              {{ t('contact.offices.title') }}
            </h2>

            <p
              class="mt-2 max-w-3xl text-sm font-light leading-7
                     text-slate-600 dark:text-slate-400"
            >
              {{ t('contact.offices.desc') }}
            </p>
          </div>
        </div>

        <div
          class="inline-flex shrink-0 items-center gap-2 self-start
                 rounded-full border border-slate-200 bg-slate-50
                 px-3 py-1.5 text-[10px] font-black uppercase
                 tracking-[0.16em] text-slate-500
                 dark:border-slate-700/70 dark:bg-slate-900/60
                 dark:text-slate-400"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping
                     rounded-full bg-emerald-500 opacity-40"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full
                     bg-emerald-500"
            ></span>
          </span>
          {{ String(offices.length).padStart(2, '0') }}
        </div>
      </header>

      <!-- Office cards -->
      <div class="relative z-10 grid gap-5 p-6 md:grid-cols-2 md:p-8">
        <article
          v-for="office in offices"
          :key="office.id"
          class="office-card group"
          :class="office.tone === 'orange'
            ? 'office-card-orange'
            : 'office-card-blue'"
        >
          <div class="office-card-accent"></div>

          <div class="mb-7 flex items-start justify-between gap-4">
            <div
              class="office-icon"
              :class="office.tone === 'orange'
                ? 'office-icon-orange'
                : 'office-icon-blue'"
            >
              <span class="material-symbols-outlined text-[23px]">
                {{ office.icon }}
              </span>
            </div>

            <span
              class="office-badge"
              :class="office.tone === 'orange'
                ? 'office-badge-orange'
                : 'office-badge-blue'"
            >
              {{ t(`contact.offices.items.${office.id}.badge`) }}
            </span>
          </div>

          <div class="relative z-10">
            <h3 class="office-title">
              {{ t(`contact.offices.items.${office.id}.title`) }}
            </h3>

            <p
              v-if="te(`contact.offices.items.${office.id}.subtitle`)"
              class="office-subtitle"
            >
              {{ t(`contact.offices.items.${office.id}.subtitle`) }}
            </p>

            <p class="office-description">
              {{ t(`contact.offices.items.${office.id}.description`) }}
            </p>
          </div>

        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, te } = useI18n()

const offices = [
  {
    id: 'bangkok',
    icon: 'apartment',
    tone: 'orange'
  },
  {
    id: 'dubai',
    icon: 'globe_asia',
    tone: 'blue'
  }
] as const
</script>

<style scoped>
.office-card {
  position: relative;
  overflow: hidden;
  min-height: 300px;
  border: 1px solid rgb(226 232 240);
  border-radius: 1.45rem;
  background: rgba(248, 250, 252, 0.82);
  padding: 1.5rem;
  box-shadow: 0 8px 24px -18px rgba(15, 23, 42, 0.24);
  transition:
    transform 350ms ease,
    border-color 350ms ease,
    box-shadow 350ms ease,
    background-color 350ms ease;
}

.office-card::before {
  position: absolute;
  inset: 0;
  content: '';
  pointer-events: none;
  opacity: 0;
  transition: opacity 350ms ease;
}

.office-card-orange::before {
  background: linear-gradient(
    145deg,
    rgba(249, 115, 22, 0.07),
    transparent 48%
  );
}

.office-card-blue::before {
  background: linear-gradient(
    145deg,
    rgba(59, 130, 246, 0.07),
    transparent 48%
  );
}

.office-card:hover {
  transform: translateY(-6px);
  background: white;
  box-shadow: 0 24px 50px -28px rgba(15, 23, 42, 0.38);
}

.office-card-orange:hover {
  border-color: rgba(249, 115, 22, 0.32);
}

.office-card-blue:hover {
  border-color: rgba(59, 130, 246, 0.3);
}

.office-card:hover::before {
  opacity: 1;
}

.office-card-accent {
  position: absolute;
  top: 0;
  right: 1.5rem;
  left: 1.5rem;
  height: 2px;
  border-radius: 999px;
  opacity: 0;
  transition: opacity 350ms ease;
}

.office-card-orange .office-card-accent {
  background: linear-gradient(
    to right,
    transparent,
    rgba(249, 115, 22, 0.88),
    transparent
  );
}

.office-card-blue .office-card-accent {
  background: linear-gradient(
    to right,
    transparent,
    rgba(59, 130, 246, 0.82),
    transparent
  );
}

.office-card:hover .office-card-accent {
  opacity: 1;
}

.office-icon {
  display: flex;
  width: 3.25rem;
  height: 3.25rem;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid;
}

.office-icon-orange {
  border-color: rgb(254 215 170);
  background: rgb(255 247 237);
  color: rgb(234 88 12);
}

.office-icon-blue {
  border-color: rgb(191 219 254);
  background: rgb(239 246 255);
  color: rgb(37 99 235);
}

.office-title {
  color: rgb(15 23 42);
  font-size: 1.2rem;
  font-weight: 850;
  letter-spacing: -0.02em;
}

.office-subtitle {
  margin-top: 0.35rem;
  color: rgb(100 116 139);
  font-size: 0.8rem;
  font-weight: 650;
}

.office-description {
  margin-top: 1rem;
  color: rgb(71 85 105);
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.85;
}

.office-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid;
  padding: 0.34rem 0.68rem;
  font-size: 0.6rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.office-badge-orange {
  border-color: rgb(254 215 170);
  background: rgb(255 247 237);
  color: rgb(234 88 12);
}

.office-badge-blue {
  border-color: rgb(191 219 254);
  background: rgb(239 246 255);
  color: rgb(37 99 235);
}

.dark .office-card {
  border-color: rgba(71, 85, 105, 0.65);
  background: rgba(15, 23, 42, 0.72);
  box-shadow:
    0 16px 38px -22px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.dark .office-card:hover {
  background: rgba(30, 41, 59, 0.82);
  box-shadow: 0 26px 58px -28px rgba(0, 0, 0, 0.72);
}

.dark .office-card-orange:hover {
  border-color: rgba(251, 146, 60, 0.28);
}

.dark .office-card-blue:hover {
  border-color: rgba(96, 165, 250, 0.28);
}

.dark .office-icon-orange {
  border-color: rgba(251, 146, 60, 0.18);
  background: rgba(251, 146, 60, 0.08);
  color: rgb(253 186 116);
}

.dark .office-icon-blue {
  border-color: rgba(96, 165, 250, 0.18);
  background: rgba(96, 165, 250, 0.08);
  color: rgb(147 197 253);
}

.dark .office-title {
  color: rgb(248 250 252);
}

.dark .office-subtitle,
.dark .office-description {
  color: rgb(148 163 184);
}

.dark .office-badge-orange {
  border-color: rgba(251, 146, 60, 0.16);
  background: rgba(251, 146, 60, 0.08);
  color: rgb(253 186 116);
}

.dark .office-badge-blue {
  border-color: rgba(96, 165, 250, 0.16);
  background: rgba(96, 165, 250, 0.08);
  color: rgb(147 197 253);
}

@media (prefers-reduced-motion: reduce) {
  .office-card,
  .office-card * {
    transition-duration: 0.01ms !important;
  }
}
</style>
