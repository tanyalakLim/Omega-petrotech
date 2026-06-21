<template>
    <div class="about-page-container">
        <main class="technical-grid overflow-x-hidden font-ibm-thai">

            <AboutOverview />
            <div
                class="relative overflow-hidden bg-white py-[10rem] grid gap-y-[2rem] font-ibm-thai text-slate-900 transition-colors duration-500 dark:bg-[#070b14] dark:text-white">
                <UiBackgroundEffects />

                <AboutVisionMission />
                <!-- Section Divider -->
                <!-- <AboutGovernancePillars /> -->
                <div id="compliance" class="relative z-10 mx-auto max-w-7xl px-6 ">

                    <!-- Compliance Excellence -->
                    <div class="relative my-24 h-px w-full 
                 bg-gradient-to-r
                 from-transparent via-slate-300 to-transparent

                 dark:via-slate-700/80" aria-hidden="true">
                        <!-- Center Accent -->
                        <span class="absolute left-1/2 top-1/2
                   h-2 w-2
                   -translate-x-1/2 -translate-y-1/2
                   rotate-45
                   border border-slate-300 bg-slate-50

                   dark:border-orange-400/30
                   dark:bg-[#070b14]"></span>
                    </div>
                    <ComplianceExcellenceSection />

                    <!-- Section Divider -->
                    <div class="relative mb-24 mt-24 h-px w-full
                 bg-gradient-to-r from-transparent
                 via-slate-300 to-transparent
                 dark:via-slate-700/80" aria-hidden="true">
                        <!-- Center Accent -->
                        <span class="absolute left-1/2 top-1/2
                   h-2 w-2 -translate-x-1/2 -translate-y-1/2
                   rotate-45 border border-slate-300 bg-slate-50
                   dark:border-orange-400/30 dark:bg-[#070b14]"></span>
                    </div>

                    <!-- ESG -->
                    <ComplianceEsgSection />
                </div>

            </div>

        </main>
    </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useScrollReveal()
</script>

<style></style>