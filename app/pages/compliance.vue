<template>
    <div class="compliance-page">
        <div class="bg-slate-50 text-slate-900 min-h-screen py-28 md:pb-28 md:pt-[180px] overflow-hidden relative">

            <!-- Background Elements (Light Theme) -->
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div
                    class="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full">
                </div>
                <div
                    class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 blur-[150px] rounded-full">
                </div>
                <div
                    class="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px]">
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 xl:px-margin-desktop relative z-10">

                <!-- Hero Header -->
                <div class="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
                    <div
                        class="inline-flex items-center gap-3 mb-4 bg-white/70 border border-white/10 px-4 py-2 rounded-full">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
                        </span>
                        <span
                            class="text-[12px] font-ibm-thai font-medium text-secondary-container uppercase tracking-[0.2em]">
                            {{ $t('compliance.tag') }}
                        </span>
                    </div>
                    <h2
                        class="text-3xl font-ibm-thai leading-[1.4] md:text-5xl font-extrabold text-primary tracking-tight scroll-reveal">
                        {{ $t('compliance.title.part1') }}
                        <br class="hidden sm:inline" />
                        <div class="sm:pt-0 lg:pt-2">
                            <span class="block sm:inline text-primary/80">
                                {{ $t('compliance.title.part2') }}
                            </span>
                        </div>
                    </h2>

                    <div
                        class="w-20 h-1 bg-gradient-to-r from-transparent via-secondary-container to-transparent mx-auto rounded-full">
                    </div>
                </div>
                <!-- Section 1: Compliance Excellence -->
                <div class="mb-24 mt-10">
                    <div class="mb-12">
                        <h2
                            class="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-4 text-primary scroll-reveal">
                            <span
                                class="material-symbols-outlined text-secondary-container text-4xl">shield_locked</span>
                            {{ $t('compliance.compliance.title') }}
                        </h2>
                        <p class="text-slate-600 text-lg leading-relaxed max-w-4xl  scroll-reveal delay-300">
                            {{ $t('compliance.compliance.desc') }}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Card: Automated Sanctions Screening -->
                        <div
                            class="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-secondary-container/30 transition-all group scroll-reveal">
                            <div
                                class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                                <span class="material-symbols-outlined text-secondary-container">rule</span>
                            </div>
                            <h3 class="text-xl font-bold mb-4 text-primary">
                                {{ $t('compliance.compliance.cards.sanctions.title') }}</h3>
                            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                                {{ $t('compliance.compliance.cards.sanctions.desc') }}
                            </p>
                            <ul class="space-y-2 text-sm font-medium text-slate-700">
                                <li v-for="item in ['us', 'eu', 'un']" :key="item" class="flex items-center gap-3">
                                    <span class="w-2 h-2 bg-secondary-container rounded-full"></span>
                                    {{ $t(`compliance.compliance.cards.sanctions.list.${item}`) }}
                                </li>
                            </ul>
                        </div>

                        <!-- Card: Vessel Vetting Policy -->
                        <div
                            class="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-secondary-container/30 transition-all group scroll-reveal">
                            <div
                                class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                                <span class="material-symbols-outlined text-secondary-container">directions_boat</span>
                            </div>
                            <h3 class="text-xl font-bold mb-4 text-primary">
                                {{ $t('compliance.compliance.cards.vessel.title') }}</h3>
                            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                                {{ $t('compliance.compliance.cards.vessel.desc') }}
                            </p>
                            <!-- Warning Box (Light Theme) -->
                            <div class="p-4 bg-red-50 border border-red-200 rounded-xl mt-6">
                                <p class="text-xs text-red-700 leading-relaxed flex gap-3 font-medium">
                                    <span class="material-symbols-outlined text-red-500 text-lg">warning</span>
                                    {{ $t('compliance.compliance.cards.vessel.warning') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Divider -->
                <hr class="border-slate-200 mb-24" />

                <!-- Section 2: ESG Integration -->
                <div>
                    <div class="mb-12 ">
                        <h2
                            class="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-4 text-primary  scroll-reveal">
                            <span class="material-symbols-outlined text-emerald-600 text-4xl">eco</span>
                            {{ $t('compliance.esg.title') }}
                        </h2>
                        <p class="text-slate-600 text-lg leading-relaxed max-w-4xl scroll-reveal delay-300">
                            {{ $t('compliance.esg.desc') }}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <!-- Card: Immediate Mandate (Spans 2 cols) -->
                        <div
                            class="lg:col-span-2 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-8 rounded-3xl shadow-sm relative overflow-hidden scroll-reveal delay-500">

                            <div
                                class="w-14 h-14 bg-emerald-500/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-700 group-hover:-rotate-3 transition-transform duration-300">
                                <span class="material-symbols-outlined text-3xl">handshake</span>
                            </div>
                            <span
                                class="text-emerald-700 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">{{
                                    $t('compliance.esg.cards.immediate.label') }}</span>
                            <h3 class="text-2xl font-bold mb-4 text-slate-900">{{
                                $t('compliance.esg.cards.immediate.title') }}</h3>
                            <p class="text-slate-700 text-[15px] leading-relaxed mb-6">
                                {{ $t('compliance.esg.cards.immediate.desc') }}
                            </p>
                            <p
                                class="text-slate-600 text-sm leading-relaxed border-l-2 border-emerald-500 pl-4 bg-white/50 py-2 rounded-r-lg">
                                {{ $t('compliance.esg.cards.immediate.note') }}
                            </p>
                        </div>

                        <!-- Card: Future Carbon Offset (Spans 3 cols) -->
                        <div
                            class="lg:col-span-3 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm scroll-reveal delay-500">
                            <span
                                class="text-secondary-container font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">{{
                                    $t('compliance.esg.cards.future.label') }}</span>
                            <h3 class="text-[24px] font-bold mb-6 text-primary">{{
                                $t('compliance.esg.cards.future.title') }}</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                <div v-for="sub in ['sub1', 'sub2']" :key="sub"
                                    class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div class="mb-4 text-secondary-container">
                                        <span class="material-symbols-outlined text-3xl">{{ sub === 'sub1' ? 'science' :
                                            'solar_power' }}</span>
                                    </div>
                                    <h4 class="font-bold mb-2 text-slate-900">{{
                                        $t(`compliance.esg.cards.future.${sub}.title`) }}</h4>
                                    <p class="text-slate-600 text-xs leading-relaxed">{{
                                        $t(`compliance.esg.cards.future.${sub}.desc`) }}</p>
                                </div>
                            </div>
                            <p class="text-slate-500 text-xs italic mt-6 text-center">{{
                                $t('compliance.esg.cards.future.footer') }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <HomeCtaSection />
    </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useScrollReveal()
</script>