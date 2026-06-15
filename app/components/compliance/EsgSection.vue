<template>
    <div>
        <div class="mb-12">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-4 text-primary scroll-reveal">
                <span class="material-symbols-outlined text-emerald-600 text-4xl">eco</span>
                {{ $t('compliance.esg.title') }}
            </h2>
            <p class="text-slate-600 text-lg leading-relaxed max-w-4xl scroll-reveal delay-300">
                {{ $t('compliance.esg.desc') }}
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div class="lg:col-span-2 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-8 rounded-3xl shadow-sm relative overflow-hidden scroll-reveal delay-500">
                <div class="w-14 h-14 bg-emerald-500/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-emerald-700 group-hover:-rotate-3 transition-transform duration-300">
                    <span class="material-symbols-outlined text-3xl">handshake</span>
                </div>
                <span class="text-emerald-700 font-bold tracking-[0.2em] th:tracking-widest uppercase text-[10px] mb-3 block">
                    {{ $t('compliance.esg.cards.immediate.label') }}
                </span>
                <h3 class="text-2xl font-bold mb-4 text-slate-900">
                    {{ $t('compliance.esg.cards.immediate.title') }}
                </h3>
                <p class="text-slate-700 text-[15px] leading-relaxed mb-6">
                    {{ $t('compliance.esg.cards.immediate.desc') }}
                </p>
                <p class="text-slate-600 text-sm leading-relaxed border-l-2 border-emerald-500 pl-4 bg-white/50 py-2 rounded-r-lg">
                    {{ $t('compliance.esg.cards.immediate.note') }}
                </p>
            </div>

            <div class="lg:col-span-3 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm scroll-reveal delay-500">
                <span class="text-secondary-container font-bold tracking-[0.2em] th:tracking-widest uppercase text-[10px] mb-3 block">
                    {{ $t('compliance.esg.cards.future.label') }}
                </span>
                <h3 class="text-[24px] font-bold mb-6 text-primary">
                    {{ $t('compliance.esg.cards.future.title') }}
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div v-for="sub in ['sub1', 'sub2']" :key="sub" class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div class="mb-4 text-secondary-container">
                            <span class="material-symbols-outlined text-3xl">
                                {{ sub === 'sub1' ? 'science' : 'solar_power' }}
                            </span>
                        </div>
                        <h4 class="font-bold mb-2 text-slate-900">
                            {{ $t(`compliance.esg.cards.future.${sub}.title`) }}
                        </h4>
                        <p class="text-slate-600 text-xs leading-relaxed">
                            {{ $t(`compliance.esg.cards.future.${sub}.desc`) }}
                        </p>
                    </div>
                </div>
                <p class="text-slate-500 text-xs italic mt-6 text-center">
                    {{ $t('compliance.esg.cards.future.footer') }}
                </p>
            </div>
        </div>
    </div>
</template>