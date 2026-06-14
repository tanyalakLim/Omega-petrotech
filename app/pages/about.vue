<template>
    <div class="about-page-container">
        <main class="technical-grid overflow-x-hidden font-ibm-thai">

            <AboutOverview />

            <AboutVisionMission />

            <AboutGovernancePillars />

            <AboutOrgChart />

            <HomeCtaSection />

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