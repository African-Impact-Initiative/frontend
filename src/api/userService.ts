import ServiceResponse from '../types/serviceResponse'
import User from '../types/user'
import { Id } from '../types/propertyTypes'
import apiRoutes from './apiRoutes'
import Service from './service'
import { METHODS } from './utils'
import { Empty } from './contracts/generalContracts'
import { AddUserToOrganization, CreateUser, UpdatePersonalInfo, UpdateTerms } from './contracts/userContracts'

const userService = new Service<User>(apiRoutes.userOperations.baseUrl)

const retrieve = async (): Promise<ServiceResponse<Array<User>>> => {
    return await userService.retrieve()
}

const retrieveSingle = async (id: Id): Promise<ServiceResponse<User>> => {
    return await userService.retrieveSingle(id)
}

const getCurrent = async (): Promise<ServiceResponse<User>> => {
    return await userService.requestWith<User, Empty>(METHODS.get, {}, apiRoutes.userOperations.userUrl)
}

const getAdmins = async (): Promise<ServiceResponse<User>> => {
    return await userService.requestWith<User, Empty>(METHODS.get, {}, apiRoutes.userOperations.adminUrl)
}

const create = async (user: CreateUser): Promise<ServiceResponse<User>> => {
    return await userService.requestWith<User, CreateUser>(METHODS.post, user)
}

const update = async (id: Id, user: User): Promise<ServiceResponse<User>> => {
    return await userService.update(id, user)
}

const destroy = async (id: Id): Promise<ServiceResponse<Empty>> => {
    return await userService.destroy(id)
}

const agreeToTerms = async (): Promise<ServiceResponse<UpdateTerms>> => {
    return await userService.request<UpdateTerms>(METHODS.put, { terms: true }, apiRoutes.userOperations.terms)
}

const updatePersonalInformation = async (personalInfo: UpdatePersonalInfo): Promise<ServiceResponse<UpdatePersonalInfo>> => {
    return await userService.request<UpdatePersonalInfo>(METHODS.put, personalInfo, apiRoutes.userOperations.personalInfo)
}

const addOrganizationToUser = async (id: Id): Promise<ServiceResponse<Empty>> => {
    return await userService.requestWith<Empty, AddUserToOrganization>(METHODS.put, { org: id }, apiRoutes.userOperations.addOrganization)
}

export default {
    retrieve,
    retrieveSingle,
    getCurrent,
    getAdmins,
    create,
    update,
    destroy,
    agreeToTerms,
    updatePersonalInformation,
    addOrganizationToUser
}