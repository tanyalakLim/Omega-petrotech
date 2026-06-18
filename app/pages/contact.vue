<template>
  <div
    class="relative min-h-screen overflow-hidden bg-slate-50 py-28
           font-ibm-thai text-slate-900
           dark:bg-[#070b14] dark:text-slate-100
           md:pb-28 md:pt-[160px]"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <UiBackgroundEffects />
    </div>

    <main
      class="relative z-10 mx-auto max-w-container-max
             px-6 xl:px-margin-desktop"
    >
      <UiSectionHeader
        :tag="t('contact.tag')"
        :title="t('contact.title')"
        as="h1"
      />

      <!-- Thailand head office -->
      <ContactOfficeShowcase class="mb-10" />

      <!--
        Desktop layout:
        InquiryForm   | OfficeNetwork
                      | KycPortal
      -->
      <div
        class="grid grid-cols-1 gap-8
               lg:grid-cols-12 lg:items-stretch"
      >
        <!-- Left: business inquiry -->
        <ContactInquiryForm
          class="h-full lg:col-span-7"
          @submit="handleInquirySubmit"
        />

        <!-- Right: UAE network + KYC -->
        <div
          class="grid h-full grid-cols-1 gap-8
                 lg:col-span-5 lg:grid-rows-[minmax(0,1fr)_auto]"
        >
          <ContactOfficeNetwork class="h-full" />
          <ContactKycPortal />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'

interface ContactInquiryPayload {
  type: string
  company: string
  name: string
  email: string
  phone: string
  message: string
}

const { t } = useI18n()

useScrollReveal()

const handleInquirySubmit = (payload: ContactInquiryPayload) => {
  // เชื่อม API ส่งแบบฟอร์มที่นี่
  console.log(payload)
}
</script>
