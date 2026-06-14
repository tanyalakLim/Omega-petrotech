<template>
    <div class="products-page">
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

            <div class="max-w-7xl mx-auto px-6 xl:px-margin-desktop relative z-10">
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
                            {{ $t('products.tag') }}
                        </span>
                    </div>
                    <h2
                        class="text-3xl font-ibm-thai leading-[1.4] md:text-5xl font-extrabold text-primary tracking-tight scroll-reveal">
                        {{ $t('products.title.part1') }}
                        <br class="hidden sm:inline" />
                        <div class="sm:pt-0 lg:pt-2">
                            <span class="block sm:inline text-primary/80">
                                {{ $t('products.title.part2') }}
                            </span>
                        </div>
                    </h2>

                    <div
                        class="w-20 h-1 bg-gradient-to-r from-transparent via-secondary-container to-transparent mx-auto rounded-full">
                    </div>
                </div>

                <!-- Section 1: Premium Energy Products -->
                <div class="mb-24 mt-10">
                    <div class="mb-12">
                        <h2
                            class="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-4 text-primary scroll-reveal">
                            <span
                                class="material-symbols-outlined text-secondary-container text-4xl">workspace_premium</span>
                            {{ $t('products.premium.title') }}
                        </h2>
                        <p class="text-slate-600 text-lg leading-relaxed max-w-4xl  scroll-reveal delay-300">
                            {{ $t('products.premium.desc') }}
                        </p>
                    </div>
                    <div class="mb-24 scroll-reveal">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div v-for="item in energyProducts" :key="item.key"
                                class="portfolio-item-card bg-[#ebf1f758] rounded-2xl border border-slate-300/70 transition-all duration-500 group cursor-pointer relative overflow-hidden hover:border-secondary-container/50">
                                <!-- Product Image -->
                                <div class="h-56 overflow-hidden relative">
                                    <img :src="item.image" :alt="$t(`products.premium.${item.key}.name`)"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    <!-- Premium Overlay -->
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    </div>
                                </div>
                                <!-- Product Info -->
                                <div class="p-8 relative">
                                    <!-- Floating decorative icon -->
                                    <div
                                        class="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-secondary-container scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <span class="material-symbols-outlined text-2xl">{{ item.icon }}</span>
                                    </div>
                                    <h3
                                        class="text-xl font-bold mb-3 text-primary group-hover:text-secondary-container transition-colors">
                                        {{ $t(`products.premium.${item.key}.name`) }}
                                    </h3>
                                    <p class="text-sm text-slate-600 leading-relaxed">
                                        {{ $t(`products.premium.${item.key}.desc`) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Divider -->
                <hr class="border-slate-200 mb-24" />

                <!-- Section 2: Sourcing & Logistics Model (Staggered Premium Grid) -->
                <div class="scroll-reveal mb-24">

                    <!-- Section Header -->
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

                        <!-- Left Card: Strategic Partners (Premium Dark) -->
                        <div
                            class="lg:col-span-2 bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 relative overflow-hidden group">

                            <!-- Subtle Ambient Glow -->
                            <div
                                class="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl z-0 transition-transform duration-700 group-hover:scale-125">
                            </div>
                            <div
                                class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950/50 to-transparent z-0">
                            </div>

                            <div class="relative z-10 flex flex-col h-full">
                                <!-- Refined Dark Icon -->
                                <div
                                    class="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-blue-300 group-hover:-rotate-3 transition-transform duration-300">
                                    <span class="material-symbols-outlined text-3xl">handshake</span>
                                </div>

                                <span
                                    class="text-slate-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
                                    {{ $t('products.logistics.partners.label') }}
                                </span>
                                <h3 class="text-[28px] font-black mb-4 text-white tracking-tight">
                                    {{ $t('products.logistics.partners.title') }}
                                </h3>
                                <p class="text-slate-300 font-light text-[15px] leading-relaxed mb-10">
                                    {{ $t('products.logistics.partners.desc') }}
                                </p>

                                <!-- Minimalist Dark Note Box -->
                                <div
                                    class="mt-auto p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300">
                                    <div class="flex items-start gap-3">
                                        <span class="material-symbols-outlined text-blue-400 text-lg mt-0.5">info</span>
                                        <p class="text-slate-200 text-xs leading-relaxed">
                                            {{ $t('products.logistics.partners.note') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Card: Trading Models (Matched with Future Carbon Offset Style) -->
                        <div
                            class="lg:col-span-3 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm scroll-reveal delay-300">

                            <span
                                class="text-secondary-container font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
                                {{ $t('products.logistics.models.label') }}
                            </span>

                            <h3 class="text-[24px] font-bold mb-6 text-primary">
                                {{ $t('products.logistics.models.title') }}
                            </h3>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

                                <!-- Sub-cards (Looped) -->
                                <div v-for="model in [
                                    { key: 'offshore', icon: 'sailing' },
                                    { key: 'transit', icon: 'local_shipping' }
                                ]" :key="model.key" class="bg-slate-50 p-6 rounded-2xl border border-slate-100">

                                    <div class="mb-4 text-secondary-container">
                                        <span class="material-symbols-outlined text-3xl">{{ model.icon }}</span>
                                    </div>

                                    <div class="flex items-center justify-between mb-4">
                                        <div
                                            class="text-[10px] font-ibm-thai font-black text-secondary-container bg-secondary-container/10 px-3 py-1 rounded-md tracking-widest uppercase">
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
const energyProducts = [
    { key: 'diesel', image: '/images/diesel-product.jpg', icon: 'local_gas_station' },
    { key: 'lng', image: '/images/lng-product.jpg', icon: 'oil_barrel' },
    { key: 'renewable', image: '/images/renewable-product.jpg', icon: 'wind_power' }
]
</script>