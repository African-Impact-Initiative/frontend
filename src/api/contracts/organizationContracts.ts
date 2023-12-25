import { CompanyChallenges, CompanyFunding, CompanyStage } from "../../types/organization"

export type UpdateChallenges = {
    challenge1?: CompanyChallenges,
    challenge2?: CompanyChallenges,
    challenge3?: CompanyChallenges,
}

export type UpdateFunding = {
    funding: CompanyFunding | null
}

export type UpdateStage = {
    stage: CompanyStage | null
}