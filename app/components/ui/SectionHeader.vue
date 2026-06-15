<template>
  <div class="max-w-3xl mx-auto text-center space-y-6 mb-16">
    <UiBaseTag v-if="tag" :text="tag" />

    <component 
      :is="as" 
      class="text-3xl font-ibm-thai leading-[1.4] md:text-5xl font-extrabold tracking-tight scroll-reveal"
      :class="as === 'h1' ? 'font-black text-slate-950' : 'text-primary'"
    >
      <template v-for="(part, index) in formattedTitle" :key="index">
        <br v-if="index > 0" class="hidden sm:inline" />
        
        <span :class="index > 0 ? 'block sm:inline text-primary/80 sm:pt-0 lg:pt-2' : ''">
          {{ part }}
        </span>
      </template>
    </component>

    <p v-if="desc" class="text-base md:text-lg text-slate-600 leading-relaxed font-light mx-auto">
      {{ desc }}
    </p>
    
    <div v-else class="w-20 h-1 bg-gradient-to-r from-transparent via-secondary-container to-transparent mx-auto rounded-full mb-12"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// กำหนด Props รองรับ Data Type ที่ยืดหยุ่น
const props = withDefaults(defineProps<{
  tag?: string
  title: string | string[] // รองรับทั้งแบบ String เดี่ยว หรือ Array ['Part1', 'Part2', 'Part3']
  desc?: string            // ตัวเลือกเสริม (Optional)
  as?: 'h1' | 'h2'         // กำหนดประเภทแท็ก (เริ่มต้นเป็น h2)
}>(), {
  as: 'h2'
})

// ตัวแปลงข้อมูล (Computed): เปลี่ยน title ให้เป็น Array เสมอเพื่อให้วนลูปแสดงผลตามจำนวน Part ได้
const formattedTitle = computed(() => {
  return Array.isArray(props.title) ? props.title : [props.title]
})
</script>