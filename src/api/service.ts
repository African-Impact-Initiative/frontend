import { AxiosResponse, HttpStatusCode } from "axios"
import IService from "../types/service"
import ServiceResponse from "../types/serviceResponse"
import IHttpClient from "../types/httpClient"
import HttpClient from "./httpClient"
import { Id } from "../types/user"

class Service<T> implements IService<T> {
    baseUrl: string
    client: IHttpClient<T>

    constructor(endpoint: string) {
        this.baseUrl = endpoint
        this.client = new HttpClient<T>(endpoint)
    }

    buildRes(res: AxiosResponse<T>, error: boolean): ServiceResponse<T> {
        const success = HttpStatusCode.Ok <= res.status && res.status < HttpStatusCode.MultipleChoices

        if (error && !success)
            throw Error('Error here')

        return {
            success: success,
            status: res.status,
            data: res.data
        }
    }

    async retrieve(query?: string): Promise<ServiceResponse<T>> {
        const res = await this.client.get(query)
        return this.buildRes(res, true)
    }

    async retrieveSingle(id: Id): Promise<ServiceResponse<T>> {
        const res = await this.client.get(undefined, `${id}/`)
        return this.buildRes(res, true)
    }

    async create(data: T): Promise<ServiceResponse<T>> {
        const res = await this.client.post(data)
        return this.buildRes(res, true)
    }

    async update(id: Id, data: T): Promise<ServiceResponse<T>> {
        const res = await this.client.put(id, data)
        return this.buildRes(res, true)
    }

    async modify(id: Id, data: T): Promise<ServiceResponse<T>> {
        const res = await this.client.patch(id, data)
        return this.buildRes(res, true)
    }

    async destroy(id: Id): Promise<ServiceResponse<T>> {
        const res = await this.client.delete(id)
        return this.buildRes(res, true)
    }

    getClient(): IHttpClient<T> {
        return this.client
    }
}

export default Service