<template>
    <header ref="headerEl"
        class="font-ibm-thai fixed top-0 left-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
        <nav class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
            <NuxtLink :to="localePath('/')"
                class="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
                <img src="/images/logo.png" class="h-8 md:h-9 w-auto object-contain" alt="Logo">
            </NuxtLink>

            <div class="hidden md:flex items-center gap-6 lg:gap-10">
                <NuxtLink v-for="menu in navigationMenus" :key="menu.to" :to="localePath(menu.to)"
                    class="text-xs font-medium text-on-surface-variant hover:text-primary uppercase tracking-[0.1em] transition-colors"
                    exact-active-class="!text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container">
                    {{ $t(menu.label) }}
                </NuxtLink>
                <div class="h-4 w-[1px] bg-outline-variant mx-1 lg:mx-2"></div>

                <div class="flex items-center gap-3 mr-2">
                    <NuxtLink :to="switchLocalePath('en')"
                        :class="locale === 'en' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/50 hover:text-primary'"
                        class="text-[12px] font-bold tracking-widest transition-colors">
                        EN
                    </NuxtLink>
                    <!-- ปุ่มเปลี่ยนเป็น TH -->
                    <NuxtLink :to="switchLocalePath('th')"
                        :class="locale === 'th' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/50 hover:text-primary'"
                        class="text-[12px] font-bold tracking-widest transition-colors">
                        TH
                    </NuxtLink>
                </div>

                <NuxtLink :to="localePath('/contact')" @click="isMobileMenuOpen = false"
                    class="bg-primary text-white px-6 lg:px-8 py-3 text-xs font-bold uppercase tracking-[0.1em] hover:bg-secondary-container transition-all rounded-xl whitespace-nowrap">
                    {{ $t('nav.contact_us') }}
                </NuxtLink>
            </div>

            <div class="flex md:hidden items-center gap-4">
                <div class="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-bold">
                    <!-- ปุ่มเปลี่ยนเป็น EN -->
                    <NuxtLink :to="switchLocalePath('en')"
                        :class="locale === 'en' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/60'"
                        class="transition-colors hover:text-secondary-container">
                        EN
                    </NuxtLink>

                    <span class="text-slate-300">|</span>

                    <!-- ปุ่มเปลี่ยนเป็น TH -->
                    <NuxtLink :to="switchLocalePath('th')"
                        :class="locale === 'th' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/60'"
                        class="transition-colors hover:text-secondary-container">
                        TH
                    </NuxtLink>
                </div>

                <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-primary focus:outline-none p-1"
                    aria-label="Toggle Menu">
                    <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
                </button>
            </div>
        </nav>

        <Transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4">
            <div v-if="isMobileMenuOpen"
                class="md:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-slate-50/95 backdrop-blur-xl z-50 overflow-y-auto flex flex-col justify-between border-t border-slate-200">

                <!-- Top Links Section -->
                <div class="px-8 py-10 flex flex-col gap-8">
                    <NuxtLink v-for="(menu, index) in navigationMenus" :key="menu.to" :to="localePath(menu.to)"
                        @click="isMobileMenuOpen = false"
                        class="group flex items-center justify-between text-2xl font-black text-slate-800 tracking-tight"
                        exact-active-class="!text-secondary-container">
                        <div class="flex items-center gap-5">
                            <!-- ลำดับตัวเลข 01, 02 เพิ่มความพรีเมียมสไตล์ Editorial -->
                            <span
                                class="text-sm font-bold text-slate-300 tracking-[0.2em] group-hover:text-secondary-container/50 transition-colors">
                                0{{ index + 1 }}
                            </span>
                            {{ $t(menu.label) }}
                        </div>
                        <!-- ไอคอนลูกศรที่จะขยับเมื่อกดหรือ Hover -->
                        <span
                            class="material-symbols-outlined text-slate-300 group-hover:text-secondary-container group-hover:translate-x-2 transition-all">
                            arrow_forward
                        </span>
                    </NuxtLink>
                </div>

                <!-- Bottom Action Section (Sticky at bottom of the menu) -->
                <div class="px-8 pb-12 pt-8 bg-white shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] mt-auto">
                    <NuxtLink :to="localePath('/contact')" @click="isMobileMenuOpen = false"
                        class="w-full py-4 bg-slate-900 text-white text-sm font-bold uppercase tracking-[0.2em] rounded-2xl active:bg-secondary-container active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg group hover:bg-secondary-container">
                        <span class="material-symbols-outlined text-[18px] group-hover:animate-bounce">mail</span>
                        {{ $t('nav.contact_us') }}
                    </NuxtLink>

                    <!-- Company Mini Info -->
                    <div class="mt-6 flex flex-col items-center gap-2 text-slate-400">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500">Omega
                            Petrotech</span>
                        <span class="text-[10px] uppercase tracking-widest">Global Standards & Framework</span>
                    </div>
                </div>

            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const navigationMenus = [
    { to: '/', label: 'nav.global_home' },
    { to: '/about', label: 'nav.strategic_services' },
    { to: '/products', label: 'nav.market_insights' },
    { to: '/compliance', label: 'nav.compliance' }
]
const { t, locale, setLocale } = useI18n()
const headerEl = ref<HTMLElement | null>(null)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
    if (window.scrollY > 50) {
        headerEl.value?.classList.add('bg-white/95', 'shadow-sm')
        headerEl.value?.classList.remove('bg-white/80')
    } else {
        headerEl.value?.classList.remove('bg-white/95', 'shadow-sm')
        headerEl.value?.classList.add('bg-white/80')
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    max-height: 400px;
}

.slide-down-enter-from,
.slide-down-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>