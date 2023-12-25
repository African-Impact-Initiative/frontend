import { AxiosResponse } from "axios"
import ServiceResponse from "./serviceResponse"
import { Id } from "./user"
import IHttpClient from "./httpClient"

interface IService<T> {
    buildRes(res: AxiosResponse<T>, error: boolean): ServiceResponse<T>
    retrieve(query?: string):  Promise<ServiceResponse<T>>
    retrieveSingle(id: Id):  Promise<ServiceResponse<T>>
    create(data: T):  Promise<ServiceResponse<T>>
    update(id: Id, data: T):  Promise<ServiceResponse<T>>
    modify(id: Id, data: T):  Promise<ServiceResponse<T>>
    destroy(id: Id):  Promise<ServiceResponse<T>>

    getClient(): IHttpClient<T>
}

export default IService