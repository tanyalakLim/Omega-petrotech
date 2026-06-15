<template>
    <!-- พื้นหลังโทนสีขาวนวล/เทาจาง (Light Mode พรีเมียม) -->
    <section class="py-20 md:py-28 bg-[#f8fafc] text-primary overflow-hidden relative technical-grid font-ibm-thai">
        <!-- แสง Ambient Light จางๆ ด้านหลัง -->
        <div
            class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/5 rounded-full blur-[120px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto px-4 relative z-10">

            <!-- ส่วนหัวข้อหลัก (Header Layer) -->
            <div
                class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 md:mb-24 gap-8 lg:gap-16">
                <div class="max-w-2xl">
                    <div class="flex items-center gap-4 mb-4 md:mb-6">
                        <div class="w-12 h-[2px] bg-secondary-container"></div>
                        <span
                            class="text-[11px] font-bold font-ibm-thai text-on-surface-variant uppercase tracking-[0.2em] th:tracking-widest block">
                            {{ $t('home.dna.tag') }}
                        </span>
                    </div>
                    <h2
                        class="text-3xl font-ibm-thai leading-[1.4] md:text-5xl font-extrabold text-primary tracking-tight scroll-reveal">
                        {{ $t('home.dna.title_part1') }}
                        <br class="hidden sm:inline" />
                        <div class="sm:pt-0 lg:pt-2">
                            <span class="block sm:inline text-primary/80">
                                {{ $t('home.dna.title_part2') }}
                            </span>
                        </div>
                    </h2>
                </div>
                <!-- โซนคำคม (Quote) -->
                <div
                    class="w-full lg:w-1/3 text-on-surface-variant/70 border-l-2 border-slate-200 pl-6 font-light lg:pl-8 italic leading-relaxed">
                    "{{ $t('home.dna.quote') }}"
                </div>
            </div>

            <!-- ดีไซน์การ์ดขาวแบบมินิมอล (ถอด nodeInfo ออกเรียบร้อย) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="card in dnaCards" :key="card.id"
                    class="dna-white-card p-8 md:p-10 rounded-2xl flex flex-col h-full relative bg-white/80 border border-slate-200/60 group scroll-reveal"
                    :style="{ 'transition-delay': card.delay }">
                    <!-- เอฟเฟกต์แสงจางด้านหลังเวลามีการ Hover -->
                    <div
                        class="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    </div>

                    <!-- ส่วนหัวการ์ด: เหลือเพียงกล่องไอคอนแบบคลีนๆ -->
                    <div class="mb-8 relative z-10">
                        <div
                            class="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-105">
                            <span
                                class="material-symbols-outlined text-2xl transition-transform duration-300 ">
                                {{ card.icon }}
                            </span>
                        </div>
                    </div>

                    <!-- เนื้อหาหลัก (Typography) -->
                    <div class="relative z-10">
                        <h3
                            class="text-xl font-bold mb-4 tracking-tight text-primary group-hover:text-secondary-container transition-colors duration-300">
                            {{ $t(`home.dna.card${card.id}_title`) }}
                        </h3>
                        <p
                            class="text-sm leading-relaxed font-light text-on-surface-variant group-hover:text-primary/80 transition-colors duration-300 mb-8">
                            {{ $t(`home.dna.card${card.id}_desc`) }}
                        </p>
                    </div>
                    <!-- ส่วนท้ายการ์ด (Footer Edge): เพิ่มปุ่มกดลิงก์ไปหน้า Compliance -->
                    <div class="mt-auto pt-5 border-t border-slate-100 flex justify-between items-center relative z-10">
                        <!-- ปุ่มกดศึกษาข้อมูลเพิ่มเติม ลิงก์ไปหน้า Compliance -->
                        <NuxtLink to="/compliance"
                            class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-primary/60 group-hover:text-secondary-container transition-colors duration-300">
                            <span> {{ $t(`home.dna.more`) }}</span>
                            <span
                                class="material-symbols-outlined text-xs transition-transform duration-300 group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </NuxtLink>

                        <!-- ไอคอนตกแต่งมุมขวาแบบดั้งเดิม -->
                        <span
                            class="material-symbols-outlined text-sm text-slate-300 group-hover:text-secondary-container/40 transition-colors duration-300">
                            {{ card.footerIcon }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// ถอด property nodeInfo ออกจาก Array เรียบร้อย เพื่อให้โค้ดสะอาดและเบาขึ้น
const dnaCards = [
    {
        id: 1,
        icon: 'account_balance',
        footerIcon: 'link',
        delay: '0ms'
    },
    {
        id: 2,
        icon: 'verified_user',
        footerIcon: 'lock',
        delay: '150ms'
    },
    {
        id: 3,
        icon: 'hub',
        footerIcon: 'grid_view',
        delay: '300ms'
    }
]
</script>

<style scoped>
.dna-white-card {
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
}

/* เอฟเฟกต์ยกตัวลอยและการกระจายเงาเวลา Hover */
.dna-white-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 137, 40, 0.4);
    box-shadow:
        0 20px 35px -10px rgba(15, 23, 42, 0.08),
        0 0 25px -5px rgba(255, 137, 40, 0.05);
}
</style>