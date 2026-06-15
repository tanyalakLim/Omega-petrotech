<template>
  <footer
    class="bg-gradient-to-b font-ibm-thai from-[#0f213e] to-primary text-white pt-16 md:pt-24 pb-12 overflow-hidden">

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
          <h5 class="text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] th:tracking-widest mb-6 md:mb-10">
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
          <h5 class="text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] th:tracking-widest mb-6 md:mb-10">
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
          <h5 class="text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] th:tracking-widest mb-6 md:mb-10">
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
                +66 2 XXX XXXX
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div
        class="pt-8 md:pt-12 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p class="text-[9px] text-white/20 uppercase tracking-[0.3em] th:tracking-widest md:tracking-[0.5em] leading-relaxed">
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