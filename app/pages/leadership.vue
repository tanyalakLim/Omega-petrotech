<template>
  <section
    class="technical-grid relative min-h-screen overflow-hidden bg-slate-100
      pb-20 pt-[120px] font-ibm-thai text-slate-900
      dark:bg-slate-950 dark:text-white md:pb-28 md:pt-[160px]"
  >
    <UiBackgroundEffects />

    <div class="relative z-10 mx-auto w-full max-w-[1600px] px-4 md:px-6 xl:px-8">
      <UiSectionHeader
        :tag="t('leadership.tag')"
        :title="[
          t('leadership.title.part1'),
          t('leadership.title.part2')
        ]"
      />

      <LeadershipOrgChart
        :president="presidentData"
        :legal="legalDeptData"
        :ceo="ceoData"
        :secretariat="secretariatData"
        :c-suite="cSuiteData"
        :selected-member-id="selectedMemberId"
        @select="selectMember"
      />
    </div>

    <LeadershipProfileDrawer
      :member="selectedMember"
      @close="closeMember"
    />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useLeadershipMembers } from '../composables/useLeadershipMembers'
import LeadershipOrgChart from '../components/leadership/OrgChart.vue'
import LeadershipProfileDrawer from '../components/leadership/ProfileDrawer.vue'

useScrollReveal()

const { t } = useI18n()

const {
  presidentData,
  legalDeptData,
  ceoData,
  secretariatData,
  cSuiteData,
  selectedMember,
  selectedMemberId,
  selectMember,
  closeMember
} = useLeadershipMembers()
</script>
