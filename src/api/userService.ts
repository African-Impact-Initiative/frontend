import ServiceResponse from '../types/serviceResponse'
import User from '../types/user'
import { Id } from "../types/propertyTypes"
import apiRoutes from './apiRoutes'
import Service from './service'
import { METHODS } from './utils'

const userService = new Service<User>(apiRoutes.userOperations.baseUrl)

const retrieve = async (): Promise<ServiceResponse<User>> => {
    return await userService.retrieve()
}

const retrieveSingle = async (id: Id): Promise<ServiceResponse<User>> => {
    return await userService.retrieveSingle(id)
}

const getCurrent = async (): Promise<ServiceResponse<User>> => {
    return await userService.request<User>(METHODS.get, undefined, apiRoutes.userOperations.userUrl)
}

const getAdmins = async (): Promise<ServiceResponse<User>> => {
    return await userService.request<User>(METHODS.get, undefined, apiRoutes.userOperations.adminUrl)
}

const create = async (user: User): Promise<ServiceResponse<User>> => {
    return await userService.create(user)
}

const update = async (id: Id, user: User): Promise<ServiceResponse<User>> => {
    return await userService.update(id, user)
}

const destroy = async (id: Id): Promise<ServiceResponse<User>> => {
    return await userService.destroy(id)
}

const agreeToTerms = async (user: User): Promise<ServiceResponse<User>> => {
    return await userService.request<User>(METHODS.put, user, apiRoutes.userOperations.terms)
}

const updatePersonalInformation = async (user: User): Promise<ServiceResponse<User>> => {
    return await userService.request<User>(METHODS.put, user, apiRoutes.userOperations.personalInfo)
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
}