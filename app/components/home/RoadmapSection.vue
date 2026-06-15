<!-- components/home/RoadmapSection.vue -->
<template>
  <section class="py-20 md:py-28 bg-gradient-to-b from-[#060b13] to-primary text-white overflow-hidden relative">
    <!-- แสง Background เรืองแสงแบบนุ่มนวล (Ambient Light) -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ff8928_1px,transparent_1px)] [background-size:20px_20px]"></div>

    <div class="max-w-container-max mx-auto px-4 xl:px-margin-desktop relative z-10">
      
      <!-- ส่วนหัวข้อกลางเซกชัน (ปรับฟอนต์และช่องไฟให้หรูหราขึ้น) -->
      <div class="text-center max-w-3xl mx-auto mb-20 md:mb-28 scroll-reveal">
        <span class="text-[11px] font-bold text-secondary-container uppercase tracking-[0.2em] th:tracking-widest mb-4 block animate-pulse">
          {{ $t('home.roadmap.tag') }}
        </span>
        <h2 class="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 tracking-tight leading-normal py-2">
        {{ $t('home.roadmap.title') }}
        </h2>
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span class="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span>
          <p class="text-white/70 text-sm md:text-sm font-light tracking-wide">{{ $t('home.roadmap.status') }}</p>
        </div>
      </div>
      
      <!-- ดีไซน์ Timeline แบบใหม่: เล่นเส้นเชื่อมต่อแบบ Dynamic -->
      <div class="relative max-w-6xl mx-auto mb-20">
        
        <!-- เส้นเชื่อมไทม์ไลน์เดสก์ท็อป (Glow Line) -->
        <div class="absolute top-[38px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-500/20 via-secondary-container to-orange-500/20 hidden lg:block"></div>
        
        <!-- Grid การ์ดเฟส -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative">
          
          <div 
            v-for="(phase, index) in phases" 
            :key="phase.id"
            class="relative group scroll-reveal"
            :style="{ 'transition-delay': phase.delay }"
          >
            <!-- จุดตัด Node บนเส้นไทม์ไลน์ -->
            <div class="hidden lg:flex absolute -top-[11px] left-1/2 -translate-x-1/2 z-20 items-center justify-center">
              <div class="w-6 h-6 rounded-full bg-[#060b13] border-2 border-white/20 flex items-center justify-center group-hover:border-secondary-container transition-all duration-500 group-hover:scale-110">
                <div class="w-2 h-2 rounded-full bg-white/40 group-hover:bg-secondary-container transition-colors"></div>
              </div>
            </div>

            <!-- ตัวการ์ดดีไซน์ใหม่สไตล์ไร้ขอบพรีเมียม (Glassmorphic Card) -->
            <div class="h-full bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] p-8 md:p-10 rounded-2xl backdrop-blur-md transition-all duration-500 group-hover:translate-y-[-8px] group-hover:bg-white/[0.08] group-hover:border-white/[0.15] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              
              <!-- ลำดับเฟสและไอคอน -->
              <div class="flex items-center justify-between mb-6">
                <div class="text-[10px] font-ibm-thai font-black text-secondary-container bg-secondary-container/10 px-3 py-1 rounded-md tracking-widest uppercase">
                  {{ $t(`home.roadmap.p${phase.id}_date`) }}
                </div>
                <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary-container group-hover:border-secondary-container text-white/70 group-hover:text-white transition-all duration-500 shadow-inner">
                  <span class="material-symbols-outlined text-lg">{{ phase.icon }}</span>
                </div>
              </div>

              <!-- หัวข้อหลักและคำโปรยย่อย -->
              <h4 class="text-xl font-bold font-ibm-thai tracking-tight text-white group-hover:text-secondary-container transition-colors duration-300">
                {{ $t(`home.roadmap.p${phase.id}_title`) }}
              </h4>
              <p class="text-xs text-white/40 font-light tracking-wide uppercase mt-1.5 mb-6 border-b border-white/5 pb-4">
                {{ $t(`home.roadmap.p${phase.id}_subtitle`) }}
              </p>

              <!-- รายการ Bullet รายละเอียด -->
              <ul class="space-y-4 text-sm font-light text-white/60">
                <li 
                  v-for="bulletIndex in phase.bulletsCount" 
                  :key="bulletIndex"
                  class="flex items-start gap-3 group/item"
                >
                  <span class="material-symbols-outlined text-secondary-container/70 text-xs shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform">
                    arrow_forward_ios
                  </span>
                  <span class="leading-relaxed group-hover/item:text-white transition-colors duration-300">
                    {{ $t(`home.roadmap.p${phase.id}_bullet${bulletIndex}`) }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <!-- ส่วนโครงสร้างฐานรากขับเคลื่อน (Strategic Enablers) ปรับให้เป็นระเบียบ เรียบหรูดูแพง -->
      <div class="max-w-5xl mx-auto pt-12 border-t border-white/[0.08] scroll-reveal" style="transition-delay: 400ms;">
        <p class="text-center text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-semibold">
          Core Foundation Platforms
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- กล่องที่ 1: Trade Finance -->
          <div class="relative overflow-hidden p-6 rounded-xl bg-gradient-to-r from-[#0a1424] to-[#0e1d33] border border-blue-500/10 flex gap-5 items-center group hover:border-blue-500/30 transition-all duration-300 shadow-2xl">
            <div class="absolute -right-6 -bottom-6 text-blue-500/[0.02] text-8xl font-black select-none pointer-events-none">
              USD
            </div>
            <div class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
              <span class="material-symbols-outlined">account_balance</span>
            </div>
            <div>
              <h5 class="text-sm font-bold text-white tracking-wide uppercase font-ibm-thai">
                {{ $t('home.roadmap.enabler1_title') }}
              </h5>
              <p class="text-sm text-white/40 font-light mt-1 leading-relaxed">
                {{ $t('home.roadmap.enabler1_desc') }}
              </p>
            </div>
          </div>

          <!-- กล่องที่ 2: Risk & Legal Compliance -->
          <div class="relative overflow-hidden p-6 rounded-xl bg-gradient-to-r from-[#14140f] to-[#1f1e16] border border-orange-500/10 flex gap-5 items-center group hover:border-orange-500/30 transition-all duration-300 shadow-2xl">
            <div class="absolute -right-6 -bottom-6 text-orange-500/[0.02] text-8xl font-black select-none pointer-events-none">
              RISK
            </div>
            <div class="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 shrink-0 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              <span class="material-symbols-outlined">gavel</span>
            </div>
            <div>
              <h5 class="text-sm font-bold text-white tracking-wide uppercase font-ibm-thai">
                {{ $t('home.roadmap.enabler2_title') }}
              </h5>
              <p class="text-sm text-white/40 font-light mt-1 leading-relaxed">
                {{ $t('home.roadmap.enabler2_desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// ปรับเปลี่ยนลิสต์ไอคอนและระยะดีเลย์แอนิเมชันให้สอดคล้องกันอย่างลงตัว
const phases = [
  { id: 0, icon: 'inventory', delay: '0ms', bulletsCount: 4 },
  { id: 1, icon: 'verified', delay: '150ms', bulletsCount: 3 },
  { id: 2, icon: 'local_shipping', delay: '300ms', bulletsCount: 4 }
]
</script>