import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type {
  LeadershipMember,
  LeadershipMemberSource
} from '~/types/leadership'

const presidentSource: LeadershipMemberSource = {
  id: 'pres_1',
  translationKey: 'president',
  email: 'kitisak@omegapetrotech.com',
  image: '/images/org/kitisak.jpg',
  bioCount: 5,
  expertiseKeys: [
    'corporateStrategy',
    'ppp',
    'smartCity',
    'infrastructure',
    'circularEconomy',
    'energyServices'
  ]
}

const legalSource: LeadershipMemberSource = {
  id: 'dept_legal',
  translationKey: 'legal',
  email: 'compliance@omegapetrotech.com',
  expertiseKeys: [
    'governance',
    'legalAdvisory',
    'compliance',
    'risk'
  ]
}

const ceoSource: LeadershipMemberSource = {
  id: 'ceo_bmi',
  translationKey: 'ceo',
  email: 'ceo.office@bmi.com',
  image: '/images/avatar-placeholder.png',
  expertiseKeys: [
    'leadership',
    'strategy',
    'businessDevelopment'
  ]
}

const secretariatSource: LeadershipMemberSource = {
  id: 'dept_secretariat',
  translationKey: 'secretariat',
  email: 'secretariat@omegapetrotech.com',
  expertiseKeys: ['board', 'records', 'governance']
}

const cSuiteSources: LeadershipMemberSource[] = [
  {
    id: 'cs_cro',
    translationKey: 'cro',
    email: 'stephanie@ept.com',
    image: '/images/avatar-placeholder.png',
    expertiseKeys: ['enterpriseRisk', 'governance', 'resilience']
  },
  {
    id: 'cs_cfo',
    translationKey: 'cfo',
    email: 'evgeniy@ept.com',
    image: '/images/avatar-placeholder.png',
    expertiseKeys: ['financialStrategy', 'corporateFinance', 'investment']
  },
  {
    id: 'cs_cpo',
    translationKey: 'cpo',
    email: 'grant@bmi.com',
    image: '/images/avatar-placeholder.png',
    expertiseKeys: ['sourcing', 'procurement', 'supplier']
  },
  {
    id: 'cs_cao',
    translationKey: 'cao',
    email: 'ivan@jb1.com',
    image: '/images/avatar-placeholder.png',
    expertiseKeys: ['administration', 'operations', 'support']
  },
  {
    id: 'cs_cmo',
    translationKey: 'cmo',
    email: 'serhii@jb1.com',
    image: '/images/avatar-placeholder.png',
    expertiseKeys: ['marketing', 'brand', 'communication']
  }
]

export const useLeadershipMembers = () => {
  const { t } = useI18n()
  const selectedMemberId = ref<string | null>(null)

  const translateMember = (
    source: LeadershipMemberSource
  ): LeadershipMember => {
    const baseKey = `leadership.members.${source.translationKey}`
    const bioCount = source.bioCount ?? 1

    return {
      id: source.id,
      name: t(`${baseKey}.name`),
      role: t(`${baseKey}.role`),
      displayRole: t(`${baseKey}.displayRole`),
      type: t(`${baseKey}.type`),
      firm: t(`${baseKey}.firm`),
      department: t(`${baseKey}.department`),
      email: source.email,
      image: source.image,
      bio: Array.from(
        { length: bioCount },
        (_, index) => t(`${baseKey}.bio.paragraph${index + 1}`)
      ),
      expertise: source.expertiseKeys.map((key) =>
        t(`${baseKey}.expertise.${key}`)
      )
    }
  }

  const presidentData = computed(() => translateMember(presidentSource))
  const legalDeptData = computed(() => translateMember(legalSource))
  const ceoData = computed(() => translateMember(ceoSource))
  const secretariatData = computed(() => translateMember(secretariatSource))
  const cSuiteData = computed(() => cSuiteSources.map(translateMember))

  const allMembers = computed<LeadershipMember[]>(() => [
    presidentData.value,
    legalDeptData.value,
    ceoData.value,
    secretariatData.value,
    ...cSuiteData.value
  ])

  const selectedMember = computed<LeadershipMember | null>(() => {
    if (!selectedMemberId.value) return null

    return (
      allMembers.value.find(
        (member) => member.id === selectedMemberId.value
      ) ?? null
    )
  })

  const selectMember = (member: LeadershipMember) => {
    selectedMemberId.value = member.id
  }

  const closeMember = () => {
    selectedMemberId.value = null
  }

  return {
    presidentData,
    legalDeptData,
    ceoData,
    secretariatData,
    cSuiteData,
    selectedMember,
    selectedMemberId,
    selectMember,
    closeMember
  }
}
