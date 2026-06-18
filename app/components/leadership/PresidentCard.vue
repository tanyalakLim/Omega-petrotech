<template>
  <button
    type="button"
    class="president-card"
    :class="selected && 'president-card-selected'"
    @click="$emit('select', member)"
  >
    <div class="president-card-glow" aria-hidden="true"></div>

    <div class="president-avatar-wrapper">
      <div class="president-avatar-ring">
        <img
          :src="member.image || '/images/avatar-placeholder.png'"
          :alt="member.name"
          class="president-avatar"
        >
      </div>

      <!-- <span class="president-status-dot"></span> -->
    </div>

    <span class="president-card-dot" aria-hidden="true">
      <span class="h-1 w-1 rounded-full bg-current"></span>
      <span class="h-1 w-1 rounded-full bg-current"></span>
      <span class="h-1 w-1 rounded-full bg-current"></span>
    </span>

    <div class="president-card-content">
      <span class="president-role-badge">
        {{ member.displayRole }}
      </span>

      <h2 class="president-name">
        {{ member.name }}
      </h2>

      <p class="president-department">
        {{ member.department }}
      </p>

      <div class="president-company">
        <span class="material-symbols-outlined text-[14px]">
          corporate_fare
        </span>

        {{ member.firm }}
      </div>
    </div>

    <div class="president-card-accent" aria-hidden="true"></div>
  </button>
</template>

<script setup lang="ts">
import type { LeadershipMember } from '~/types/leadership'

defineProps<{
  member: LeadershipMember
  selected?: boolean
}>()

defineEmits<{
  select: [member: LeadershipMember]
}>()
</script>

<style scoped>
.president-card {
  @apply relative min-h-[240px] w-[380px] overflow-visible rounded-[24px]
    border border-blue-100 bg-white text-center
    transition-all duration-300 ease-out
    hover:border-blue-300
    focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100
    dark:border-blue-500/20 dark:bg-slate-900;

  box-shadow:
    0 20px 55px rgba(15, 23, 42, 0.1),
    0 4px 15px rgba(37, 99, 235, 0.06);
}

.president-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 28px 70px rgba(15, 23, 42, 0.14),
    0 10px 30px rgba(37, 99, 235, 0.13);
}

.president-card-selected {
  @apply border-blue-500 ring-4 ring-blue-500/10
    dark:border-blue-400 dark:ring-blue-500/20;

  transform: translateY(-6px);
  box-shadow:
    0 30px 75px rgba(37, 99, 235, 0.18),
    0 10px 30px rgba(37, 99, 235, 0.12);
}

.president-card-glow {
  @apply pointer-events-none absolute inset-0 overflow-hidden rounded-[24px];
}

.president-card-glow::before {
  position: absolute;
  top: -110px;
  left: 50%;
  width: 280px;
  height: 220px;
  content: '';
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.2) 0%,
    rgba(59, 130, 246, 0.06) 45%,
    transparent 72%
  );
}

.president-avatar-wrapper {
  @apply absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2;
}

.president-avatar-ring {
  @apply flex h-[132px] w-[132px] items-center justify-center rounded-full
    border border-blue-100 bg-white p-[6px] transition-all duration-500
    dark:border-blue-500/30 dark:bg-slate-900;

  box-shadow:
    0 18px 45px rgba(15, 23, 42, 0.18),
    0 0 0 8px rgba(59, 130, 246, 0.06);
}

.president-card:hover .president-avatar-ring {
  transform: translateY(-5px) scale(1.035);
  box-shadow:
    0 25px 55px rgba(15, 23, 42, 0.2),
    0 0 0 10px rgba(59, 130, 246, 0.09);
}

.president-avatar {
  @apply h-full w-full rounded-full bg-slate-100 object-cover dark:bg-slate-800;
}

.president-status-dot {
  @apply absolute bottom-[7px] right-[7px] h-5 w-5 rounded-full
    border-[4px] border-white bg-emerald-500 dark:border-slate-900;

  box-shadow: 0 3px 8px rgba(16, 185, 129, 0.35);
}

.president-card-dot {
  @apply absolute right-5 top-5 flex items-center gap-1 text-slate-600
    transition-colors duration-300 dark:text-slate-300;
}

.president-card:hover .president-card-dot,
.president-card-selected .president-card-dot {
  @apply text-blue-600 dark:text-blue-400;
}

.president-card-content {
  @apply relative z-10 flex h-full flex-col items-center px-7 pb-7 pt-[88px];
}

.president-role-badge {
  @apply inline-flex items-center justify-center rounded-full border border-blue-100
    bg-blue-50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]
    text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300;
}

.president-name {
  @apply mt-3 max-w-full text-[24px] font-bold leading-tight tracking-tight
    text-slate-950 dark:text-white;
}

.president-department {
  @apply mt-1 line-clamp-2 min-h-[40px] text-[12px] leading-[18px]
    text-slate-400 dark:text-slate-400;
}

.president-company {
  @apply mt-auto inline-flex items-center gap-1.5 text-[11px] font-semibold
    text-slate-500 dark:text-slate-300;
}

.president-card-accent {
  @apply absolute bottom-0 left-1/2 h-[3px] w-24 -translate-x-1/2 rounded-t-full;

  background: linear-gradient(
    90deg,
    rgba(59, 130, 246, 0),
    rgba(59, 130, 246, 1),
    rgba(6, 182, 212, 1),
    rgba(6, 182, 212, 0)
  );

  transition: width 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

.president-card:hover .president-card-accent,
.president-card-selected .president-card-accent {
  @apply w-44;
}

@media (max-width: 767px) {
  .president-card {
    width: 340px;
    min-height: 228px;
  }

  .president-avatar-ring {
    width: 118px;
    height: 118px;
  }

  .president-name {
    font-size: 21px;
  }
}
</style>
