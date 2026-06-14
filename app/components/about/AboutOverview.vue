<template>
    <section
        class="relative font-ibm-thai py-28 md:pb-28  md:pt-[180px]  bg-gradient-to-br from-slate-50 via-blue-50/40 to-amber-50/50 text-slate-950 overflow-hidden border-b border-slate-200/60 flex items-center justify-center ">

        <div class="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
            <client-only>
                <div class="absolute inset-0 bg-cover bg-center grayscale opacity-[0.12] mix-blend-multiply transition-opacity duration-1000"
                    :style="{ backgroundImage: `url('/images/hero-vessel.jpg?t=${Date.now()}')` }"></div>

            </client-only>
            <div
                class="absolute -top-32 -left-32 w-[600px] h-[600px] bg-secondary-container/[0.08] rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite] pointer-events-none">
            </div>
            <div
                class="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_alternate-reverse] pointer-events-none">
            </div>

            <div
                class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-slate-900/[0.02]">
            </div>

            <div
                class="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ff8928_1.5px,transparent_1.5px)] [background-size:24px_24px]">
            </div>

            <div
                class="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-secondary-container/30 to-transparent">
            </div>
            <div
                class="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent">
            </div>

            <div
                class="absolute top-1/4 right-[15%] w-40 h-40 bg-white/30 backdrop-blur-3xl rounded-full border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] opacity-60 animate-[pulse_10s_ease-in-out_infinite] pointer-events-none">
            </div>
            <div
                class="absolute bottom-1/4 left-[20%] w-20 h-20 bg-white/40 backdrop-blur-2xl rounded-full border border-white/80 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] opacity-50 animate-[pulse_7s_ease-in-out_infinite_reverse] pointer-events-none">
            </div>

            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white/90 rounded-[100%] blur-[80px] pointer-events-none">
            </div>
        </div>
        <div class="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">

            <!-- ─── 1. ส่วนแนะนำตัวตรงกลาง (Center Focus Intro) ─── -->
            <div class="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
                <!-- Tagline -->

                <div
                    class="inline-flex items-center gap-3 mb-4 bg-white/70 border border-white/10 px-4 py-2 rounded-full">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
                    </span>
                    <span
                        class="text-[12px] font-ibm-thai font-medium text-secondary-container uppercase tracking-[0.2em]">{{
                            $t('about.overview.tagline') }}</span>
                </div>

                <!-- Company Name -->
                <h1 class="text-3xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                    {{ $t('about.overview.title') }}
                </h1>

                <!-- Description -->
                <p class="text-base md:text-lg text-slate-600 leading-relaxed font-light mx-auto">
                    {{ $t('about.overview.desc_part1') }}
                    <span class="font-medium text-slate-950">{{ $t('about.overview.desc_year') }}</span>
                    {{ $t('about.overview.desc_part2') }}
                </p>
            </div>

            <!-- ─── 2. ส่วนกล่องข้อมูล Bento Box (Grid Layout) ─── -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                <!-- 📦 กล่องซ้าย: Sourcing Focus (col-span-5) -->
                <div
                    class="lg:col-span-5 bg-[#0c1324] text-white rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-1">
                    <!-- ลายน้ำพื้นหลังกล่อง -->
                    <div
                        class="absolute -bottom-10 -right-10 opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                        <span class="material-symbols-outlined text-[150px]">nest_eco_leaf</span>
                    </div>
                    <div>
                        <div
                            class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                            <span
                                class="material-symbols-outlined text-secondary-container">precision_manufacturing</span>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 tracking-wide">
                            {{ $t('about.overview.sourcing.title') }}
                        </h3>

                        <p class="text-white/70 text-sm leading-relaxed font-light mb-8">
                            {{ $t('about.overview.sourcing.desc') }}
                        </p>
                    </div>

                    <ul class="space-y-3 text-sm relative z-10">
                        <li v-for="(item, index) in sourcingProducts" :key="index"
                            class="flex items-center gap-4 bg-white/[0.03] px-5 py-3.5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                            <span
                                class="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0 shadow-[0_0_8px_#ff8928]"></span>
                            <span class="font-medium tracking-wide">{{ item }}</span>
                        </li>
                    </ul>
                </div>

                <!-- 📦 กล่องขวา: ภาพบรรยากาศ + Financial Backing (col-span-7) -->
                <div class="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-xl relative min-h-[450px] group">
                    <!-- ภาพพื้นหลัง -->
                    <client-only>
                        <div class="absolute bg-cover inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            :style="{ backgroundImage: `url('/images/about-overview.jpg?t=${Date.now()}')` }" />
                    </client-only>
                    <!-- เลเยอร์ไล่เฉดสีเพื่อให้ข้อความในการ์ดอ่านง่ายขึ้น -->
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent">
                    </div>

                    <!-- Financial Backing Glass Card (ลอยอยู่มุมซ้ายล่าง) -->
                    <div
                        class="absolute bottom-6 left-6 right-6 md:right-auto md:w-[85%] lg:w-[90%] xl:w-[420px] bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-2">
                        <div class="flex items-center gap-3 mb-3">
                            <div
                                class="w-8 h-8 rounded-full bg-secondary-container/10 flex items-center justify-center shrink-0">
                                <span
                                    class="material-symbols-outlined text-secondary-container text-sm">account_balance</span>
                            </div>
                            <p class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                                {{ $t('about.overview.finance.label') }}
                            </p>
                        </div>

                        <div class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                            $15M – $100M <span class="text-lg font-medium text-slate-400">USD</span>
                        </div>

                        <p class="text-sm text-slate-600 leading-relaxed" v-html="$t('about.overview.finance.desc')">
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ข้อมูลจำลองสำหรับ Sourcing Products รอการผูกกับภาษา
const sourcingProducts = computed(() => [
    t('about.overview.sourcing.items.diesel'),
    t('about.overview.sourcing.items.lng'),
    t('about.overview.sourcing.items.renewable')
])
</script>