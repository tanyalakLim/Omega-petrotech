<template>
  <div
    class="compliance-page bg-white transition-colors duration-500 dark:bg-[#070b14]"
  >
    <main
      class="relative min-h-screen overflow-hidden bg-slate-50 py-28
             text-slate-900 transition-colors duration-500
             dark:bg-[#070b14] dark:text-slate-100
             md:pb-28 md:pt-[160px]"
    >
      <UiBackgroundEffects />

      <!-- Page Content -->
      <div
        class="relative z-10 mx-auto max-w-7xl
               px-4 xl:px-margin-desktop"
      >
        <!-- Section Header -->
        <UiSectionHeader
          :tag="t('compliance.tag')"
          :title="[
            t('compliance.title.part1'),
            t('compliance.title.part2')
          ]"
        />

        <!-- Compliance Excellence -->
        <ComplianceExcellenceSection />

        <!-- Section Divider -->
        <div
          class="relative mb-24 mt-24 h-px w-full
                 bg-gradient-to-r from-transparent
                 via-slate-300 to-transparent
                 dark:via-slate-700/80"
          aria-hidden="true"
        >
          <!-- Center Accent -->
          <span
            class="absolute left-1/2 top-1/2
                   h-2 w-2 -translate-x-1/2 -translate-y-1/2
                   rotate-45 border border-slate-300 bg-slate-50
                   dark:border-orange-400/30 dark:bg-[#070b14]"
          ></span>
        </div>

        <!-- ESG -->
        <ComplianceEsgSection />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'

const { t } = useI18n()

// เรียกใช้งาน Scroll Reveal ที่หน้าหลัก
// เพื่อให้ครอบคลุม Component ภายในทั้งหมด
useScrollReveal()
</script>