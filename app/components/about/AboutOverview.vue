<template>
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden
           border-b border-slate-200/60 bg-slate-50 py-28
           font-ibm-thai text-slate-950 transition-colors duration-500
           dark:border-white/[0.06] dark:bg-[#011220] dark:text-white
           md:pb-28 md:pt-[180px]">
        <!-- Background Effects Component -->
         <!-- Background Elements -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            
            <ClientOnly>
                <div class="absolute inset-0 bg-cover bg-center grayscale
                 opacity-[0.12] mix-blend-multiply
                 transition-all duration-1000
                 dark:opacity-[0.10]
                 dark:mix-blend-luminosity
                 dark:brightness-75
                 dark:contrast-125" :style="{
                    backgroundImage: `url('/images/hero-vessel.jpg?t=${Date.now()}')`
                }"></div>
            </ClientOnly>
        </div>
        <!-- Main Content -->
        <div class="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <!-- Section Header -->
            <UiSectionHeader :tag="$t('about.overview.tagline')" :title="$t('about.overview.title')" :desc="$t('about.overview.desc_part1')" as="h1" />

            <!-- Bento Grid -->
            <div class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
                <!-- Sourcing Focus -->
                <div class="group relative flex flex-col justify-between overflow-hidden
         rounded-[2rem] border border-white/5 bg-[#0c1324] p-8
         text-white shadow-xl transition-all duration-500
         hover:-translate-y-1

         dark:border-slate-700/60
         dark:bg-[#0b1220]
         dark:shadow-black/30
         dark:hover:border-secondary-container/30

         md:p-10 lg:col-span-5" style="box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2)">
                    <!-- Dark Mode Ambient Background -->
                    <div class="pointer-events-none absolute inset-0 hidden overflow-hidden dark:block"
                        aria-hidden="true">
                        <!-- Navy Gradient -->
                        <div class="absolute inset-0 bg-gradient-to-br
             from-[#111c30] via-[#0b1220] to-[#070c16]"></div>

                        <!-- Blue Glow -->
                        <div class="absolute -right-28 -top-32 h-72 w-72 rounded-full
             bg-blue-500/10 blur-[90px]"></div>

                        <!-- Orange Glow -->
                        <div class="absolute -bottom-32 -left-24 h-64 w-64 rounded-full
             bg-secondary-container/10 blur-[90px]"></div>

                        <!-- Subtle Top Highlight -->
                        <div class="absolute inset-x-10 top-0 h-px
             bg-gradient-to-r from-transparent
             via-blue-300/25 to-transparent"></div>
                    </div>

                    <!-- Watermark -->
                    <div class="absolute -bottom-10 -right-10 rotate-12
           opacity-10 transition-transform duration-700
           group-hover:rotate-0 group-hover:scale-110
           dark:text-blue-100 dark:opacity-[0.035]" aria-hidden="true">
                        <span class="material-symbols-outlined text-[150px]">
                            nest_eco_leaf
                        </span>
                    </div>

                    <div class="relative z-10">
                        <!-- Icon -->
                        <div class="mb-6 flex h-12 w-12 items-center justify-center
             rounded-2xl border border-white/10 bg-white/10
             backdrop-blur-md

             dark:border-secondary-container/20
             dark:bg-secondary-container/[0.08]
             dark:shadow-[0_0_24px_rgba(249,115,22,0.08)]">
                            <span class="material-symbols-outlined text-secondary-container
               dark:text-orange-400">
                                precision_manufacturing
                            </span>
                        </div>

                        <!-- Title -->
                        <h3 class="mb-4 text-2xl font-bold tracking-wide text-white
             dark:text-slate-50">
                            {{ $t('about.overview.sourcing.title') }}
                        </h3>

                        <!-- Description -->
                        <p class="mb-8 text-sm font-light leading-relaxed text-white/70
             dark:text-slate-300">
                            {{ $t('about.overview.sourcing.desc') }}
                        </p>
                    </div>

                    <!-- Product List -->
                    <ul class="relative z-10 space-y-3 text-sm">
                        <li v-for="(item, index) in sourcingProducts" :key="index" class="flex items-center gap-4 rounded-xl
             border border-white/10 bg-white/[0.03]
             px-5 py-3.5 transition-all duration-300
             hover:border-white/20 hover:bg-white/10

             dark:border-slate-700/60
             dark:bg-slate-800/40
             dark:hover:border-secondary-container/25
             dark:hover:bg-slate-800/70">
                            <span class="h-1.5 w-1.5 shrink-0 rounded-full
               bg-secondary-container dark:bg-orange-400" style="box-shadow: 0 0 8px rgba(249, 115, 22, 0.7)"></span>

                            <span class="font-medium tracking-wide text-white
               dark:text-slate-200">
                                {{ item }}
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- Image and Financial Backing -->
                <div class="group relative min-h-[450px] overflow-hidden rounded-[2rem] shadow-xl dark:border-white/10 lg:col-span-7"
                    style="box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18)">
                    <!-- Background Image -->
                    <client-only>
                        <div class="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            :style="{
                                backgroundImage: `url('/images/about-overview.jpg?t=${Date.now()}')`
                            }"></div>
                    </client-only>

                    <!-- Image Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent dark:from-black/85 dark:via-slate-950/40 dark:to-slate-900/10">
                    </div>

                    <!-- Financial Backing Card -->
                    <div class="absolute bottom-6 left-6 right-6 rounded-3xl
                        border border-white/60 bg-white/90 p-6 backdrop-blur-xl
                        transition-all duration-500 hover:-translate-y-2
                        dark:border-white/[0.08] dark:bg-[#0d1424]/90
                        dark:shadow-black/40
                        md:right-auto md:w-[85%] md:p-8
                        lg:w-[90%] xl:w-[420px]" style="box-shadow: 0 24px 55px -12px rgba(0, 0, 0, 0.35)">
                        <!-- Label -->
                        <div class="mb-3 flex items-center gap-3">
                            <div
                                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary-container/10 dark:bg-secondary-container/15">
                                <span class="material-symbols-outlined text-sm text-secondary-container">
                                    account_balance
                                </span>
                            </div>

                            <p
                                class="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 md:text-xs">
                                {{ $t('about.overview.finance.label') }}
                            </p>
                        </div>

                        <!-- Amount -->
                        <div class="mb-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white md:text-3xl">
                            $15M – $100M

                            <span class="text-lg font-medium text-slate-400 dark:text-slate-500">
                                USD
                            </span>
                        </div>

                        <!-- Finance Description -->
                        <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                            v-html="$t('about.overview.finance.desc')"></p>
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

const sourcingProducts = computed(() => [
    t('about.overview.sourcing.items.diesel'),
    t('about.overview.sourcing.items.lng'),
    t('about.overview.sourcing.items.renewable')
])
</script>