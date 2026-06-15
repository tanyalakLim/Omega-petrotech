<template>
    <div class="scroll-reveal mb-24">
        <div class="mb-12">
            <h2 class="text-3xl font-bold mb-4 flex items-center gap-4 text-primary scroll-reveal">
                <span class="material-symbols-outlined text-secondary-container text-4xl">route</span>
                {{ $t('products.logistics.title') }}
            </h2>
            <p class="text-slate-600 text-lg leading-relaxed max-w-4xl scroll-reveal delay-150">
                {{ $t('products.logistics.desc') }}
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
            <div class="lg:col-span-2 bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 relative overflow-hidden group">
                <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl z-0 transition-transform duration-700 group-hover:scale-125"></div>
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950/50 to-transparent z-0"></div>

                <div class="relative z-10 flex flex-col h-full">
                    <div class="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-blue-300 group-hover:-rotate-3 transition-transform duration-300">
                        <span class="material-symbols-outlined text-3xl">handshake</span>
                    </div>

                    <span class="text-slate-400 font-bold tracking-[0.2em] th:tracking-widest uppercase text-[10px] mb-3 block">
                        {{ $t('products.logistics.partners.label') }}
                    </span>
                    <h3 class="text-[28px] font-black mb-4 text-white tracking-tight">
                        {{ $t('products.logistics.partners.title') }}
                    </h3>
                    <p class="text-slate-300 font-light text-[15px] leading-relaxed mb-10">
                        {{ $t('products.logistics.partners.desc') }}
                    </p>

                    <div class="mt-auto p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300">
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-blue-400 text-lg mt-0.5">info</span>
                            <p class="text-slate-200 text-xs leading-relaxed">
                                {{ $t('products.logistics.partners.note') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm scroll-reveal delay-300">
                <span class="text-secondary-container font-bold tracking-[0.2em] th:tracking-widest uppercase text-[10px] mb-3 block">
                    {{ $t('products.logistics.models.label') }}
                </span>

                <h3 class="text-[24px] font-bold mb-6 text-primary">
                    {{ $t('products.logistics.models.title') }}
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div v-for="model in [
                        { key: 'offshore', icon: 'sailing' },
                        { key: 'transit', icon: 'local_shipping' }
                    ]" :key="model.key" class="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div class="mb-4 text-secondary-container">
                            <span class="material-symbols-outlined text-3xl">{{ model.icon }}</span>
                        </div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-[10px] font-ibm-thai font-black text-secondary-container bg-secondary-container/10 px-3 py-1 rounded-md tracking-widest uppercase">
                                {{ $t(`products.logistics.models.${model.key}.time`) }}
                            </div>
                        </div>
                        <h4 class="font-bold mb-2 text-slate-900">
                            {{ $t(`products.logistics.models.${model.key}.name`) }}
                        </h4>
                        <p class="text-slate-600 text-xs leading-relaxed">
                            {{ $t(`products.logistics.models.${model.key}.desc`) }}
                        </p>
                    </div>
                </div>

                <p class="text-slate-500 text-xs italic mt-6 text-center">
                    {{ $t('products.logistics.models.footer') }}
                </p>
            </div>
        </div>
    </div>
</template>