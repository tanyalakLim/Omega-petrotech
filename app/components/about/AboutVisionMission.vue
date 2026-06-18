<template>

        <!-- Background Effects -->
        <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <!-- Light Mode -->
            <div
                class="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/50 blur-[140px] dark:hidden">
            </div>

            <div
                class="absolute -bottom-48 -left-40 h-[560px] w-[560px] rounded-full bg-orange-100/50 blur-[150px] dark:hidden">
            </div>

            <!-- Dark Mode -->
            <div class="absolute inset-0 hidden bg-gradient-to-br from-[#080d18] via-[#070b14] to-[#050810] dark:block">
            </div>

            <div
                class="absolute -right-52 -top-52 hidden h-[620px] w-[620px] rounded-full bg-blue-600/[0.10] blur-[150px] dark:block">
            </div>

            <div
                class="absolute -bottom-56 -left-48 hidden h-[600px] w-[600px] rounded-full bg-secondary-container/[0.07] blur-[150px] dark:block">
            </div>

            <!-- Dark Grid -->
            <div class="absolute inset-0 hidden opacity-[0.18] dark:block
               bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)]
               [background-size:44px_44px]"></div>

            <!-- Dark Vignette -->
            <div class="absolute inset-0 hidden dark:block
               bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.55)_100%)]"></div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-6">
            <!-- Header -->
            <div class="mb-20 text-center">
                <h3 class="mb-3 text-sm font-bold uppercase tracking-[0.3em]
                 text-secondary-container transition-colors duration-300
                 th:tracking-widest dark:text-orange-400">
                    {{ $t('about.vision_mission.tagline') }}
                </h3>

                <h2 class="scroll-reveal mb-6 text-3xl font-black
                 text-slate-950 transition-colors duration-300
                 dark:text-white md:text-5xl">
                    {{ $t('about.vision_mission.title') }}
                </h2>


            </div>

            <!-- Main Layout -->
            <div class="grid gap-10 lg:grid-cols-12">
                <!-- Missions -->
                <div class="flex flex-col gap-5 lg:col-span-5">
                    <div v-for="(item, idx) in missionItems" :key="idx" class="portfolio-item-card group relative cursor-pointer
                   overflow-hidden rounded-2xl border
                   border-slate-300/70 bg-[#f8fafc] p-6
                   transition-all duration-500
                   hover:-translate-y-1
                   hover:border-secondary-container/50
                   hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]

                   dark:border-slate-700/60
                   dark:bg-[#0b1220]
                   dark:hover:border-secondary-container/30
                   dark:hover:bg-[#0e1829]
                   dark:hover:shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
                        <!-- Gradient Overlay -->
                        <div class="pointer-events-none absolute inset-0
                     bg-gradient-to-r
                     from-secondary-container/[0.04]
                     to-transparent opacity-0
                     transition-opacity duration-500
                     group-hover:opacity-100

                     dark:from-secondary-container/[0.07]
                     dark:via-blue-500/[0.025]
                     dark:to-transparent"></div>

                        <!-- Dark Mode Top Highlight -->
                        <div class="pointer-events-none absolute inset-x-8 top-0
                     hidden h-px bg-gradient-to-r
                     from-transparent via-blue-400/20
                     to-transparent dark:block"></div>

                        <!-- Number + Content -->
                        <div class="scroll-reveal relative z-10 flex items-start justify-between gap-4">
                            <!-- Number -->
                            <div class="flex h-14 w-14 shrink-0 items-center justify-center
                       rounded-2xl border border-slate-200
                       bg-slate-50 text-lg font-bold
                       text-secondary-container
                       transition-all duration-500

                       group-hover:border-secondary-container
                       group-hover:bg-secondary-container
                       group-hover:text-white
                       group-hover:shadow-[0_10px_25px_rgba(249,115,22,0.20)]

                       dark:border-slate-700/70
                       dark:bg-slate-800/70
                       dark:text-orange-400
                       dark:group-hover:border-orange-400
                       dark:group-hover:bg-orange-500
                       dark:group-hover:text-white">
                                0{{ idx + 1 }}
                            </div>

                            <!-- Mission Text -->
                            <div class="min-w-0 flex-1">
                                <h5 class="mb-1 text-lg font-bold text-slate-950
                         transition-colors duration-300
                         dark:text-slate-50">
                                    {{ item.title }}
                                </h5>

                                <p class="text-sm leading-relaxed text-slate-600
                         transition-colors duration-300
                         dark:text-slate-300">
                                    {{ item.desc }}
                                </p>
                            </div>
                        </div>

                        <!-- Bottom Accent -->
                        <div class="absolute bottom-0 left-6 h-[2px] w-0
                     rounded-full bg-gradient-to-r
                     from-secondary-container to-orange-400
                     transition-all duration-500
                     group-hover:w-20"></div>
                    </div>
                </div>

                <!-- Vision -->
                <div class="group relative flex min-h-[4ถ0px] flex-col
                 justify-center overflow-hidden rounded-[40px]
                 border border-slate-800
                 bg-gradient-to-br from-slate-900
                 via-slate-900 to-slate-950
                 p-10 text-white shadow-2xl
                 shadow-slate-900/20

                 dark:border-white/[0.08]
                 dark:bg-none
                 dark:bg-[#09111f]
                 dark:shadow-black/40

                 md:p-14 lg:col-span-7">
                    <!-- Dark Background Gradient -->
                    <div class="pointer-events-none absolute inset-0 hidden
                   bg-gradient-to-br from-[#111c30]
                   via-[#0b1220] to-[#060b14]
                   dark:block"></div>

                    <!-- Ambient Glow: Orange -->
                    <div class="pointer-events-none absolute -right-24 -top-24
                   h-[400px] w-[400px] rounded-full
                   bg-secondary-container/10 blur-[100px]
                   transition-transform duration-700
                   group-hover:scale-110

                   dark:bg-orange-500/[0.11]"></div>

                    <!-- Ambient Glow: Blue -->
                    <div class="pointer-events-none absolute -bottom-24 -left-24
                   h-[300px] w-[300px] rounded-full
                   bg-blue-500/10 blur-[100px]

                   dark:bg-blue-500/[0.12]"></div>

                    <!-- Dark Grid -->
                    <div class="pointer-events-none absolute inset-0 hidden
                   opacity-[0.14] dark:block
                   bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.09)_1px,transparent_1px)]
                   [background-size:40px_40px]"></div>

                    <!-- Top Highlight -->
                    <div class="pointer-events-none absolute inset-x-12 top-0
                   h-px bg-gradient-to-r from-transparent
                   via-blue-400/30 to-transparent"></div>

                    <!-- Giant Quote Watermark -->
                    <div class="pointer-events-none absolute -bottom-10 right-6
                   select-none font-serif text-[250px]
                   leading-none text-white/[0.02]
                   dark:text-blue-100/[0.025]">
                        ”
                    </div>

                    <!-- Vision Content -->
                    <div class="relative z-10">
                        <!-- Header Label -->
                        <div class="mb-8 inline-flex items-center gap-4">
                            <span class="h-px w-10 bg-secondary-container/80
                       dark:bg-orange-400/80"></span>

                            <span class="text-xs font-bold uppercase
                       tracking-[0.25em]
                       text-secondary-container
                       dark:text-orange-400">
                                {{ $t('about.vision_mission.header') }}
                            </span>
                        </div>

                        <!-- Vision Text -->
                        <p class="scroll-reveal mb-10 text-2xl font-[100]
                     italic leading-snug text-slate-100
                     md:text-[1.5rem] md:leading-relaxed
                     dark:text-slate-200">
                            <span class="mr-2 text-secondary-container/50
                       dark:text-orange-400/50">
                                "
                            </span>

                            {{ $t('about.vision_mission.vision_text') }}

                            <span class="ml-2 font-serif
                       text-secondary-container/50
                       dark:text-orange-400/50">
                                "
                            </span>
                        </p>

                        <!-- Bottom Decorative Detail -->
                        <div class="flex items-center gap-4">
                            <div class="h-px flex-1 bg-gradient-to-r
                       from-white/15 to-transparent
                       dark:from-slate-500/30"></div>

                            <span class="h-2 w-2 rounded-full
                       bg-secondary-container
                       dark:bg-orange-400" style="box-shadow: 0 0 12px rgba(251, 146, 60, 0.55)"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
</script>