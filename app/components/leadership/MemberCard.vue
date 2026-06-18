<template>
  <button
    type="button"
    class="org-card"
    :class="[
      compact && 'org-card-small',
      selected && 'org-card-selected'
    ]"
    @click="$emit('select', member)"
  >
    <img
      v-if="member.image"
      :src="member.image"
      :alt="member.name"
      class="org-avatar"
      :class="compact && 'org-avatar-small'"
    >

    <div
      v-else
      class="org-avatar org-avatar-icon"
      :class="compact && 'org-avatar-small'"
    >
      <span class="material-symbols-outlined text-[25px]">
        {{ icon || 'corporate_fare' }}
      </span>
    </div>

    <span class="org-card-dot" aria-hidden="true">
      <span class="h-1 w-1 rounded-full bg-current"></span>
      <span class="h-1 w-1 rounded-full bg-current"></span>
      <span class="h-1 w-1 rounded-full bg-current"></span>
    </span>

    <div
      class="org-card-content"
      :class="compact && 'org-card-content-small'"
    >
      <h2
        class="org-card-name"
        :class="compact && 'org-card-name-small'"
      >
        {{ member.name }}
      </h2>

      <p class="org-card-role">
        {{ member.displayRole }}
      </p>

      <span
        class="org-card-company"
        :class="member.id === 'cs_cpo' && 'org-card-company-contractor'"
      >
        {{ member.firm }}
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { LeadershipMember } from '~/types/leadership'

defineProps<{
  member: LeadershipMember
  selected?: boolean
  compact?: boolean
  icon?: string
}>()

defineEmits<{
  select: [member: LeadershipMember]
}>()
</script>

<style scoped>
.org-card {
  @apply relative min-h-[148px] w-[290px] overflow-visible rounded-[16px]
    border border-slate-200 bg-white text-left
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:border-blue-300
    focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100
    dark:border-slate-700 dark:bg-slate-900
    dark:hover:border-blue-500/60 dark:focus-visible:ring-blue-500/20;

  box-shadow: 0 3px 12px rgba(15, 23, 42, 0.035);
}

.org-card:hover {
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.1);
}

.org-card-small {
  @apply min-h-[156px] w-full;
}

.org-card-selected {
  @apply -translate-y-1 border-blue-500 ring-4 ring-blue-500/10
    dark:border-blue-400 dark:ring-blue-500/20;

  box-shadow: 0 18px 45px rgba(37, 99, 235, 0.15);
}

.org-card-selected:hover {
  box-shadow: 0 22px 52px rgba(37, 99, 235, 0.2);
}

.org-avatar {
  @apply absolute -top-8 left-6 h-16 w-16 rounded-full
    border-[4px] border-white bg-slate-100 object-cover
    transition-all duration-300
    dark:border-slate-900 dark:bg-slate-800;

  box-shadow: 0 5px 15px rgba(15, 23, 42, 0.1);
}

.org-card:hover .org-avatar {
  @apply -translate-y-1;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.16);
}

.org-avatar-small {
  @apply h-14 w-14;
}

.org-avatar-icon {
  @apply flex items-center justify-center bg-slate-100 text-slate-500
    dark:bg-slate-800 dark:text-slate-300;
}

.org-card-dot {
  @apply absolute right-5 top-4 flex items-center gap-1
    text-slate-600 transition-colors duration-300
    dark:text-slate-300;
}

.org-card:hover .org-card-dot,
.org-card-selected .org-card-dot {
  @apply text-blue-600 dark:text-blue-400;
}

.org-card-content {
  @apply flex h-full flex-col justify-end px-6 pb-5 pt-12;
}

.org-card-content-small {
  @apply px-5 pb-4 pt-11;
}

.org-card-name {
  @apply line-clamp-2 text-[18px] font-semibold leading-snug tracking-tight
    text-slate-950 dark:text-white;
}

.org-card-name-small {
  @apply text-[15px] leading-snug;
}

.org-card-role {
  @apply mt-1 line-clamp-2 min-h-[36px] text-[12px] leading-[18px]
    text-slate-400 dark:text-slate-400;
}

.org-card-company {
  @apply mt-2 inline-flex w-fit rounded-full bg-blue-50 px-2.5 py-1
    text-[9px] font-bold uppercase tracking-[0.12em] text-blue-600
    dark:bg-blue-500/10 dark:text-blue-300;
}

.org-card-company-contractor {
  @apply bg-violet-50 text-violet-600
    dark:bg-violet-500/10 dark:text-violet-300;
}

@media (max-width: 767px) {
  .org-card {
    width: 280px;
    min-height: 152px;
  }
}
</style>
