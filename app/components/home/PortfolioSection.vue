<template>
    <section class="py-20 md:py-28 bg-white text-primary overflow-hidden relative">
        <div
            class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="grid grid-cols-12 gap-8 lg:gap-16 items-stretch">

                <div class="col-span-12 lg:col-span-6 flex flex-col justify-center scroll-reveal row">
                    <div class="flex items-center gap-4 mb-4 md:mb-6">
                        <div class="w-12 h-[2px] bg-secondary-container"></div>
                        <span
                            class="text-[11px] font-bold font-ibm-thai text-on-surface-variant uppercase tracking-[0.2em] block">
                            {{ $t('home.portfolio.tag') }}
                        </span>
                    </div>
                    <h2
                        class="text-3xl md:text-5xl font-ibm-thai font-extrabold text-primary mb-10 md:mb-14 tracking-tight leading-tight">
                        {{ $t('home.portfolio.title') }}
                        <br class=" hidden sm:inline" />
                        <div class="sm:pt-0 lg:pt-2">
                            <span class="block sm:inline text-primary/80">
                                {{ $t('home.portfolio.title2') }}
                            </span>
                        </div>
                    </h2>

                    <div class="space-y-4 md:space-y-5">
                        <div v-for="item in portfolioItems" :key="item.id"
                            class="portfolio-item-card p-6 bg-[#f8fafc] rounded-2xl border border-slate-300/70 transition-all duration-500 group cursor-pointer relative overflow-hidden">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-secondary-container/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div class="flex justify-between items-start gap-4 mb-1 relative z-10">
                                <h4
                                    class="text-base md:text-lg font-bold font-ibm-thai text-primary group-hover:text-secondary-container transition-colors duration-300">
                                    {{ $t(item.titleKey) }}
                                </h4>
                                <div
                                    class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-primary/60 shrink-0 group-hover:bg-secondary-container group-hover:text-white transition-all duration-500">
                                    <span class="material-symbols-outlined text-lg">{{ item.icon }}</span>
                                </div>
                            </div>
                            <p
                                class="text-on-surface-variant/80 max-w-90 text-xs md:text-sm leading-relaxed relative z-10">
                                {{ $t(item.descKey) }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-6 flex flex-col mt-8 lg:mt-0 scroll-reveal"
                    style="transition-delay: 200ms;">

                    <div
                        class="w-full h-full min-h-[380px] lg:min-h-0 bg-slate-100 rounded-2xl overflow-hidden shadow-[0_20px_45px_-12px_rgba(15,23,42,0.08)] border border-slate-200/40 relative group/img">

                        <img src="/images/cargo-logistics.jpg" alt="Premium Energy Products Supply Chain"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent mix-blend-multiply">
                        </div>

                        <div
                            class="absolute bottom-4 left-4 font-ibm-thai right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:right-auto bg-white/90 p-5 rounded-xl shadow-[0_15px_35px_-8px_rgba(15,23,42,0.12)] border border-white/60 backdrop-blur-md max-w-full sm:max-w-[320px] transition-all duration-500 hover:bg-white">
                            <div class="flex items-center gap-3 mb-3">
                                <div
                                    class="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-sm">
                                    <span class="material-symbols-outlined text-white text-sm">bar_chart</span>
                                </div>
                                <div>
                                    <div class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                        {{ $t('home.portfolio.card_status') }}
                                    </div>
                                    <div class="text-xs font-bold text-primary tracking-tight mt-0.5">
                                        {{ $t('home.portfolio.card_title') }}
                                    </div>
                                </div>
                            </div>

                            <div class="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div class="h-full bg-secondary-container rounded-full w-3/4"></div>
                            </div>

                            <NuxtLink :to="localePath('/products')"
                                class="flex justify-between items-center mt-3 pt-2.5 border-t border-slate-100/60 cursor-pointer hover:opacity-80 transition-opacity block">
                                <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                                    {{ $t('home.portfolio.card_footer') }}
                                </span>
                                <span
                                    class="material-symbols-outlined text-primary group-hover/img:text-secondary-container text-xs transition-colors">
                                    east
                                </span>
                            </NuxtLink>
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
// ชุดข้อมูลสําหรับรัน Loop การ์ด Portfolio
const portfolioItems = [
    {
        id: 1,
        titleKey: 'home.portfolio.item1_title',
        descKey: 'home.portfolio.item1_desc',
        icon: 'local_gas_station'
    },
    {
        id: 2,
        titleKey: 'home.portfolio.item2_title',
        descKey: 'home.portfolio.item2_desc',
        icon: 'propane_tank'
    },
    {
        id: 3,
        titleKey: 'home.portfolio.item3_title',
        descKey: 'home.portfolio.item3_desc',
        icon: 'wb_sunny'
    }
]
</script>

<style scoped></style>