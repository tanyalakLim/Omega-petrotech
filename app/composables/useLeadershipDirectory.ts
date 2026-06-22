import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type {
  LeadershipAssignment,
  LeadershipGroup,
  LeadershipGroupId,
  LeadershipMember
} from '../types/leadership'

interface MemberDefinition {
  id: string
  image?: string
  featured?: boolean
  groups: Partial<Record<LeadershipGroupId, string>>
}

const groupOrder: LeadershipGroupId[] = [
  'board',
  'executive',
  'advisor'
]

const memberDefinitions: MemberDefinition[] = [
  {
    id: 'kitisak',
    image: '/images/leadership/kitisak-aramrueng.jpg',
    featured: true,
    groups: {
      board: 'chairman'
    }
  },
  {
    id: 'thanate',
    image: '/images/leadership/thanate-poompo.jpg',
    groups: {
      board: 'chiefExecutiveOfficer',
      executive: 'chiefExecutiveOfficer'
    }
  },
  {
    id: 'pattama',
    image: '/images/leadership/pattama-intrakomhaeng.jpg',
    groups: {
      board: 'director',
      executive: 'chiefAdministrativeOfficer'
    }
  },
  {
    id: 'atthachai',
    image: '/images/leadership/atthachai-somklin.jpg',
    groups: {
      board: 'director',
      executive: 'chiefMarketingOfficer'
    }
  },
  {
    id: 'mark',
    image: '/images/leadership/mark-william-fuller.jpg',
    groups: {
      board: 'director',
      executive: 'chiefRiskOfficer'
    }
  },
  {
    id: 'yanisa',
    image: '/images/leadership/yanisa-thaenthong.jpg',
    groups: {
      board: 'director'
    }
  },
  {
    id: 'colin',
    image: '/images/leadership/colin-james-john-clark.jpg',
    groups: {
      executive: 'chiefFinancialOfficer'
    }
  },
  {
    id: 'ekkorn',
    image: '/images/leadership/ekkorn-yingdang.jpg',
    groups: {
      executive: 'chiefLegalComplianceOfficer'
    }
  }
]

export const useLeadershipDirectory = () => {
  const { t, te } = useI18n()

  const members = computed<LeadershipMember[]>(() =>
    memberDefinitions.map((definition) => {
      const assignments: LeadershipAssignment[] = groupOrder
        .filter((groupId) => Boolean(definition.groups[groupId]))
        .map((groupId) => ({
          groupId,
          groupLabel: t(`leadership.tabs.${groupId}`),
          role: t(`leadership.roles.${definition.groups[groupId]}`)
        }))

      const secondaryKey = `leadership.members.${definition.id}.secondaryName`

      return {
        id: definition.id,
        name: t(`leadership.members.${definition.id}.name`),
        secondaryName: te(secondaryKey) ? t(secondaryKey) : '',
        image: definition.image,
        featured: definition.featured,
        assignments
      }
    })
  )

  const groups = computed<LeadershipGroup[]>(() =>
    groupOrder.map((groupId) => ({
      id: groupId,
      label: t(`leadership.tabs.${groupId}`),
      title: t(`leadership.sections.${groupId}.title`),
      description: t(`leadership.sections.${groupId}.description`),
      members: members.value.filter((member) =>
        member.assignments.some((assignment) => assignment.groupId === groupId)
      )
    }))
  )

  return {
    groups,
    members
  }
}
