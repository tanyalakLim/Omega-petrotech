<template>
  <main class="relative min-h-screen overflow-hidden bg-[#f7f7f5]
           pb-20 pt-[118px] font-ibm-thai text-slate-900
           dark:bg-[#060b13] dark:text-white
           md:pb-28 md:pt-[158px]">
    <!-- Background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -right-52 -top-56 h-[660px] w-[660px]
               rounded-full bg-orange-200/30 blur-[155px]
               dark:bg-orange-500/[0.05]"></div>

      <div class="absolute -bottom-64 -left-56 h-[720px] w-[720px]
               rounded-full bg-blue-200/30 blur-[170px]
               dark:bg-blue-600/[0.06]"></div>

      <div class="absolute inset-0 opacity-[0.22]
               bg-[radial-gradient(rgba(148,163,184,0.38)_0.7px,transparent_0.7px)]
               [background-size:26px_26px]
               dark:opacity-[0.065]"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl
            px-6 xl:px-margin-desktop">
      <UiSectionHeader :tag="t('leadership.tag')" :title="headerTitle" :desc="activeGroupDescription" as="h1" />


      <!-- Tabs -->
      <LeadershipTrafiguraTabs v-model="activeGroupId" :groups="safeGroups" />

      <!-- Active Group -->
      <Transition name="leadership-panel" mode="out-in">
        <section :key="activeGroup.id" class="py-12 md:py-16">

          <!-- Members -->
          <LeadershipTrafiguraMemberGrid :group="activeGroup" @select="selectedMember = $event" />
        </section>
      </Transition>
    </div>

    <!-- Profile Drawer -->
    <LeadershipTrafiguraProfileDrawer :member="selectedMember" @close="selectedMember = null" />
  </main>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch
} from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useLeadershipDirectory } from '../composables/useLeadershipDirectory'
import type {
  LeadershipGroup,
  LeadershipGroupId,
  LeadershipMember
} from '../types/leadership'

useScrollReveal()

const { t, te } = useI18n()
const { groups } = useLeadershipDirectory()

const activeGroupId = ref<LeadershipGroupId>('board')
const selectedMember = ref<LeadershipMember | null>(null)

const fallbackGroup: LeadershipGroup = {
  id: 'board',
  label: '',
  title: '',
  description: '',
  members: []
}

const safeGroups = computed<LeadershipGroup[]>(() =>
  Array.isArray(groups.value)
    ? groups.value
    : []
)

const activeGroup = computed<LeadershipGroup>(() =>
  safeGroups.value.find(
    group => group.id === activeGroupId.value
  )
  ?? safeGroups.value[0]
  ?? fallbackGroup
)

const safeMembers = computed<LeadershipMember[]>(() =>
  Array.isArray(activeGroup.value.members)
    ? activeGroup.value.members
    : []
)

const activeGroupTitle = computed(() => {
  /*
   * title ใน activeGroup ถูกแปลไว้แล้วจาก useLeadershipDirectory()
   * ใช้ค่านี้เป็นหลัก และใช้ i18n key เป็น fallback
   */
  if (activeGroup.value.title) {
    return activeGroup.value.title
  }

  const key = `leadership.sections.${activeGroupId.value}.title`

  return te(key)
    ? t(key)
    : activeGroup.value.label || ''
})

const headerTitle = computed<string[]>(() => [
  activeGroupTitle.value
])

const activeGroupDescription = computed(() => {
  const key =
    `leadership.sections.${activeGroupId.value}.description`

  if (te(key)) {
    return t(key)
  }

  return activeGroup.value.description || ''
})

/*
 * ปิด Profile Drawer เมื่อสลับแท็บ
 */
watch(activeGroupId, () => {
  selectedMember.value = null
})

/*
 * ป้องกันกรณี activeGroupId ไม่มีอยู่ในข้อมูล
 * เช่น ข้อมูลยังโหลดไม่เสร็จหรือมีการเปลี่ยนกลุ่ม
 */
watch(
  safeGroups,
  currentGroups => {
    const activeStillExists = currentGroups.some(
      group => group.id === activeGroupId.value
    )

    if (!activeStillExists) {
      activeGroupId.value =
        currentGroups[0]?.id ?? 'board'
    }
  },
  {
    immediate: true
  }
)
</script>

<style scoped>
.leadership-panel-enter-active,
.leadership-panel-leave-active {
  transition:
    opacity 220ms ease,
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

.leadership-panel-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.leadership-panel-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {

  .leadership-panel-enter-active,
  .leadership-panel-leave-active {
    transition-duration: 0.01ms !important;
  }
}
</style>
