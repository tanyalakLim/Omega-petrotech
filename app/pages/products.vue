<template>
    <div class="products-page">
        <div class="bg-slate-50 text-slate-900 min-h-screen py-28 md:pb-28 md:pt-[180px] overflow-hidden relative">

            <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full"></div>
                <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 blur-[150px] rounded-full"></div>
                <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px]"></div>
            </div>

            <div class="max-w-7xl mx-auto px-6 xl:px-margin-desktop relative z-10">
                <UiSectionHeader 
                    :tag="$t('products.tag')"
                    :title="[$t('products.title.part1'), $t('products.title.part2')]" 
                />

                <ProductsPremiumSection />

                <hr class="border-slate-200 mb-24" />

                <ProductsLogisticsSection />
            </div>
        </div>
        
        <HomeCtaSection />
    </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// เรียกใช้งาน scroll reveal ที่ไฟล์หลัก เพื่อครอบคลุมทั้งหน้า
useScrollReveal()
</script>