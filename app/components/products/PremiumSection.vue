<template>
    <div class="mb-24 mt-10">
        <!-- Header -->
        <UiContentHeader icon="workspace_premium" :title=" $t('products.premium.title')"
            :desc="$t('products.premium.desc')" />

        <!-- Product Cards -->
        <div class="scroll-reveal mb-24">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <article v-for="item in energyProducts" :key="item.key" class="premium-product-card group relative cursor-pointer
                 overflow-hidden rounded-2xl border
                 border-slate-300/70 bg-[#fbfbfbde]
                 transition-all duration-500
                 hover:border-secondary-container/50
                 dark:border-slate-700/60
                 dark:bg-[#0b1220]
                 dark:hover:border-orange-400/30
                 dark:hover:bg-[#0e1829]">
                    <!-- Image -->
                    <div class="relative h-56 overflow-hidden">
                        <img :src="item.image" :alt="$t(`products.premium.${item.key}.name`)" class="h-full w-full object-cover
                     transition-all duration-700
                     group-hover:scale-105
                     dark:brightness-[0.78]
                     dark:contrast-110
                     dark:saturate-[0.88]">


                    </div>

                    <!-- Content -->
                    <div class="relative p-8">
                        <!-- Floating Icon -->
                        <div class="absolute -top-6 right-6 flex h-12 w-12 scale-0
                     items-center justify-center rounded-full bg-white
                     text-secondary-container shadow-md
                     transition-all duration-300
                     group-hover:scale-100
                     dark:border dark:border-orange-400/20
                     dark:bg-[#111c30]
                     dark:text-orange-400
                     dark:shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
                            <span class="material-symbols-outlined text-2xl">
                                {{ item.icon }}
                            </span>
                        </div>

                        <!-- Dark Top Highlight -->
                        <div class="pointer-events-none absolute inset-x-8 top-0 hidden h-px
                     bg-gradient-to-r from-transparent
                     via-blue-400/20 to-transparent dark:block" aria-hidden="true"></div>

                        <h3 class="mb-3 text-xl font-bold text-primary
                     transition-colors duration-300
                     group-hover:text-secondary-container
                     dark:text-slate-50
                     dark:group-hover:text-orange-400">
                            {{ $t(`products.premium.${item.key}.name`) }}
                        </h3>

                        <p class="text-sm leading-relaxed text-slate-600
                     transition-colors duration-300
                     dark:text-slate-400
                     dark:group-hover:text-slate-300">
                            {{ $t(`products.premium.${item.key}.desc`) }}
                        </p>

                        
                    </div><!-- Bottom Accent -->
                        <div class="pointer-events-none absolute bottom-0 left-8
                     h-[2px] w-0 rounded-full
                     bg-gradient-to-r from-secondary-container to-orange-400
                     transition-all duration-500 group-hover:w-20" aria-hidden="true"></div>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const energyProducts = [
    {
        key: 'diesel',
        image: '/images/diesel-product.jpg',
        icon: 'local_gas_station'
    },
    {
        key: 'lng',
        image: '/images/lng-product.jpg',
        icon: 'oil_barrel'
    },
    {
        key: 'renewable',
        image: '/images/renewable-product.jpg',
        icon: 'wind_power'
    }
]
</script>
<style scoped>
.premium-product-card {
    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.025);
}

.premium-product-card:hover {
    transform: translateY(-6px);
    box-shadow:
        0 20px 45px -16px rgba(15, 23, 42, 0.16),
        0 0 24px -14px rgba(255, 137, 40, 0.14);
}

.dark .premium-product-card {
    box-shadow:
        0 15px 35px -18px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.dark .premium-product-card:hover {
    box-shadow:
        0 25px 55px -18px rgba(0, 0, 0, 0.65),
        0 0 28px -14px rgba(249, 115, 22, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

@media (prefers-reduced-motion: reduce) {

    .premium-product-card,
    .premium-product-card * {
        transition-duration: 0.01ms !important;
    }
}
</style>
