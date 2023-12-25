import { Id } from "./propertyTypes"
import User from "./user"

export type CompanyFunding = 'EF' | 'PS' | 'SR' | 'SA' | 'SB' | 'NF'

export type CompanyStage = 'ID' | 'DV' | 'PR' | 'PO'

export type CompanyChallenges = 'SF' | 'PD' | 'BC' | 'BS' | 'MB' | 'SO' | 'MF' | 'LR' | 'HT'

type Organization = {
    id: Id,
    user_set: [User],
    updated: string,
    created: string,
    name: string,
    website: string | null,
    logo: string | null,
    identifier: string,
    industry: string | null,
    linkedin: string | null,
    twitter: string | null,
    facebook: string | null,
    tagline: string | null,
    stage: CompanyStage,
    funding: CompanyFunding,
    challenge1: CompanyChallenges,
    challenge2: CompanyChallenges,
    challenge3: CompanyChallenges,
    owner: Id
}

export default Organization