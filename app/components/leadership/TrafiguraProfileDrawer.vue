<template>
  <Teleport to="body">
    <Transition name="profile-drawer">
      <div
        v-if="member"
        class="fixed inset-0 z-[180] bg-slate-950/55 backdrop-blur-sm font-ibm-thai"
        role="dialog"
        aria-modal="true"
        :aria-label="t('leadership.drawer.title')"
        @click.self="$emit('close')"
      >
        <aside
          class="absolute inset-y-0 right-0 flex w-full max-w-[760px]
                 flex-col overflow-hidden bg-white
                 shadow-[-30px_0_100px_rgba(2,6,23,0.28)]
                 dark:bg-[#08101d]"
        >
          <!-- Drawer header -->
          <header
            class="flex items-center justify-between gap-4
                   border-b border-slate-200 px-5 py-4
                   dark:border-white/[0.08] sm:px-7"
          >
            <p
              class="text-[10px] font-black uppercase tracking-[0.2em]
                     text-secondary-container dark:text-orange-400"
            >
              {{ t('leadership.drawer.eyebrow') }}
            </p>

            <button
              type="button"
              class="flex h-11 w-11 items-center justify-center
                     rounded-full border border-slate-200 bg-slate-50
                     text-slate-500 transition-all duration-300
                     hover:rotate-90 hover:bg-slate-100
                     hover:text-slate-900
                     dark:border-white/10 dark:bg-white/[0.04]
                     dark:text-slate-400 dark:hover:bg-white/[0.08]
                     dark:hover:text-white"
              :aria-label="t('leadership.drawer.close')"
              @click="$emit('close')"
            >
              <span class="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>
          </header>

          <div class="drawer-scroll min-h-0 flex-1 overflow-y-auto">
            <!-- Profile intro -->
            <div
              class="grid gap-7 border-b border-slate-200 p-6
                     dark:border-white/[0.08]
                     sm:grid-cols-[190px_minmax(0,1fr)] sm:p-8"
            >
              <div
                class="mx-auto h-[190px] w-[190px] overflow-hidden
                       rounded-full border-[7px] border-white bg-slate-100
                       shadow-[0_24px_55px_-30px_rgba(15,23,42,0.45)]
                       dark:border-[#101927] dark:bg-slate-900"
              >
                <NuxtImg
                  v-if="member.image"
                  :src="member.image"
                  :alt="member.name"
                  width="560"
                  height="560"
                  quality="95"
                  class="h-full w-full object-cover object-top"
                />

                <div
                  v-else
                  class="flex h-full w-full items-center justify-center
                         bg-gradient-to-br from-slate-100 to-slate-200
                         dark:from-slate-800 dark:to-slate-900"
                >
                  <span
                    class="material-symbols-outlined text-[70px]
                           text-slate-300 dark:text-slate-600"
                  >
                    person
                  </span>
                </div>
              </div>

              <div class="self-center">
                <h2
                  class="text-3xl font-black leading-tight tracking-tight
                         text-slate-950 dark:text-white"
                >
                  {{ member.name }}
                </h2>

                <p
                  v-if="member.secondaryName"
                  class="mt-2 text-sm leading-6
                         text-slate-500 dark:text-slate-400"
                >
                  {{ member.secondaryName }}
                </p>

                <div
                  v-if="profileTitle"
                  class="mt-4 inline-flex rounded-full
                         border border-orange-200/80
                         bg-orange-50 px-3.5 py-1.5
                         text-[11px] font-black uppercase
                         tracking-[0.14em]
                         text-secondary-container
                         dark:border-orange-400/20
                         dark:bg-orange-400/[0.08]
                         dark:text-orange-300"
                >
                  {{ profileTitle }}
                </div>

                <div class="mt-6 space-y-2">
                  <p
                    v-for="assignment in safeAssignments"
                    :key="`${member.id}-${assignment.groupId}`"
                    class="border-l-2 border-secondary-container pl-3
                           text-sm font-bold leading-6
                           text-slate-700 dark:border-orange-400
                           dark:text-slate-200"
                  >
                    {{ assignment.role }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Biography -->
            <div class="p-6 sm:p-8">
              <template v-if="hasDisplayBiography">
                <p
                  class="text-[10px] font-black uppercase tracking-[0.18em]
                         text-slate-400 dark:text-slate-500"
                >
                  {{ t('leadership.drawer.biographySubtitle') }}
                </p>

                <h3
                  class="mt-2 text-2xl font-black
                         text-slate-950 dark:text-white"
                >
                  {{ t('leadership.drawer.biographyTitle') }}
                </h3>

                <div class="mt-6 space-y-5">
                  <p
                    v-for="(paragraph, index) in displayBiography"
                    :key="`${member.id}-bio-${index}`"
                    class="text-sm font-light leading-8
                           text-slate-600 dark:text-slate-300"
                  >
                    {{ paragraph }}
                  </p>
                </div>
              </template>

              <div
                v-else
                class="rounded-2xl border border-dashed border-slate-200
                       bg-slate-50 p-5
                       dark:border-white/10 dark:bg-white/[0.025]"
              >
                <p
                  class="text-[12px] font-light leading-6
                         text-slate-500 dark:text-slate-400"
                >
                  {{ t('leadership.drawer.sourceNote') }}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  watch
} from 'vue'
import { useI18n } from 'vue-i18n'
import type { LeadershipMember } from '../../types/leadership'

const { t } = useI18n()

const props = defineProps<{
  member: LeadershipMember | null
}>()

const emit = defineEmits<{
  close: []
}>()

const safeAssignments = computed(() =>
  Array.isArray(props.member?.assignments)
    ? props.member.assignments
    : []
)

const safeBiography = computed(() =>
  Array.isArray(props.member?.biography)
    ? props.member.biography
    : []
)

const normalizedMemberName = computed(() =>
  `${props.member?.name ?? ''} ${props.member?.secondaryName ?? ''}`
    .toLowerCase()
    .trim()
)

const isKitisakAramrueng = computed(() =>
  normalizedMemberName.value.includes('kitisak aramrueng')
  || normalizedMemberName.value.includes('กิติศักดิ์')
)

const profileTitle = computed(() =>
  isKitisakAramrueng.value
    ? 'President'
    : ''
)

const kitisakBiography = [
  'Mr. Kitisak Aramrueng is a distinguished business leader and strategic advisor with nearly four decades of experience spanning engineering, massive-scale urban infrastructure development, and high-level government policy. As President of Omega Petrotech, he brings a vision of sustainable growth backed by a proven track record of managing complex, multi-billion baht enterprises.',
  'Prior to joining Omega Petrotech, Mr. Aramrueng served as Chairman of the Board for Krungthep Thanakom, the enterprise arm of the Bangkok Metropolitan Administration. In this crucial role, he steered landmark national projects, including the integration and management of the BTS Green Line mass transit extensions, the development of the gold line monorail, and pioneering hazardous waste-to-energy initiatives based on a "Zero Waste" model. His leadership was instrumental in implementing Bangkok\'s underground communication cable network and introducing the nation\'s first electric passenger boat services.',
  'Mr. Aramrueng’s expertise lies at the intersection of technological innovation and corporate strategy. His career began in specialized R&D and electrical engineering, evolving into academia as a Master’s degree curriculum developer in Telecommunications at Assumption University (ABAC), and later, managing director of IT and communication consulting firms. He has served as a senior Consulting Engineer on vital national projects, including the development of the new Thai Parliament building\'s automation and ICT systems, and critical command centers for the Royal Thai Police.',
  'Currently, alongside his presidency at Omega Petrotech, Mr. Aramrueng continues to shape development policy as a Senior Advisor to Haier Energy (Thailand) and as an Advisor to the Deputy Chief of the Chonburi Provincial Administrative Organization. He is a key member of the Sub-Committee on Circular Economy Development under the House of Representatives, guiding national industrial policy toward the BCG (Bio-Circular-Green) economy model.',
  'Mr. Aramrueng holds a Bachelor of Engineering in Electrical (Communications) from Rajamangala Institute of Technology. His profound experience in forging Public-Private Partnerships (PPP), driving Smart City strategies, and building sustainable business organizations positions Omega Petrotech for exceptional leadership in the changing energy and energy services landscape.'
]

const displayBiography = computed(() =>
  isKitisakAramrueng.value
    ? kitisakBiography
    : safeBiography.value
)

const hasDisplayBiography = computed(() =>
  displayBiography.value.length > 0
)

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.member) {
    emit('close')
  }
}

watch(
  () => props.member,
  member => {
    if (!import.meta.client) return
    document.body.style.overflow = member ? 'hidden' : ''
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.profile-drawer-enter-active,
.profile-drawer-leave-active {
  transition: opacity 260ms ease;
}

.profile-drawer-enter-active aside,
.profile-drawer-leave-active aside {
  transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.profile-drawer-enter-from,
.profile-drawer-leave-to {
  opacity: 0;
}

.profile-drawer-enter-from aside,
.profile-drawer-leave-to aside {
  transform: translateX(100%);
}

.drawer-scroll {
  scrollbar-color: rgba(148, 163, 184, 0.45) transparent;
  scrollbar-width: thin;
}

@media (prefers-reduced-motion: reduce) {
  .profile-drawer-enter-active,
  .profile-drawer-leave-active,
  .profile-drawer-enter-active aside,
  .profile-drawer-leave-active aside {
    transition-duration: 0.01ms !important;
  }
}
</style>
