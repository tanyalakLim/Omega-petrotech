<template>
    <section class="py-24 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 relative z-10">

            <!-- Header -->
            <div class="text-center mb-20 font-ibm-thai">
                <h3 class="text-secondary-container font-bold tracking-[0.3em] th:tracking-widest uppercase text-sm mb-3">
                    {{ $t('about.vision_mission.tagline') }}
                </h3>

                <h2 class="text-3xl md:text-5xl font-black text-slate-950 mb-6 scroll-reveal">
                    {{ $t('about.vision_mission.title') }}
                </h2>

            </div>

            <!-- Main Layout -->
            <div class="grid lg:grid-cols-12 gap-10">

                <!-- Missions -->
                <div class="lg:col-span-5 flex flex-col gap-5">
                    <div v-for="(item, idx) in missionItems" :key="idx"
                        class="portfolio-item-card p-6 bg-[#f8fafc] rounded-2xl border border-slate-300/70 transition-all duration-500 group cursor-pointer relative overflow-hidden hover:border-secondary-container/50">
                        <!-- Gradient Overlay -->
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-secondary-container/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>

                        <!-- Header: Number + Title + Icon -->
                        <div class="flex justify-between items-start gap-4 relative z-10 scroll-reveal">
                            <div
                                class="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary-container font-bold text-lg group-hover:bg-secondary-container group-hover:text-white transition-all duration-500">
                                0{{ idx + 1 }}
                            </div>

                            <div>
                                <h5 class="font-bold text-lg text-slate-950 mb-1 font-ibm-thai">
                                    {{ item.title }}
                                </h5>

                                <p class="text-slate-600 text-sm leading-relaxed">
                                    {{ item.desc }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision -->
                <div
                    class="lg:col-span-7 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-[40px] p-10 md:p-14 text-white flex flex-col justify-center overflow-hidden border border-slate-800 shadow-2xl shadow-slate-900/20 group relative">

                    <!-- 1. Ambient Glow (แสงเรืองรองมุมขวาบนและซ้ายล่าง) -->
                    <div
                        class="absolute -top-24 -right-24 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110">
                    </div>
                    <div
                        class="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none">
                    </div>

                    <!-- 2. Giant Quote Watermark (ลายน้ำเครื่องหมายคำพูดขนาดใหญ่) -->
                    <div
                        class="absolute right-6 -bottom-10 text-[250px] leading-none font-serif text-white/[0.02] pointer-events-none select-none">
                        ”
                    </div>
                    <!-- Content (ให้อยู่เหนือพื้นหลัง) -->
                    <div class="relative z-10">

                        <!-- 3. Header Label (ใส่เส้นขีดตกแต่งหน้าข้อความ) -->
                        <div class="inline-flex items-center gap-4 mb-8">
                            <span class="w-10 h-px bg-secondary-container/80"></span>
                            <span class="text-secondary-container uppercase tracking-[0.25em] text-xs font-bold">
                                {{$t('about.vision_mission.header') }}
                            </span>
                        </div>

                        <!-- 4. Vision Text (ปรับสีและระยะห่างให้อ่านง่ายขึ้น) -->
                        <p
                            class="text-2xl md:text-[1.5rem] leading-snug mb-10 md:leading-relaxed font-[100] text-slate-100 italic scroll-reveal">
                            <span class="text-secondary-container/50 mr-2">"</span>{{
                                $t('about.vision_mission.vision_text') }}<span
                                class="text-secondary-container/50 font-serif ml-2">"</span>
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

const missionItems = computed(() => [
    {
        title: t('about.vision_mission.m1_title'),
        desc: t('about.vision_mission.m1_desc')
    },
    {
        title: t('about.vision_mission.m2_title'),
        desc: t('about.vision_mission.m2_desc')
    },
    {
        title: t('about.vision_mission.m3_title'),
        desc: t('about.vision_mission.m3_desc')
    }
])

const missionIcons = [
    'business',      // แทน building-office-2
    'verified_user', // แทน shield-check
    'groups'         // แทน user-group
]
</script>