export interface LeadershipMember {
  id: string
  name: string
  role: string
  displayRole: string
  type: string
  firm: string
  department: string
  email: string
  image?: string
  bio: string[]
  expertise: string[]
}

export interface LeadershipMemberSource {
  id: string
  translationKey: string
  email: string
  image?: string
  bioCount?: number
  expertiseKeys: string[]
}
