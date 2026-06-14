<!-- components/home/HeroSection.vue -->
<template>
    <section
        class="relative md:flex items-center py-[130px] pb-[100px] md:min-h-auto lg:min-h-screen lg:py-0 overflow-hidden bg-primary">
        <!-- พื้นหลังสีเข้ม (Dark Layer) พร้อมเอฟเฟกต์ภาพและแสง Ambient สไตล์พรีเมียม -->
        <div class="absolute inset-0 z-0">
            <client-only>
                <div class="absolute inset-0 bg-cover bg-center grayscale opacity-40 transition-opacity duration-500"
                    :style="{ backgroundImage: `url('/images/hero-vessel.jpg?t=${Date.now()}')` }"></div>
            </client-only>
            <!-- ไล่เฉดสีดำเข้มเพื่อสร้างมิติให้ข้อความโดดเด่น -->
            <div class="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/80 to-transparent"></div>
            <!-- โครงข่ายจุดแบบ Micro-Dot Grid สีส้มสว่างเล็กน้อยเพื่อเน้นงานพลังงาน -->
            <div
                class="absolute inset-0 opacity-10 bg-[radial-gradient(#ff8928_1px,transparent_1px)] [background-size:20px_20px]">
            </div>
        </div>

        <div
            class="relative z-10 pt-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-12 gap-8 lg:gap-16 items-center">

            <!-- ฝั่งซ้าย: เนื้อหาหลัก -->
            <div class="col-span-12 lg:col-span-7 scroll-reveal">
                <div
                    class="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
                    </span>
                    <span class="text-[10px] font-ibm-thai font-medium text-white uppercase tracking-[0.2em]">{{
                        $t('home.hero.tag')
                    }}</span>
                </div>

                <h1
                    class="text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-bold text-white mb-6 tracking-tight font-ibm-thai">
                    {{ $t('home.hero.title_part1') }}
                    <br class="hidden sm:inline" />
                    <div class="pt-1"><span class="text-secondary-container block sm:inline">{{
                        $t('home.hero.title_part2') }}</span></div>
                </h1>

                <p class="text-xl md:text-lg text-white/60 mb-10 max-w-xl leading-relaxed font-light  font-ibm-thai">
                    {{ $t('home.hero.subtitle') }}
                </p>

                <div class="flex flex-col sm:flex-row gap-4">
                    <!-- ปุ่มหลัก: ติดต่อร่วมธุรกิจ -->
                    <NuxtLink :to="localePath('/contact')"
                        class="bg-secondary-container font-ibm-thai text-white px-8 py-4 md:py-5 text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3 rounded-xl shadow-xl shadow-secondary-container/20 w-full sm:w-auto group">
                        {{ $t('home.hero.btn_primary') }}
                        <span
                            class="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </NuxtLink>

                    <!-- ปุ่มรอง: เกี่ยวกับองค์กร -->
                    <NuxtLink :to="localePath('/about')"
                        class="border border-white/20 font-ibm-thai text-white px-8 py-4 md:py-5 text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-white/5 transition-all rounded-xl backdrop-blur-sm w-full sm:w-auto flex items-center justify-center">
                        {{ $t('home.hero.btn_secondary') }}
                    </NuxtLink>
                </div>
            </div>

            <!-- ฝั่งขวา: กล่องข้อมูลสถิติ (Dark Mode Card) -->
            <div class="col-span-12 lg:col-span-5 hidden lg:block scroll-reveal">
                <div
                    class="bg-white/5 border border-white/10 p-10 rounded-xl backdrop-blur-md relative overflow-hidden">
                    <div class="scan-line"></div>
                    <div class="space-y-8">
                        <div>
                            <div class="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">{{
                                $t('home.hero.stat_label_1') }}</div>
                            <div class="text-4xl font-mono text-white">100M<span
                                    class="text-secondary-container text-lg">+</span></div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="p-4 bg-white/5 rounded-lg border border-white/5">
                                <div class="text-[9px] font-bold text-white/50 uppercase mb-2 tracking-[0.1em]">{{
                                    $t('home.hero.stat_label_2') }}</div>
                                <div class="text-2xl text-white">AAA</div>
                            </div>
                            <div class="p-4 bg-white/5 rounded-lg border border-white/5">
                                <div class="text-[9px] font-bold text-white/50 uppercase mb-2 tracking-[0.1em]">{{
                                    $t('home.hero.stat_label_3') }}</div>
                                <div class="text-2xl text-white">2030</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const localePath = useLocalePath()
</script>
<style scoped>
.scan-line {
    position: absolute;
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, transparent, #ff8928, transparent);
    top: 0;
    left: 0;
    animation: scan 4s linear infinite;
    opacity: 0.3;
}

@keyframes scan {
    0% {
        top: 0;
    }

    100% {
        top: 100%;
    }
}
</style>