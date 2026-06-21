<template>
    <main class="relative min-h-screen overflow-hidden bg-[#f7f8fb]
           pb-20 pt-[118px] font-ibm-thai text-slate-900
           dark:bg-[#060b13] dark:text-white
           md:pb-28 md:pt-[158px]">
        <UiBackgroundEffects />
        <div class="relative z-10 mx-auto max-w-7xl
             px-4 md:px-6 xl:px-margin-desktop">
            <!-- Header -->
            <UiSectionHeader :tag="t('partner.tag')" :title="[
                t('partner.title.part1'),
                t('partner.title.part2')
            ]" as="h1" />
            <div class="relative z-10 mx-auto max-w-6xl
             px-4 md:px-6 xl:px-margin-desktop">
                <section class="scroll-reveal overflow-hidden rounded-[2.5rem]
               border border-slate-200/80 bg-white
               shadow-[0_32px_100px_-58px_rgba(15,23,42,0.42)]
               dark:border-white/[0.08] dark:bg-[#0a1220]
               dark:shadow-[0_34px_100px_-54px_rgba(0,0,0,0.82)]">
                    <div class="grid lg:grid-cols-[1.04fr_0.96fr]">
                        <!-- Office Image -->
                        <div class="relative min-h-[430px] overflow-hidden bg-slate-950">
                            <img src="/images/partners/jb-one-uaq-office.png" alt="jb-one-uaq-office" width="1200"
                                height="860" class="absolute inset-0 h-full w-full object-cover" />

                            <div class="absolute inset-0 bg-gradient-to-t
                     from-slate-950/90 via-slate-950/20 to-transparent"></div>

                            <div class="absolute left-6 top-6 rounded-2xl
                     border border-white/10 bg-white/[0.08]
                     px-4 py-2 text-[10px] font-black uppercase
                     tracking-[0.18em] text-orange-300 backdrop-blur-xl
                     sm:left-8 sm:top-8">
                                {{ t('partner.badge') }}
                            </div>

                            <div class="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                                <p class="text-[10px] font-black uppercase tracking-[0.18em]
                       text-white/50">
                                    {{ t('partner.eyebrow') }}
                                </p>

                                <h1 class="mt-3 max-w-2xl text-4xl font-black leading-tight
                       tracking-[-0.045em] sm:text-5xl">
                                    {{ t('partner.company.name') }}
                                </h1>
                            </div>
                        </div>

                        <!-- Information -->
                        <div class="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                            <div class="pointer-events-none absolute -right-24 -top-24
                     h-72 w-72 rounded-full bg-orange-100/80 blur-[90px]
                     dark:bg-orange-500/[0.06]" aria-hidden="true"></div>

                            <div class="relative z-10">
                                <p class="text-[10px] font-black uppercase tracking-[0.2em]
                       text-secondary-container dark:text-orange-400">
                                    {{ t('partner.company.label') }}
                                </p>

                                <h2 class="mt-3 text-3xl font-black tracking-tight
                       text-slate-950 dark:text-white md:text-4xl">
                                    {{ t('partner.company.name') }}
                                </h2>

                                <p class="mt-5 text-base font-light leading-8
                       text-slate-600 dark:text-slate-300">
                                    {{ t('partner.description') }}
                                </p>

                                <div class="mt-8 space-y-4">


                                    <!-- Office Address -->
                                    <article class="rounded-2xl border border-slate-200/80
                         bg-slate-50/80 p-5
                         dark:border-white/[0.08]
                         dark:bg-white/[0.025]">
                                        <div class="flex gap-4">
                                            <span class="flex h-11 w-11 shrink-0 items-center justify-center
                             rounded-xl bg-white text-secondary-container
                             shadow-sm dark:bg-white/[0.06]
                             dark:text-orange-400">
                                                <span class="material-symbols-outlined text-[21px]">
                                                    location_on
                                                </span>
                                            </span>

                                            <div>
                                                <p class="text-[10px] font-black uppercase tracking-[0.14em]
                               text-slate-400 dark:text-slate-500">
                                                    {{ t('partner.officeAddress.label') }}
                                                </p>

                                                <p class="mt-1 whitespace-pre-line text-sm font-light
                               leading-7 text-slate-600 dark:text-slate-300">
                                                    {{ t('partner.officeAddress.value') }}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <a :href="t('partner.website.url')" target="_blank" rel="noopener noreferrer" class="group mt-8 inline-flex items-center justify-center gap-2
                       rounded-xl bg-slate-900 px-5 py-3.5
                       text-sm font-bold text-white shadow-lg
                       transition-all duration-300
                       hover:-translate-y-0.5 hover:bg-secondary-container
                       dark:bg-orange-500 dark:hover:bg-white
                       dark:hover:text-[#07101e]">
                                    {{ t('partner.website.label') }}

                                    <span class="material-symbols-outlined text-[18px]
                         transition-transform duration-300
                         group-hover:translate-x-1">
                                        open_in_new
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'

const { t } = useI18n()

useScrollReveal()
</script>

