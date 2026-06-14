<template>
    <section class="font-ibm-thai py-20 md:py-28 bg-[#f8fafc] text-primary overflow-hidden relative technical-grid">

        <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 xl:px-margin-desktop relative z-10 space-y-12">
            
            <!-- Header Section -->
            <div class="text-center space-y-6 mb-16 md:mb-20">
                <h3 class="text-secondary-container font-bold tracking-[0.3em] uppercase text-sm mb-3">
                   {{ t('about.jv.sectionTitle') }}
                </h3>
                <h2 class="text-3xl md:text-5xl font-black text-slate-950 mb-6 leading-tight scroll-reveal">
                    {{ t('about.jv.mainHeading') }}
                </h2>
                <p class="text-base max-w-2xl md:text-lg text-slate-600 leading-relaxed font-light mx-auto scroll-reveal">
                    {{ t('about.jv.subHeading') }}
                </p>
            </div>

            <!-- Grid Items (วนลูปตามโครงสร้างและดึงภาษาด้วย Dynamic Key) -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <div v-for="card in cardStructures" :key="card.id"
                    class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-secondary-container/50 transition-all duration-300 group scroll-reveal"
                    :style="{ 'transition-delay': card.delay }">
                    <div>
                        <div class="inline-block px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-bold mb-6">
                            {{ card.tag }}
                        </div>
                        <!-- ดึงชื่อบริษัทตาม ID ของการ์ด -->
                        <h4 class="font-bold text-xl text-slate-950 mb-3 tracking-wide leading-snug">
                            {{ t(`about.jv.cards.${card.id}.title`) }}
                        </h4>
                        <!-- ดึงรายละเอียดตาม ID ของการ์ด -->
                        <p class="text-sm text-slate-600 leading-relaxed font-light hyphens-auto ">
                            {{ t(`about.jv.cards.${card.id}.description`) }}
                        </p>
                    </div>
                    
                    <!-- ส่วนท้ายการ์ด -->
                    <div class="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-secondary-container flex items-center gap-3">
                        <span class="material-symbols-outlined text-sm shrink-0">{{ card.icon }}</span>
                        <span class="leading-normal">{{ t(`about.jv.cards.${card.id}.footerText`) }}</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// ดึง t สำหรับแปลภาษา และ locale สำหรับสลับภาษา (ถ้าไม่ใช้ปุ่มสลับในหน้านี้ ลบ locale ออกได้ครับ)
const { t } = useI18n()

// เก็บเฉพาะโครงสร้าง (Metadata) ไว้ใน Component เพื่อให้สเปซสะอาด
const cardStructures = [
    {
        id: 'bmi',
        tag: 'BMI International',
        icon: 'shield',
        delay: '0ms'
    },
    {
        id: 'jb1',
        tag: 'JB1 Group FZC',
        icon: 'language',
        delay: '150ms'
    },
    {
        id: 'ept',
        tag: 'EPT (Thailand)',
        icon: 'gavel',
        delay: '300ms'
    }
]
</script>