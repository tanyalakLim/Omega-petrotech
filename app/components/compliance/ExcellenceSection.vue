<template>
    <div class="mb-24 mt-10">
        <div class="mb-12">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-4 text-primary scroll-reveal">
                <span class="material-symbols-outlined text-secondary-container text-4xl">shield_locked</span>
                {{ $t('compliance.compliance.title') }}
            </h2>
            <p class="text-slate-600 text-lg leading-relaxed max-w-4xl scroll-reveal delay-300">
                {{ $t('compliance.compliance.desc') }}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-secondary-container/30 transition-all group scroll-reveal">
                <div class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                    <span class="material-symbols-outlined text-secondary-container">rule</span>
                </div>
                <h3 class="text-xl font-bold mb-4 text-primary">
                    {{ $t('compliance.compliance.cards.sanctions.title') }}
                </h3>
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

            <div class="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-secondary-container/30 transition-all group scroll-reveal">
                <div class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                    <span class="material-symbols-outlined text-secondary-container">directions_boat</span>
                </div>
                <h3 class="text-xl font-bold mb-4 text-primary">
                    {{ $t('compliance.compliance.cards.vessel.title') }}
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed mb-4">
                    {{ $t('compliance.compliance.cards.vessel.desc') }}
                </p>
                <div class="p-4 bg-red-50 border border-red-200 rounded-xl mt-6">
                    <p class="text-xs text-red-700 leading-relaxed flex gap-3 font-medium">
                        <span class="material-symbols-outlined text-red-500 text-lg">warning</span>
                        {{ $t('compliance.compliance.cards.vessel.warning') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>