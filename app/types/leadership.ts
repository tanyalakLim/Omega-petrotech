export type LeadershipGroupId = 'board' | 'executive' | 'advisor'

export interface LeadershipAssignment {
  groupId: LeadershipGroupId
  groupLabel: string
  role: string
}

export interface LeadershipMember {
  id: string
  name: string
  secondaryName?: string
  image?: string
  featured?: boolean
  assignments: LeadershipAssignment[]
  biography: string[]
}

export interface LeadershipGroup {
  id: LeadershipGroupId
  label: string
  title: string
  description: string
  members: LeadershipMember[]
}
