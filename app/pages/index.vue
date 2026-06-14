<!-- pages/index.vue -->
<template>
  <div class="home-page-container">
      <main class="technical-grid overflow-x-hidden font-ibm-thai">
        <HomeHeroSection />
        <HomeCoreDnaSection />
        <HomePortfolioSection />
        <HomeRoadmapSection id="roadmap"/>
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

<style>
</style>