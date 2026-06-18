<template>
  <footer class="relative isolate overflow-hidden
         bg-gradient-to-b from-[#0f213e] to-primary
         pb-12 pt-16 font-ibm-thai text-white
         transition-colors duration-500

         dark:bg-none
         dark:bg-gradient-to-b
         dark:from-[#0a1424]
         dark:via-[#070d18]
         dark:to-[#030711]

         md:pt-24">
    <!-- Dark Mode Background Effects -->
    <div class="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden dark:block" aria-hidden="true">
      <div class="absolute -right-52 -top-60
               h-[620px] w-[620px] rounded-full
               bg-blue-600/[0.10] blur-[160px]"></div>

      <div class="absolute -bottom-64 -left-48
               h-[560px] w-[560px] rounded-full
               bg-orange-500/[0.055] blur-[150px]"></div>

      <div class="absolute left-1/2 top-[40%]
               h-[360px] w-[850px]
               -translate-x-1/2 -translate-y-1/2
               rounded-full bg-blue-500/[0.025]
               blur-[120px]"></div>

      <div class="absolute inset-0 opacity-[0.12]
               bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)]
               [background-size:48px_48px]"></div>

      <div class="absolute inset-0
               bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,6,23,0.55)_100%)]"></div>
    </div>
    <!-- Top Divider -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-20
             h-px bg-gradient-to-r
             from-transparent via-secondary-container to-transparent
             opacity-40 dark:via-orange-400 dark:opacity-30" aria-hidden="true"></div>

    <div class="max-w-7xl mx-auto px-4">

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 lg:gap-16 mb-16 md:mb-24">

        <div class="sm:col-span-2 md:col-span-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-6 md:mb-10">
              <img src="/images/logo_w.png" class="h-[40px] w-auto object-contain" alt="Logo">
            </div>
            <p class="text-white/40 text-sm font-light leading-relaxed max-w-sm mb-8 md:mb-12">
              {{ $t('footer.desc') }}
            </p>
          </div>
          <div class="flex gap-4">
            <a class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container transition-all"
              href="https://linkedin.com" target="_blank" aria-label="Network">
              <span class="material-symbols-outlined text-lg">public</span>
            </a>
            <a class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container transition-all"
              href="mailto:contact@example.com" aria-label="Email">
              <span class="material-symbols-outlined text-lg">mail</span>
            </a>
          </div>
        </div>

        <div class="col-span-1 md:col-span-2">
          <h5
            class="text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] th:tracking-widest mb-6 md:mb-10">
            {{ $t('footer.quick_links') }}
          </h5>
          <client-only>
            <ul class="space-y-3.5">
              <li v-for="item in [
                { key: 'products', path: '/products' },
                { key: 'governance', path: '/about' },
                { key: 'compliance', path: '/compliance' },
                { key: 'roadmap', path: { path: '/', hash: '#roadmap' } },
              ]" :key="item.key">
                <NuxtLink :to="localePath(item.path)"
                  class="text-white/60 hover:text-white transition-colors text-xs font-light block py-0.5">
                  {{ $t(`footer.links.${item.key}`) }}
                </NuxtLink>
              </li>
            </ul>
          </client-only>
        </div>

        <div class="col-span-1 md:col-span-2">
          <h5
            class="text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] th:tracking-widest mb-6 md:mb-10">
            {{ $t('footer.global_presence') }}
          </h5>
          <ul class="space-y-5">
            <li>
              <span class="block text-white/30 text-[9px] font-bold uppercase mb-1">{{ $t('footer.locations.me.label')
                }}</span>
              <span class="text-xs font-light text-white/80">{{ $t('footer.locations.me.address') }}</span>
            </li>
            <li>
              <span class="block text-white/30 text-[9px] font-bold uppercase mb-1">{{ $t('footer.locations.sea.label')
                }}</span>
              <span class="text-xs font-light text-white/80">{{ $t('footer.locations.sea.address') }}</span>
            </li>
          </ul>
        </div>

        <div class="col-span-1 sm:col-span-2 md:col-span-3">
          <h5
            class="text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] th:tracking-widest mb-6 md:mb-10">
            {{ $t('footer.contact_info') }}
          </h5>
          <ul class="space-y-3.5">
            <li>
              <NuxtLink class="text-white/60 hover:text-white transition-colors text-xs font-light block py-0.5">
                {{ $t('footer.terms') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white/60 hover:text-white transition-colors text-xs font-light block py-0.5">
                {{ $t('footer.risk') }}
              </NuxtLink>
            </li>
            <li class="pt-4">
              <a href="tel:+6620000000"
                class="text-secondary-container font-bold text-sm tracking-widest block hover:underline">
                +66 2 0986100
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div
        class="pt-8 md:pt-12 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p
          class="text-[9px] text-white/20 uppercase tracking-[0.3em] th:tracking-widest md:tracking-[0.5em] leading-relaxed">
          {{ $t('footer.copyright') }}
        </p>
        <div class="flex gap-6 lg:gap-12">
          <p class="text-[9px] text-white/20 uppercase tracking-[0.2em] th:tracking-widest">{{ $t('footer.tag1') }}</p>
          <p class="text-[9px] text-white/20 uppercase tracking-[0.2em] th:tracking-widest">{{ $t('footer.tag2') }}</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>