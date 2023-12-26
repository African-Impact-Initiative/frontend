import Organization, { CompanyChallenges, CompanyFunding, CompanyStage } from '../types/organization'
import { Id } from '../types/propertyTypes'
import ServiceResponse from '../types/serviceResponse'
import apiRoutes from './apiRoutes'
import { Empty } from './contracts/generalContracts'
import { UpdateChallenges, UpdateFunding, UpdateStage } from './contracts/organizationContracts'
import Service from './service'
import { METHODS } from './utils'

const organizationService = new Service<Organization>(apiRoutes.organizationOperations.baseUrl)

const retrieve = async (): Promise<ServiceResponse<Array<Organization>>> => {
    return await organizationService.retrieve()
}

const retrieveSingle = async (id: Id): Promise<ServiceResponse<Organization>> => {
    return await organizationService.retrieveSingle(id)
}

const create = async (organization: Organization): Promise<ServiceResponse<Organization>> => {
    return await organizationService.create(organization)
}

const update = async (id: Id, organization: Organization): Promise<ServiceResponse<Organization>> => {
    return await organizationService.update(id, organization)
}

const destroy = async (id: Id): Promise<ServiceResponse<Empty>> => {
    return await organizationService.destroy(id)
}

const addStage = async (id: Id, stage: CompanyStage): Promise<ServiceResponse<UpdateStage>> => {
    return await organizationService.request<UpdateStage>(METHODS.put, { stage }, `${apiRoutes.organizationOperations.stageUrl}${id}/`)
}

const addChallenges = async (id: Id, challenges: Array<CompanyChallenges>): Promise<ServiceResponse<UpdateChallenges>> => {
    const data: UpdateChallenges = {}

    if (challenges.length > 0) {
        data.challenge1 = challenges[0]
        if (challenges.length > 1) {
            data.challenge2 = challenges[1]
            if (challenges.length > 2) data.challenge3 = challenges[2]
        }
    }

    return await organizationService.request<UpdateChallenges>(METHODS.put, data, `${apiRoutes.organizationOperations.challengeUrl}${id}/`)
}

const addFunding = async (id: Id, funding: CompanyFunding): Promise<ServiceResponse<UpdateFunding>> => {
    return await organizationService.request<UpdateFunding>(METHODS.put, { funding }, `${apiRoutes.organizationOperations.fundingUrl}${id}/`)
}

const findByIdentifier = async (id: Id): Promise<ServiceResponse<Organization>> => {
    return await organizationService.request<Organization>(METHODS.get, undefined, `${apiRoutes.organizationOperations.findById}${id}/`)
}

export default {
    retrieve,
    retrieveSingle,
    create,
    update,
    destroy,
    addStage,
    addChallenges,
    addFunding,
    findByIdentifier
}