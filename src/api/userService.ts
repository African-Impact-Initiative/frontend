import ServiceResponse from "../types/serviceResponse";
import User, { Id } from "../types/user";
import apiRoutes from "./apiRoutes";
import Service from "./service";

const userService = new Service<User>(apiRoutes.userOperations.baseUrl)

const retrieve = async (): Promise<ServiceResponse<User>> => {
    return await userService.retrieve()
}

const retrieveSingle = async (id: Id): Promise<ServiceResponse<User>> => {
    return await userService.retrieveSingle(id)
}

const getCurrent = async (): Promise<ServiceResponse<User>> => {
    const res = await userService.getClient()
        .get(apiRoutes.userOperations.userUrl)
    return userService.buildRes(res, true)
}

const getAdmins = async (): Promise<ServiceResponse<User>> => {
    const res = await userService.getClient()
        .get(apiRoutes.userOperations.adminUrl)
    return userService.buildRes(res, true)
}

const create = async (user: User): Promise<ServiceResponse<User>> => {
    return await userService.create(user)
}

const update = async (id: Id, user: User): Promise<ServiceResponse<User>> => {
    return await userService.update(id, user)
}

const destroy = async (id: Id): Promise<ServiceResponse<User>> => {
    const res = await userService.getClient().delete(id)
    return userService.buildRes(res, true)
}

const agreeToTerms = async (user: User): Promise<ServiceResponse<User>> => {
    const res = await userService.getClient()
        .put(apiRoutes.userOperations.terms, user)
    return userService.buildRes(res, true)
}

const updatePersonalInformation = async (user: User): Promise<ServiceResponse<User>> => {
    const res = await userService.getClient()
        .put(apiRoutes.userOperations.personalInfo, user)
    return userService.buildRes(res, true)
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