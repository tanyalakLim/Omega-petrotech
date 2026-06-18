<template>
  <article
    class="flex h-full max-h-full w-full flex-col overflow-hidden bg-white
      dark:bg-slate-900"
    :class="mobile ? 'rounded-[28px]' : 'rounded-[30px]'"
  >
    <!-- Header -->
    <div
      class="relative shrink-0 overflow-hidden bg-primary text-white"
      :class="mobile ? 'px-5 pb-6 pt-5' : 'px-7 pb-7 pt-6'"
    >
      <div class="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-blue-500/30 blur-[80px]"></div>
      <div class="absolute -bottom-28 left-8 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[80px]"></div>
      <div
        class="absolute inset-0 opacity-[0.07]
          bg-[radial-gradient(#ffffff_1px,transparent_1px)]
          [background-size:22px_22px]"
      ></div>

      <div class="relative z-10">
        <div
          class="flex items-center justify-between gap-4"
          :class="mobile ? 'mb-4' : 'mb-7'"
        >
          <div class="min-w-0">
            <p
              class="text-[10px] font-bold uppercase text-blue-300"
              :class="mobile ? 'tracking-[0.2em]' : 'tracking-[0.1em]'"
            >
              {{ t('leadership.profile.title') }}
            </p>

            <p class="mt-1 text-xs text-slate-400">
              {{ t('leadership.profile.subtitle') }}
            </p>
          </div>

          <button
            type="button"
            :aria-label="t('leadership.profile.close')"
            class="flex shrink-0 items-center justify-center rounded-full
              bg-white/10 text-white transition duration-300 hover:rotate-90
              hover:bg-white/20"
            :class="mobile ? 'h-9 w-9' : 'h-10 w-10 border border-white/10'"
            @click="$emit('close')"
          >
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div class="flex items-center" :class="mobile ? 'gap-4' : 'gap-5'">
          <img
            v-if="member.image"
            :src="member.image"
            :alt="member.name"
            class="shrink-0 border-4 border-white/10 bg-slate-800 object-cover"
            :class="mobile ? 'h-20 w-20 rounded-2xl' : 'h-24 w-24 rounded-[22px] shadow-2xl'"
          >

          <div
            v-else
            class="flex shrink-0 items-center justify-center border-4 border-white/10
              bg-white/10 text-slate-300"
            :class="mobile ? 'h-20 w-20 rounded-2xl' : 'h-24 w-24 rounded-[22px] shadow-2xl'"
          >
            <span
              class="material-symbols-outlined"
              :class="mobile ? 'text-[32px]' : 'text-[38px]'"
            >
              corporate_fare
            </span>
          </div>

          <div class="min-w-0">
            <h2
              class="font-bold leading-tight tracking-tight"
              :class="mobile ? 'text-xl' : 'text-2xl'"
            >
              {{ member.name }}
            </h2>

            <p class="mt-1.5 text-sm font-medium text-blue-300">
              {{ member.displayRole || member.role }}
            </p>

            <div class="mt-3 flex flex-wrap gap-2">
              <!-- <span class="status-badge">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                {{ t('leadership.profile.active') }}
              </span> -->

              <span class="company-badge">
                {{ member.firm }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary -->
    <div class="grid shrink-0 grid-cols-2 border-b border-slate-100 dark:border-slate-800">
      <div class="border-r border-slate-100 px-6 py-4 dark:border-slate-800">
        <p class="profile-meta-label">
          {{ t('leadership.profile.department') }}
        </p>
        <p class="profile-meta-value">{{ member.department }}</p>
      </div>

      <div class="px-6 py-4">
        <p class="profile-meta-label">
          {{ t('leadership.profile.memberType') }}
        </p>
        <p class="profile-meta-value">{{ member.type }}</p>
      </div>
    </div>

    <!-- Content -->
    <div class="profile-scrollbar flex-1 overflow-y-auto">
      <div class="space-y-8 px-7 py-7">
        <ProfileSection
          icon="person_book"
          icon-class="bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300"
          :title="t('leadership.profile.biographyTitle')"
          :subtitle="t('leadership.profile.biographySubtitle')"
        >
          <div v-if="member.bio.length" class="space-y-4">
            <p
              v-for="(paragraph, index) in member.bio"
              :key="`${member.id}-bio-${index}`"
              class="font-google-thai text-[14px] leading-6 text-slate-600 dark:text-slate-300"
            >
              {{ paragraph }}
            </p>
          </div>

          <p v-else class="empty-copy">
            {{ t('leadership.profile.biographyFallback') }}
          </p>
        </ProfileSection>

        <ProfileSection
          v-if="member.expertise.length"
          bordered
          icon="workspace_premium"
          icon-class="bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300"
          :title="t('leadership.profile.expertiseTitle')"
          :subtitle="t('leadership.profile.expertiseSubtitle')"
        >
          <div class="flex flex-wrap gap-2">
            <span
              v-for="expertise in member.expertise"
              :key="expertise"
              class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5
                text-[11px] font-semibold text-slate-600
                dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {{ expertise }}
            </span>
          </div>
        </ProfileSection>

        <ProfileSection
          bordered
          icon="contact_mail"
          icon-class="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"
          :title="t('leadership.profile.contactTitle')"
          :subtitle="t('leadership.profile.contactSubtitle')"
        >
          <a
            :href="`mailto:${member.email}`"
            class="group flex items-center gap-4 rounded-2xl border border-slate-100
              bg-slate-50 p-4 transition duration-300 hover:border-blue-200
              hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800
              dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                bg-white text-slate-400 shadow-sm transition group-hover:text-blue-600
                dark:bg-slate-900"
            >
              <span class="material-symbols-outlined text-[19px]">mail</span>
            </div>

            <div class="min-w-0">
              <p class="profile-meta-label">
                {{ t('leadership.profile.emailAddress') }}
              </p>
              <p class="mt-1 truncate text-xs font-bold text-slate-700 dark:text-slate-200">
                {{ member.email }}
              </p>
            </div>
          </a>
        </ProfileSection>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProfileSection from './ProfileSection.vue'
import type { LeadershipMember } from '~/types/leadership'

const { t } = useI18n()

defineProps<{
  member: LeadershipMember
  mobile?: boolean
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.status-badge {
  @apply inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20
    bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300;
}

.company-badge {
  @apply rounded-full border border-white/10 bg-white/10 px-3 py-1
    text-[10px] font-bold text-slate-200;
}

.profile-meta-label {
  @apply text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400;
}

.profile-meta-value {
  @apply mt-1 truncate text-[11px] font-bold text-slate-700 dark:text-slate-200;
}

.empty-copy {
  @apply rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5
    text-[13px] leading-6 text-slate-500 dark:border-slate-700
    dark:bg-slate-800/50 dark:text-slate-400;
}

.profile-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.profile-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.profile-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.profile-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: #cbd5e1;
}

.profile-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
