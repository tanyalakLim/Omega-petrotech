<template>
    <div class="mb-24 mt-10">
        <div class="mb-12">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-4 text-primary scroll-reveal">
                <span class="material-symbols-outlined text-secondary-container text-4xl">workspace_premium</span>
                {{ $t('products.premium.title') }}
            </h2>
            <p class="text-slate-600 text-lg leading-relaxed max-w-4xl scroll-reveal delay-300">
                {{ $t('products.premium.desc') }}
            </p>
        </div>
        <div class="mb-24 scroll-reveal">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="item in energyProducts" :key="item.key"
                    class="portfolio-item-card bg-[#ebf1f758] rounded-2xl border border-slate-300/70 transition-all duration-500 group cursor-pointer relative overflow-hidden hover:border-secondary-container/50">
                    <div class="h-56 overflow-hidden relative">
                        <img :src="item.image" :alt="$t(`products.premium.${item.key}.name`)"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div class="p-8 relative">
                        <div class="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-secondary-container scale-0 group-hover:scale-100 transition-transform duration-300">
                            <span class="material-symbols-outlined text-2xl">{{ item.icon }}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-primary group-hover:text-secondary-container transition-colors">
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
</template>

<script setup lang="ts">
// ย้ายข้อมูล energyProducts มาไว้เฉพาะใน Component ที่ใช้งานจริง
const energyProducts = [
    { key: 'diesel', image: '/images/diesel-product.jpg', icon: 'local_gas_station' },
    { key: 'lng', image: '/images/lng-product.jpg', icon: 'oil_barrel' },
    { key: 'renewable', image: '/images/renewable-product.jpg', icon: 'wind_power' }
]
</script>