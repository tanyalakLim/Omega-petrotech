<template>
    <section
        class="py-24 md:py-32 bg-gradient-to-b from-[#060b13] to-[#0c1324] text-white overflow-hidden relative border-t border-white/5">
        <div
            class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[140px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none">
        </div>
        <div
            class="absolute inset-0 opacity-10 bg-[radial-gradient(#ff8928_1px,transparent_1px)] [background-size:20px_20px]">
        </div>

        <div class="max-w-7xl mx-auto px-6 xl:px-margin-desktop relative z-10">

            <div class="text-center max-w-3xl mx-auto mb-24 scroll-reveal">
                <span
                    class="text-[11px] font-bold text-secondary-container uppercase tracking-[0.3em] th:tracking-widest mb-6 block animate-pulse">
                    {{ t('about.org.tag') }}
                </span>
                <h2
                    class="text-3xl md:text-5xl font-extrabold mb-8 ">
                    {{ t('about.org.companyName') }}
                </h2>
                <div
                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span class="w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"></span>
                    <p class="text-white/70 text-xs md:text-sm font-light uppercase tracking-[0.1em]">{{ t('about.org.legalStatus') }}</p>
                </div>
            </div>

            <div class="hidden md:flex flex-col items-center w-full select-none scroll-reveal">

                <div class="grid grid-cols-5 w-full">
                    <div class="col-start-2 col-span-3 flex justify-center">
                        <div class="group relative">
                            <div
                                class="absolute -inset-0.5 bg-gradient-to-b from-secondary-container/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div
                                class="relative bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-8 rounded-2xl backdrop-blur-xl text-center w-96 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-secondary-container/40 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                <div
                                    class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
                                </div>
                                <div class="flex items-center justify-center mb-5">
                                    <div
                                        class="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary-container/10 group-hover:border-secondary-container/40 text-white/80 group-hover:text-secondary-container transition-all duration-500 shadow-inner">
                                        <span class="material-symbols-outlined text-3xl">groups</span>
                                    </div>
                                </div>
                                <span
                                    class="text-xs font-black text-secondary-container bg-secondary-container/10 px-4 py-1 rounded-full tracking-[0.15em] uppercase border border-secondary-container/20">{{ $t('about.org.structure.president') }}</span>
                                <h4
                                    class="text-xl font-bold text-white mt-4 tracking-wide bg-gradient-to-b from-white to-white/80 bg-clip-text">
                                    {{ $t('about.org.structure.board') }}</h4>
                                <p
                                    class="text-sm text-white/50 mt-4 border-t border-white/5 pt-3 tracking-wider">
                                    BMI & JB1 & EPT</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-12 relative">
                    <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/25"></div>
                </div>

                <div class="grid grid-cols-5 w-full items-center relative">

                    <div class="col-span-2 flex justify-end">
                        <div class="group relative mr-8">

                            <div
                                class="absolute top-1/2 -translate-y-1/2 left-full w-8 h-px bg-white/25 group-hover:bg-secondary-container transition-colors duration-500">
                            </div>

                            <div
                                class="absolute -inset-0.5 bg-gradient-to-br from-secondary-container/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div
                                class="relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 p-5 rounded-2xl backdrop-blur-xl flex items-center gap-4 w-86 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/20">
                                <div
                                    class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/60 group-hover:bg-secondary-container/10 group-hover:text-secondary-container transition-all duration-500 shrink-0">
                                    <span class="material-symbols-outlined text-2xl">gavel</span>
                                </div>
                                <div>
                                    <span
                                        class="text-xs font-black text-secondary-container bg-secondary-container/10 px-2.5 py-0.5 rounded-md tracking-wider uppercase border border-secondary-container/10">EPT</span>
                                    <h5 class="text-base font-medium text-white/90 mt-3 leading-snug">{{ $t('about.org.departments.legal.title') }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1 h-full relative flex justify-center py-6">
                        <div class="absolute inset-y-0 w-px bg-white/25"></div>
                        <div class="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-white/25"></div>

                        <div
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#030712] border border-white/40 flex items-center justify-center z-10">
                            <div class="w-1 h-1 rounded-full bg-secondary-container animate-ping absolute"></div>
                            <div class="w-1 h-1 rounded-full bg-secondary-container relative"></div>
                        </div>
                    </div>

                    <div class="col-span-2 flex justify-start">
                    
                        <div class="group relative ml-8">

                            <div
                                class="absolute top-1/2 -translate-y-1/2 right-full w-8 h-px bg-white/25 group-hover:bg-secondary-container transition-colors duration-500">
                            </div>

                            <div
                                class="absolute -inset-0.5 bg-gradient-to-bl from-white/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div
                                class="relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 p-5 rounded-2xl backdrop-blur-xl flex items-center gap-4 w-86 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white/20">
                                <div
                                    class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/60 group-hover:bg-secondary-container/10 group-hover:text-secondary-container transition-all duration-500 shrink-0">
                                    <span class="material-symbols-outlined text-2xl">edit_document</span>
                                </div>
                                <div>
                                    <span
                                        class="text-xs font-black text-secondary-container bg-secondary-container/10 px-2.5 py-0.5 rounded-md tracking-wider uppercase border border-secondary-container/10">HQ</span>
                                    <h5 class="text-base font-medium text-white/90 mt-2 leading-snug">{{ $t('about.org.departments.secretariat.title') }}</h5>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-12 relative">
                    <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/25"></div>
                </div>

                <div class="grid grid-cols-5 w-full">
                    <div class="col-start-2 col-span-3 flex justify-center">
                        <div class="group relative">
                            <div
                                class="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>
                            <div
                                class="relative bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-6 rounded-2xl backdrop-blur-xl text-center w-86 transition-all duration-500 ease-out group-hover:-translate-y-1.5">
                                <div class="flex items-center justify-center mb-3">
                                    <div
                                    class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/60 group-hover:bg-secondary-container/10 group-hover:text-secondary-container transition-all duration-500 shrink-0">
                                    <span class="material-symbols-outlined text-2xl">person</span>
                                    </div>
                                </div>
                                <span
                                        class="text-xs font-black text-secondary-container bg-secondary-container/10 px-2.5 py-0.5 rounded-md tracking-wider uppercase border border-secondary-container/10">BMI</span>
                                <h4 class="text-md font-medium text-white mt-3 tracking-wide">{{ $t('about.org.roles.ceo') }}</h4>
                                <p class="text-sm text-white/40 mt-1">(CEO)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full h-12 relative">
                    <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/25"></div>
                </div>

                <div class="grid grid-cols-5 gap-5 w-full relative">
                    <div v-for="(role, index) in exactCSuite" :key="role.key"
                        class="flex flex-col items-center relative group pt-6">

                        <div class="absolute top-0 left-0 right-0 h-6 pointer-events-none">
                            <div
                                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-6 bg-white/25 group-hover:bg-secondary-container transition-colors duration-300">
                            </div>
                            <div v-if="index > 0"
                                class="absolute top-0 left-[-10px] right-1/2 h-px bg-white/25 group-hover:bg-gradient-to-r group-hover:from-white/10 group-hover:to-secondary-container transition-all duration-300">
                            </div>
                            <div v-if="index < exactCSuite.length - 1"
                                class="absolute top-0 left-1/2 right-[-10px] h-px bg-white/25 group-hover:bg-gradient-to-r group-hover:from-secondary-container group-hover:to-white/10 transition-all duration-300">
                            </div>
                            <div
                                class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/40 group-hover:bg-secondary-container transition-colors duration-300">
                            </div>
                        </div>

                        <div
                            class="w-full h-full bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.06] p-6 rounded-2xl backdrop-blur-xl text-center transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-white/20 flex flex-col items-center justify-between min-h-[200px]">
                            <div
                                class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary-container/10 group-hover:border-secondary-container/30 group-hover:text-secondary-container text-white/60 transition-all duration-500 mb-4">
                                <span class="material-symbols-outlined text-2xl">{{ role.icon }}</span>
                            </div>
                            <div class="w-full flex flex-col items-center">
                                <span
                                        class="text-xs font-black text-secondary-container bg-secondary-container/10 px-2.5 py-0.5 rounded-md tracking-wider uppercase border border-secondary-container/10">
                                    {{ role.firm }}
                                </span>
                                <h5
                                    class="text-xs text-white/90 leading-snug px-0.5 min-h-[40px] flex items-center justify-center">
                                    {{ $t(`about.org.csuite.${role.key}.title`) }}
                                </h5>
                                <p class="text-sm text-white/40 mt-1">
                                    {{ role.abbr }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile -->
            <div
                class="block md:hidden space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-[1px] before:bg-white/10">
                <div class="relative pl-12">
                    <div
                        class="absolute left-5 top-6 w-3 h-3 rounded-full bg-secondary-container border-2 border-[#060b13] z-10 animate-pulse">
                    </div>
                    <div
                        class="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-5 rounded-xl backdrop-blur-sm">
                        <span
                            class="text-[9px] font-bold text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded tracking-widest uppercase">{{ $t('about.org.structure.president') }}
                            Level</span>
                        <h4 class="text-base font-bold text-white mt-2">{{ $t('about.org.structure.board') }}</h4>
                        <p class="text-xs text-white/40 mt-1">BMI & JB1 & EPT</p>
                    </div>
                </div>

                <div class="relative pl-12">
                    <div class="absolute left-5 top-5 w-2 h-2 rounded-full bg-white/30 z-10"></div>
                    <div
                        class="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] p-4 rounded-xl flex items-center gap-4">
                        <span class="material-symbols-outlined text-secondary-container text-xl">gavel</span>
                        <div>
                            <span class="text-[9px] text-secondary-container font-bold">EPT</span>
                            <div class="text-xs font-bold text-white mt-0.5">{{ $t('about.org.departments.legal.title') }}</div>
                        </div>
                    </div>
                </div>

                <div class="relative pl-12">
                    <div class="absolute left-5 top-5 w-2 h-2 rounded-full bg-white/30 z-10"></div>
                    <div
                        class="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] p-4 rounded-xl flex items-center gap-4">
                        <span class="material-symbols-outlined text-secondary-container text-xl">edit_document</span>
                        <div class="text-xs font-bold text-white leading-tight">{{ $t('about.org.departments.secretariat.title') }}</div>
                    </div>
                </div>

                <div class="relative pl-12">
                    <div
                        class="absolute left-5 top-6 w-3 h-3 rounded-full bg-secondary-container border-2 border-[#060b13] z-10 animate-pulse">
                    </div>
                    <div
                        class="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-5 rounded-xl backdrop-blur-sm">
                        <span
                            class="text-[9px] font-bold text-secondary-container bg-secondary-container/10 px-2 py-0.5 rounded tracking-widest uppercase">BMI</span>
                        <h4 class="text-base font-bold text-white mt-1.5">{{ $t('about.org.roles.ceo') }}</h4>
                    </div>
                </div>

                <div class="pl-12 pt-2 space-y-3">
                    <div v-for="role in exactCSuite" :key="role.key"
                        class="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] p-4 rounded-xl flex items-center gap-4">
                        <div
                            class="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-secondary-container border border-white/5 shrink-0">
                            <span class="material-symbols-outlined text-lg">{{ role.icon }}</span>
                        </div>
                        <div>
                            <span
                                class="text-[9px] font-bold text-secondary-container/80 bg-secondary-container/5 px-1.5 py-0.2 rounded border border-secondary-container/10">{{
                                    role.firm }}</span>
                            <div class="text-xs font-bold text-white mt-1">{{ $t(`about.org.csuite.${role.key}.title`) }}<span
                                    class="text-white/40 text-[10px] ml-1">{{ role.abbr }}</span></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="max-w-6xl mx-auto pt-14 border-t border-white/[0.08] mt-14 scroll-reveal">

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    <div v-for="pillar in pillars" :key="pillar.key"
                        class="relative justify-center overflow-hidden p-5 rounded-xl bg-gradient-to-r from-[#0a1424] to-[#0e1d33] border border-blue-500/10 flex flex-col sm:flex-row gap-4 items-center group hover:border-blue-500/30 transition-all duration-300 shadow-2xl text-center sm:text-left">
                        <div
                            class="absolute -right-4 -bottom-4 text-blue-500/[0.01] text-5xl font-black select-none pointer-events-none">
                            OIL
                        </div>
                        <div
                            class="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-md">
                            <span class="material-symbols-outlined text-lg">{{ pillar.icon }}</span>
                        </div>
                        <div>
                            <h5
                                class="text-xs font-medium text-white tracking-widest uppercase group-hover:text-secondary-container transition-colors">
                                 {{ $t(`about.org.pillars.${pillar.key}`) }}
                            </h5>
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

const exactCSuite = [
    { key: 'cro', firm: 'EPT', abbr: '(CRO)', icon: 'shield' },
    { key: 'cfo', firm: 'EPT', abbr: '(CFO)', icon: 'paid' },
    { key: 'cpo', firm: 'BMI', abbr: '(CPO)', icon: 'shopping_cart' },
    { key: 'cao', firm: 'JB1', abbr: '(CAO)', icon: 'groups' },
    { key: 'cmo', firm: 'JB1', abbr: '(CMO)', icon: 'campaign' }
]

const pillars = [
    { key: 'energy', icon: 'precision_manufacturing' },
    { key: 'supply', icon: 'local_shipping' },
    { key: 'storage', icon: 'database' },
    { key: 'safety', icon: 'local_fire_department' },
    { key: 'sustainability', icon: 'eco' }
]
</script>