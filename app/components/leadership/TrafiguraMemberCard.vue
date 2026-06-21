<template>
  <button
    type="button"
    class="member group flex w-full flex-col items-center text-center
           focus-visible:outline-none"
    @click="$emit('select', member)"
  >
    <!-- Portrait -->
    <span
      class="portrait relative block h-[230px] w-[230px]
             rounded-full sm:h-[250px] sm:w-[250px]"
    >
      <span
        class="absolute inset-0 rounded-full border
               border-slate-300 bg-white p-[7px]
               shadow-[0_22px_54px_-34px_rgba(15,23,42,0.48)]
               transition-all duration-500
               group-hover:-translate-y-1
               group-hover:border-secondary-container/50
               group-hover:shadow-[0_28px_60px_-30px_rgba(255,137,40,0.28)]
               group-focus-visible:ring-2
               group-focus-visible:ring-secondary-container/45
               dark:border-white/12 dark:bg-[#0b1422]
               dark:group-hover:border-orange-400/40"
      >
        <span
          class="block h-full w-full overflow-hidden rounded-full
                 bg-slate-100 dark:bg-slate-900"
        >
          <NuxtImg
            v-if="member.image"
            :src="member.image"
            :alt="member.name"
            width="700"
            height="700"
            quality="95"
            densities="1x 2x"
            loading="lazy"
            class="h-full w-full object-cover object-top
                   transition-transform duration-700
                   group-hover:scale-[1.025]"
          />

          <span
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
          </span>
        </span>
      </span>

      <span
        class="absolute bottom-3 right-3 flex h-11 w-11 items-center
               justify-center rounded-full border-[5px] border-[#f7f7f5]
               bg-primary text-white shadow-lg
               transition-all duration-300
               group-hover:scale-110
               group-hover:bg-secondary-container
               dark:border-[#060b13] dark:bg-slate-800
               dark:group-hover:bg-orange-500"
        aria-hidden="true"
      >
        <span class="material-symbols-outlined text-[18px]">
          arrow_outward
        </span>
      </span>
    </span>

    <!-- Text -->
    <span class="mt-6 max-w-[310px]">
      <span
        v-if="activeRole"
        class="block text-[10px] font-black uppercase leading-5
               tracking-[0.15em] text-secondary-container
               dark:text-orange-400"
      >
        {{ activeRole }}
      </span>

      <span
        class="mt-2 block text-xl font-black leading-snug
               tracking-[-0.02em] text-slate-950
               transition-colors duration-300
               group-hover:text-secondary-container
               dark:text-white dark:group-hover:text-orange-400"
      >
        {{ member.name }}
      </span>

     <!--  <span
        v-if="member.secondaryName"
        class="mt-1 block text-sm leading-6
               text-slate-500 dark:text-slate-400"
      >
        {{ member.secondaryName }}
      </span> -->

      <span
        class="mx-auto mt-4 block h-px w-10
               bg-slate-300 transition-all duration-300
               group-hover:w-16 group-hover:bg-secondary-container
               dark:bg-slate-700 dark:group-hover:bg-orange-400"
        aria-hidden="true"
      ></span>

      <span
        class="mt-4 inline-flex items-center gap-1.5 text-[10px]
               font-bold uppercase tracking-[0.12em]
               text-slate-400 transition-colors duration-300
               group-hover:text-slate-700
               dark:text-slate-500 dark:group-hover:text-slate-200"
      >
        {{
          hasBiography
            ? t('leadership.readBiography')
            : t('leadership.viewProfile')
        }}

        <span
          class="material-symbols-outlined text-[15px]
                 transition-transform duration-300
                 group-hover:translate-x-1"
        >
          arrow_forward
        </span>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type {
  LeadershipGroupId,
  LeadershipMember
} from '../../types/leadership'

const { t } = useI18n()

const props = defineProps<{
  member: LeadershipMember
  groupId: LeadershipGroupId
}>()

defineEmits<{
  select: [member: LeadershipMember]
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

const activeRole = computed(() =>
  safeAssignments.value.find(
    assignment => assignment.groupId === props.groupId
  )?.role ?? ''
)

const hasBiography = computed(() => safeBiography.value.length > 0)
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .member,
  .member * {
    transition-duration: 0.01ms !important;
  }
}
</style>

