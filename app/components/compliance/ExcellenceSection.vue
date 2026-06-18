<template>
    <div class="mb-24 mt-10 text-slate-900 transition-colors duration-500 dark:text-slate-100">
        <UiContentHeader icon="local_shipping" :title="$t('compliance.compliance.title')"
            :desc="$t('compliance.compliance.desc')" />

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- Sanctions Compliance -->
            <article
                class="compliance-card group scroll-reveal relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-secondary-container/30 hover:shadow-md dark:border-slate-700/60 dark:bg-[#0b1220] dark:shadow-black/20 dark:hover:border-orange-400/25 dark:hover:bg-[#0e1829]">
                <div class="pointer-events-none absolute -right-20 -top-20 hidden h-52 w-52 rounded-full bg-blue-500/[0.05] blur-[80px] transition-transform duration-700 group-hover:scale-125 dark:block"
                    aria-hidden="true"></div>

                <div class="pointer-events-none absolute inset-x-8 top-0 hidden h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent dark:block"
                    aria-hidden="true"></div>

                <div class="relative z-10">
                    <div
                        class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 transition-all duration-300 group-hover:border-secondary-container/20 group-hover:bg-secondary-container/10 dark:border-slate-700/70 dark:bg-slate-800/70 dark:group-hover:border-orange-400/20 dark:group-hover:bg-orange-400/[0.08]">
                        <span
                            class="material-symbols-outlined text-secondary-container dark:text-orange-400">rule</span>
                    </div>

                    <h3 class="mb-4 text-xl font-bold text-primary transition-colors duration-300 dark:text-slate-50">
                        {{ $t('compliance.compliance.cards.sanctions.title') }}
                    </h3>

                    <p
                        class="mb-6 text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-400">
                        {{ $t('compliance.compliance.cards.sanctions.desc') }}
                    </p>

                    <ul class="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <li v-for="item in ['us', 'eu', 'un']" :key="item" class="flex items-center gap-3">
                            <span class="h-2 w-2 rounded-full bg-secondary-container dark:bg-orange-400"></span>
                            {{ $t(`compliance.compliance.cards.sanctions.list.${item}`) }}
                        </li>
                    </ul>
                </div>

                <div class="pointer-events-none absolute bottom-0 left-8 h-[2px] w-0 rounded-full bg-gradient-to-r from-secondary-container to-orange-400 transition-all duration-500 group-hover:w-20"
                    aria-hidden="true"></div>
            </article>

            <!-- Vessel Compliance -->
            <article
                class="compliance-card group scroll-reveal relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-secondary-container/30 hover:shadow-md dark:border-slate-700/60 dark:bg-[#0b1220] dark:shadow-black/20 dark:hover:border-orange-400/25 dark:hover:bg-[#0e1829]">
                <div class="pointer-events-none absolute -right-20 -top-20 hidden h-52 w-52 rounded-full bg-orange-500/[0.045] blur-[80px] transition-transform duration-700 group-hover:scale-125 dark:block"
                    aria-hidden="true"></div>

                <div class="pointer-events-none absolute inset-x-8 top-0 hidden h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent dark:block"
                    aria-hidden="true"></div>

                <div class="relative z-10">
                    <div
                        class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 transition-all duration-300 group-hover:border-secondary-container/20 group-hover:bg-secondary-container/10 dark:border-slate-700/70 dark:bg-slate-800/70 dark:group-hover:border-orange-400/20 dark:group-hover:bg-orange-400/[0.08]">
                        <span
                            class="material-symbols-outlined text-secondary-container dark:text-orange-400">directions_boat</span>
                    </div>

                    <h3 class="mb-4 text-xl font-bold text-primary transition-colors duration-300 dark:text-slate-50">
                        {{ $t('compliance.compliance.cards.vessel.title') }}
                    </h3>

                    <p
                        class="mb-4 text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-400">
                        {{ $t('compliance.compliance.cards.vessel.desc') }}
                    </p>

                    <div
                        class="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 transition-colors duration-300 dark:border-red-400/15 dark:bg-red-500/[0.07]">
                        <p class="flex gap-3 text-xs font-medium leading-relaxed text-red-700 dark:text-red-300">
                            <span
                                class="material-symbols-outlined text-lg text-red-500 dark:text-red-400">warning</span>
                            {{ $t('compliance.compliance.cards.vessel.warning') }}
                        </p>
                    </div>
                </div>

                <div class="pointer-events-none absolute bottom-0 left-8 h-[2px] w-0 rounded-full bg-gradient-to-r from-secondary-container to-orange-400 transition-all duration-500 group-hover:w-20"
                    aria-hidden="true"></div>
            </article>
        </div>
    </div>
</template>

<style scoped>
.dark .compliance-card {
    box-shadow:
        0 14px 35px -16px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.dark .compliance-card:hover {
    box-shadow:
        0 24px 55px -18px rgba(0, 0, 0, 0.65),
        0 0 28px -16px rgba(249, 115, 22, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

@media (prefers-reduced-motion: reduce) {

    .compliance-card,
    .compliance-card * {
        transition-duration: 0.01ms !important;
    }
}
</style>
