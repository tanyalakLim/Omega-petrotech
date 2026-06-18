<template>
    <div class="text-slate-900 transition-colors duration-500 dark:text-slate-100">
        <!-- Header -->
        <UiContentHeader icon="local_shipping" :title="$t('compliance.esg.title')" :desc="$t('compliance.esg.desc')" />

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <!-- Immediate Action -->
            <article
                class="group scroll-reveal delay-500 relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-emerald-400/15 dark:from-[#0b1a18] dark:via-[#0a1518] dark:to-[#081116] dark:shadow-black/20 dark:hover:border-emerald-400/30 dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.35)] lg:col-span-2">
                <!-- Dark ambient glow -->
                <div class="pointer-events-none absolute -right-20 -top-20 hidden h-56 w-56 rounded-full bg-emerald-400/[0.07] blur-[80px] transition-transform duration-700 group-hover:scale-125 dark:block"
                    aria-hidden="true"></div>

                <div class="pointer-events-none absolute inset-x-8 top-0 hidden h-px bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent dark:block"
                    aria-hidden="true"></div>

                <div class="relative z-10">
                    <div
                        class="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-emerald-500/10 text-emerald-700 backdrop-blur-md transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105 dark:border-emerald-400/15 dark:bg-emerald-400/[0.08] dark:text-emerald-300">
                        <span class="material-symbols-outlined text-3xl">handshake</span>
                    </div>

                    <span
                        class="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 transition-colors duration-300 th:tracking-widest dark:text-emerald-300">
                        {{ $t('compliance.esg.cards.immediate.label') }}
                    </span>

                    <h3 class="mb-4 text-2xl font-bold text-slate-900 transition-colors duration-300 dark:text-white">
                        {{ $t('compliance.esg.cards.immediate.title') }}
                    </h3>

                    <p
                        class="mb-6 text-[15px] leading-relaxed text-slate-700 transition-colors duration-300 dark:text-slate-300">
                        {{ $t('compliance.esg.cards.immediate.desc') }}
                    </p>

                    <p
                        class="rounded-r-lg border-l-2 border-emerald-500 bg-white/50 py-2 pl-4 text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:border-emerald-400 dark:bg-white/[0.035] dark:text-slate-400">
                        {{ $t('compliance.esg.cards.immediate.note') }}
                    </p>
                </div>
            </article>

            <!-- Future Direction -->
            <article
                class="group scroll-reveal delay-500 relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-secondary-container/30 hover:shadow-lg dark:border-slate-700/60 dark:bg-[#0b1220] dark:shadow-black/20 dark:hover:border-orange-400/25 dark:hover:bg-[#0e1829] dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.35)] lg:col-span-3">
                <div class="pointer-events-none absolute -right-24 -top-24 hidden h-64 w-64 rounded-full bg-blue-500/[0.05] blur-[90px] transition-transform duration-700 group-hover:scale-125 dark:block"
                    aria-hidden="true"></div>

                <div class="pointer-events-none absolute inset-x-10 top-0 hidden h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent dark:block"
                    aria-hidden="true"></div>

                <div class="relative z-10">
                    <span
                        class="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-container transition-colors duration-300 th:tracking-widest dark:text-orange-400">
                        {{ $t('compliance.esg.cards.future.label') }}
                    </span>

                    <h3 class="mb-6 text-[24px] font-bold text-primary transition-colors duration-300 dark:text-white">
                        {{ $t('compliance.esg.cards.future.title') }}
                    </h3>

                    <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div v-for="sub in ['sub1', 'sub2']" :key="sub"
                            class="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary-container/25 hover:bg-white dark:border-slate-700/60 dark:bg-slate-800/45 dark:hover:border-orange-400/20 dark:hover:bg-slate-800/70">
                            <div class="mb-4 text-secondary-container dark:text-orange-400">
                                <span class="material-symbols-outlined text-3xl">
                                    {{ sub === 'sub1' ? 'science' : 'solar_power' }}
                                </span>
                            </div>

                            <h4
                                class="mb-2 font-bold text-slate-900 transition-colors duration-300 dark:text-slate-100">
                                {{ $t(`compliance.esg.cards.future.${sub}.title`) }}
                            </h4>

                            <p
                                class="text-xs leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-400">
                                {{ $t(`compliance.esg.cards.future.${sub}.desc`) }}
                            </p>
                        </div>
                    </div>

                    <p
                        class="mt-6 text-center text-xs italic text-slate-500 transition-colors duration-300 dark:text-slate-500">
                        {{ $t('compliance.esg.cards.future.footer') }}
                    </p>
                </div>
            </article>
        </div>
    </div>
</template>
