<template>
  <!-- Desktop -->
  <Transition name="profile-drawer">
    <div
      v-if="member"
      class="fixed inset-x-0 bottom-0 top-[72px] z-[55] hidden xl:block md:top-[80px]"
    >
      <button
        type="button"
        :aria-label="t('leadership.profile.close')"
        class="absolute inset-0 cursor-default bg-slate-950/15 backdrop-blur-[2px]
          dark:bg-slate-950/45"
        @click="$emit('close')"
      ></button>

      <div
        class="drawer-panel absolute bottom-5 right-5 top-5 w-[460px] overflow-hidden
          rounded-[30px] shadow-[0_40px_120px_rgba(15,23,42,0.25)]"
      >
        <LeadershipProfileCard :member="member" @close="$emit('close')" />
      </div>
    </div>
  </Transition>

  <!-- Mobile / Tablet -->
  <Transition name="mobile-profile">
    <div
      v-if="member"
      class="fixed inset-x-0 bottom-0 top-[72px] z-[55] flex items-end
        bg-slate-950/35 p-3 backdrop-blur-sm xl:hidden md:top-[80px]"
      @click.self="$emit('close')"
    >
      <div class="mobile-sheet max-h-[88vh] w-full overflow-hidden rounded-[28px] shadow-2xl">
        <LeadershipProfileCard mobile :member="member" @close="$emit('close')" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LeadershipProfileCard from './ProfileCard.vue'
import type { LeadershipMember } from '~/types/leadership'

const { t } = useI18n()

defineProps<{
  member: LeadershipMember | null
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.profile-drawer-enter-active,
.profile-drawer-leave-active {
  transition: opacity 350ms ease, backdrop-filter 350ms ease;
}

.profile-drawer-leave-active {
  transition-duration: 250ms;
}

.drawer-panel {
  transition:
    transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 400ms ease,
    filter 400ms ease;
}

.profile-drawer-enter-from,
.profile-drawer-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
}

.profile-drawer-enter-from .drawer-panel,
.profile-drawer-leave-to .drawer-panel {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(80px) scale(0.97);
}

.profile-drawer-enter-to .drawer-panel,
.profile-drawer-leave-from .drawer-panel {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0) scale(1);
}

.mobile-profile-enter-active,
.mobile-profile-leave-active {
  transition: opacity 350ms ease, backdrop-filter 350ms ease;
}

.mobile-profile-leave-active {
  transition-duration: 250ms;
}

.mobile-sheet {
  transition:
    transform 550ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 350ms ease;
}

.mobile-profile-enter-from,
.mobile-profile-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
}

.mobile-profile-enter-from .mobile-sheet,
.mobile-profile-leave-to .mobile-sheet {
  opacity: 0;
  transform: translateY(80px) scale(0.98);
}

.mobile-profile-enter-to .mobile-sheet,
.mobile-profile-leave-from .mobile-sheet {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .profile-drawer-enter-active,
  .profile-drawer-leave-active,
  .drawer-panel,
  .mobile-profile-enter-active,
  .mobile-profile-leave-active,
  .mobile-sheet {
    transition-duration: 0.01ms !important;
  }
}
</style>
