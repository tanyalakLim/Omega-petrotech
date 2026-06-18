<template>
  <div
    class="mt-10 min-h-[calc(100svh-220px)] overflow-hidden rounded-[28px]
      border border-white/70 bg-white/50 shadow-sm backdrop-blur-sm
      dark:border-white/10 dark:bg-slate-900/40 md:mt-14"
  >
    <div class="organization-scroll overflow-x-auto overflow-y-hidden">
      <div class="min-w-[1240px] px-10 pb-24 pt-20 xl:px-14">
        <!-- President -->
        <div class="relative z-20 flex justify-center pt-14">
          <LeadershipPresidentCard
            :member="president"
            :selected="selectedMemberId === president.id"
            @select="$emit('select', $event)"
          />
        </div>

        <div class="connector-vertical connector-president">
          <span class="connector-dot"></span>
        </div>

        <!-- Second level -->
        <div
          class="relative mx-auto grid w-full max-w-[1120px]
            grid-cols-[repeat(3,minmax(0,1fr))]"
        >
          <!-- Legal -->
          <div class="branch-column branch-column-left">
            <LeadershipMemberCard
              :member="legal"
              icon="gavel"
              :selected="selectedMemberId === legal.id"
              @select="$emit('select', $event)"
            />
          </div>

          <!-- CEO and C-Suite -->
          <div class="branch-column branch-column-center">
            <LeadershipMemberCard
              :member="ceo"
              :selected="selectedMemberId === ceo.id"
              @select="$emit('select', $event)"
            />

            <div class="connector-vertical h-14">
              <span class="connector-dot"></span>
            </div>

            <div class="relative w-[1120px] pt-14">
              <div class="group-label">
                {{ t('leadership.organization.cSuiteExecutives') }}
              </div>

              <div class="absolute left-[10%] right-[10%] top-0 h-px bg-slate-200 dark:bg-slate-700"></div>

              <div class="grid grid-cols-5 items-start gap-6">
                <div
                  v-for="member in cSuite"
                  :key="member.id"
                  class="relative flex justify-center pt-10"
                >
                  <div class="csuite-connector"></div>

                  <LeadershipMemberCard
                    :member="member"
                    compact
                    :selected="selectedMemberId === member.id"
                    @select="$emit('select', $event)"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Secretariat -->
          <div class="branch-column branch-column-right">
            <LeadershipMemberCard
              :member="secretariat"
              icon="edit_document"
              :selected="selectedMemberId === secretariat.id"
              @select="$emit('select', $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LeadershipMemberCard from './MemberCard.vue'
import LeadershipPresidentCard from './PresidentCard.vue'
import type { LeadershipMember } from '~/types/leadership'

const { t } = useI18n()

defineProps<{
  president: LeadershipMember
  legal: LeadershipMember
  ceo: LeadershipMember
  secretariat: LeadershipMember
  cSuite: LeadershipMember[]
  selectedMemberId?: string | null
}>()

defineEmits<{
  select: [member: LeadershipMember]
}>()
</script>

<style scoped>
.branch-column {
  @apply relative flex min-w-0 flex-col items-center pt-12;
}

.branch-column::before {
  @apply absolute top-0 h-px bg-slate-200 dark:bg-slate-700;
  content: '';
}

.branch-column::after {
  @apply absolute left-1/2 top-0 h-12 w-px -translate-x-1/2
    bg-slate-200 dark:bg-slate-700;
  content: '';
}

.branch-column-left::before {
  @apply left-1/2 right-0;
}

.branch-column-center::before {
  @apply left-0 right-0;
}

.branch-column-right::before {
  @apply left-0 right-1/2;
}

.connector-vertical {
  @apply relative mx-auto w-px bg-slate-200 dark:bg-slate-700;
}

.connector-president {
  @apply h-14;
}

.connector-dot {
  @apply absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2
    translate-y-1/2 rounded-full border-2 border-white bg-blue-500
    dark:border-slate-900;
}

.group-label {
  @apply absolute left-1/2 top-4 z-10 -translate-x-1/2 whitespace-nowrap
    rounded-full border border-slate-200 bg-white px-4 py-1.5
    text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500
    shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400;
}

.csuite-connector {
  @apply absolute left-1/2 top-[-56px] h-[96px] w-px -translate-x-1/2
    bg-slate-200 dark:bg-slate-700;
}

.organization-scroll {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.organization-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.organization-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.organization-scroll::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 999px;
  background: #cbd5e1;
  background-clip: padding-box;
}

.organization-scroll::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
  background-clip: padding-box;
}
</style>
