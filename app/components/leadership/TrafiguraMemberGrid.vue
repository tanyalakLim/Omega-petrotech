<template>
  <div
    v-if="safeMembers.length"
    class="grid grid-cols-1 gap-x-8 gap-y-14
           sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12 xl:gap-y-16"
  >
    <LeadershipTrafiguraMemberCard
      v-for="member in safeMembers"
      :key="`${group.id}-${member.id}`"
      :member="member"
      :group-id="group.id"
      @select="$emit('select', $event)"
    />
  </div>

  <div
    v-else
    class="relative overflow-hidden border-y
           border-dashed border-slate-300 py-20 text-center
           dark:border-white/10"
  >
    <div
      class="pointer-events-none absolute left-1/2 top-1/2
             h-60 w-60 -translate-x-1/2 -translate-y-1/2
             rounded-full bg-orange-100/65 blur-[95px]
             dark:bg-orange-500/[0.06]"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-xl">
      <div
        class="mx-auto flex h-16 w-16 items-center justify-center
               rounded-full border border-slate-200 bg-white
               text-slate-400 shadow-lg
               dark:border-white/10 dark:bg-white/[0.04]
               dark:text-slate-500"
      >
        <span class="material-symbols-outlined text-[30px]">
          support_agent
        </span>
      </div>

      <h3 class="mt-5 text-2xl font-black text-slate-950 dark:text-white">
        {{ t('leadership.empty.advisorTitle') }}
      </h3>

      <p
        class="mt-3 text-sm font-light leading-7
               text-slate-500 dark:text-slate-400"
      >
        {{ t('leadership.empty.advisorDescription') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type {
  LeadershipGroup,
  LeadershipMember
} from '../../types/leadership'

const { t } = useI18n()

const props = defineProps<{
  group: LeadershipGroup
}>()

defineEmits<{
  select: [member: LeadershipMember]
}>()

const safeMembers = computed(() =>
  Array.isArray(props.group?.members)
    ? props.group.members
    : []
)
</script>
