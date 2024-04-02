import { Id } from './propertyTypes'
import User from './user'

export type CompanyFunding = 'EF' | 'PS' | 'SR' | 'SA' | 'SB' | 'NF' | null

export type CompanyStage = 'ID' | 'DV' | 'PR' | 'PO' | null

export type CompanyChallenges = 'SF' | 'PD' | 'BC' | 'BS' | 'MB' | 'SO' | 'MF' | 'LR' | 'HT' | null

type Organization = {
    id: Id | null,
    userSet: Array<User>,
    updated: string,
    created: string,
    name: string,
    website: string | null,
    logo: string | null,
    identifier: string,
    industries: Array<String>,
    linkedin: string | null,
    twitter: string | null,
    facebook: string | null,
    instagram: string | null,
    tagline: string | null,
    aboutUs: string | null,
    location: string | null,
    size: string | null,
    email: string | null,
    stage: CompanyStage,
    funding: CompanyFunding,
    challenge1: CompanyChallenges,
    challenge2: CompanyChallenges,
    challenge3: CompanyChallenges,
}

export const emptyOrganization: Organization = {
    identifier: '',
    name: '',
    website: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    industries: [],
    tagline: '',
    aboutUs: '',
    location: null,
    size: '',
    email: '',
    id: null,
    userSet: [],
    updated: '',
    created: '',
    logo: null,
    stage: null,
    funding: null,
    challenge1: null,
    challenge2: null,
    challenge3: null
}

export default Organization