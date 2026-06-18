<template>
    <header ref="headerEl"
        class="font-ibm-thai fixed top-0 left-0 w-full z-[60] bg-white/80 dark:bg-[#031729] backdrop-blur-md border-b border-outline-variant/30 dark:border-white/10 transition-all duration-300">

        <nav class="flex justify-between items-center h-20 px-4 max-w-7xl mx-auto">
            <NuxtLink :to="localePath('/')"
                class="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
                <!-- สามารถสลับโลโก้สำหรับ Dark mode ได้ที่นี่ (ถ้ามี) -->
                <img :src="isDark ? '/images/logo_w.png' : '/images/logo.png'" class="h-8 md:h-9 w-auto object-contain"
                    alt="Logo">
            </NuxtLink>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-6 lg:gap-10">
                <NuxtLink v-for="menu in navigationMenus" :key="menu.to" :to="localePath(menu.to)"
                    class="text-xs font-medium text-on-surface-variant dark:text-slate-300 hover:text-primary dark:hover:text-white uppercase tracking-[0.1em] transition-colors"
                    exact-active-class="!text-primary dark:!text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container">
                    {{ $t(menu.label) }}
                </NuxtLink>


                <!-- Theme & Language Options -->
                <div class="flex items-center gap-6 mr-2">
                    <!-- ปุ่มเปิด/ปิด Dark Mode -->
                    <button @click="toggleTheme"
                        class="text-on-surface-variant/50 hover:text-primary dark:text-slate-400 dark:hover:text-secondary-container transition-colors focus:outline-none flex items-center"
                        aria-label="Toggle Dark Mode">
                        <span class="material-symbols-outlined text-[20px]">
                            {{ isDark ? 'light_mode' : 'dark_mode' }}
                        </span>
                    </button>


                    <div class="flex items-center gap-3">
                        <NuxtLink :to="switchLocalePath('en')"
                            :class="locale === 'en' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/50 hover:text-primary dark:text-slate-400 dark:hover:text-white'"
                            class="text-[12px] font-bold tracking-widest transition-colors">
                            EN
                        </NuxtLink>
                        <!-- ปุ่มเปลี่ยนเป็น TH -->
                        <NuxtLink :to="switchLocalePath('th')"
                            :class="locale === 'th' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/50 hover:text-primary dark:text-slate-400 dark:hover:text-white'"
                            class="text-[12px] font-bold tracking-widest transition-colors">
                            TH
                        </NuxtLink>
                    </div>
                </div>

                <NuxtLink :to="localePath('/contact')" @click="isMobileMenuOpen = false"
                    class="bg-primary dark:bg-secondary-container text-white px-6 lg:px-8 py-3 text-xs font-bold uppercase tracking-[0.1em] hover:bg-secondary-container dark:hover:bg-primary transition-all rounded-xl whitespace-nowrap">
                    {{ $t('nav.contact_us') }}
                </NuxtLink>
            </div>

            <!-- Mobile Menu Toggles -->
            <div class="flex md:hidden items-center gap-3">
                <!-- Theme Toggle (Mobile) -->
                <button @click="toggleTheme"
                    class="flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-secondary-container dark:hover:text-secondary-container p-1.5 rounded-lg transition-colors"
                    aria-label="Toggle Dark Mode">
                    <span class="material-symbols-outlined text-[20px]">
                        {{ isDark ? 'light_mode' : 'dark_mode' }}
                    </span>
                </button>

                <!-- Language Box (Mobile) -->
                <div
                    class="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold">
                    <NuxtLink :to="switchLocalePath('en')"
                        :class="locale === 'en' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/60 dark:text-slate-400'"
                        class="transition-colors hover:text-secondary-container">
                        EN
                    </NuxtLink>

                    <span class="text-slate-300 dark:text-slate-600">|</span>

                    <NuxtLink :to="switchLocalePath('th')"
                        :class="locale === 'th' ? 'text-secondary-container font-extrabold' : 'text-on-surface-variant/60 dark:text-slate-400'"
                        class="transition-colors hover:text-secondary-container">
                        TH
                    </NuxtLink>
                </div>

                <!-- Hamburger Button -->
                <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                    class="text-primary dark:text-white focus:outline-none p-1 ml-1" aria-label="Toggle Menu">
                    <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
                </button>
            </div>
        </nav>

        <!-- Mobile Drawer Menu -->
        <Transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4">
            <div v-if="isMobileMenuOpen"
                class="md:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl z-50 overflow-y-auto flex flex-col justify-between border-t border-slate-200 dark:border-slate-800">

                <!-- Top Links Section -->
                <div class="px-8 py-10 flex flex-col gap-8">
                    <NuxtLink v-for="(menu, index) in navigationMenus" :key="menu.to" :to="localePath(menu.to)"
                        @click="isMobileMenuOpen = false"
                        class="group flex items-center justify-between text-2xl font-black text-slate-800 dark:text-white tracking-tight"
                        exact-active-class="!text-secondary-container">
                        <div class="flex items-center gap-5">
                            <span
                                class="text-sm font-bold text-slate-300 dark:text-slate-600 tracking-[0.2em] group-hover:text-secondary-container/50 transition-colors">
                                0{{ index + 1 }}
                            </span>
                            {{ $t(menu.label) }}
                        </div>
                        <span
                            class="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-secondary-container group-hover:translate-x-2 transition-all">
                            arrow_forward
                        </span>
                    </NuxtLink>
                </div>

                <!-- Bottom Action Section -->
                <div
                    class="px-8 pb-12 pt-8 bg-white dark:bg-slate-950 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none mt-auto">
                    <NuxtLink :to="localePath('/contact')" @click="isMobileMenuOpen = false"
                        class="w-full py-4 bg-slate-900 dark:bg-secondary-container text-white text-sm font-bold uppercase tracking-[0.2em] rounded-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg group hover:bg-secondary-container dark:hover:bg-primary">
                        <span class="material-symbols-outlined text-[18px] group-hover:animate-bounce">mail</span>
                        {{ $t('nav.contact_us') }}
                    </NuxtLink>

                    <div class="mt-6 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
                        <span class="text-[10px] font-bold uppercase tracking-widest">Omega Petrotech</span>
                        <span class="text-[10px] uppercase tracking-widest text-center">Global Standards &
                            Framework</span>
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
    { to: '/leadership', label: 'nav.leadership' },
    { to: '/products', label: 'nav.market_insights' },
    { to: '/compliance', label: 'nav.compliance' }
]
const { t, locale } = useI18n()
const headerEl = ref<HTMLElement | null>(null)
const isMobileMenuOpen = ref(false)

// --- ตัวแปรสำหรับ Dark Mode ---
const isDark = ref(false)

const toggleTheme = () => {
    const root = document.documentElement

    // ปิด transition ชั่วคราวเฉพาะตอนเปลี่ยนโหมด
    root.classList.add('disable-theme-transition')

    isDark.value = !isDark.value

    root.classList.toggle('dark', isDark.value)

    localStorage.setItem(
        'theme',
        isDark.value ? 'dark' : 'light'
    )

    // บังคับให้ Browser ใช้ CSS ที่ปิด transition ก่อนเปลี่ยนสี
    void root.offsetHeight

    // เปิด transition กลับ หลังจากวาดโหมดใหม่แล้ว
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            root.classList.remove('disable-theme-transition')
        })
    })
}

const handleScroll = () => {
    if (window.scrollY > 50) {
        // อัปเดตคลาสพื้นหลังเมื่อเลื่อนจอให้รองรับ Dark Mode ด้วย
        headerEl.value?.classList.add('bg-white/95', 'dark:bg-slate-900/95', 'shadow-sm')
        headerEl.value?.classList.remove('bg-white/80', 'dark:bg-slate-900/80')
    } else {
        headerEl.value?.classList.remove('bg-white/95', 'dark:bg-slate-900/95', 'shadow-sm')
        headerEl.value?.classList.add('bg-white/80', 'dark:bg-slate-900/80')
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // ตรวจสอบค่า Theme จาก Local Storage หรือการตั้งค่าของระบบเมื่อโหลดหน้าครั้งแรก
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    } else {
        isDark.value = false
        document.documentElement.classList.remove('dark')
    }
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