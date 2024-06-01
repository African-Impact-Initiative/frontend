import { AxiosResponse, HttpStatusCode, Method } from 'axios'
import IService from './types/service'
import ServiceResponse from '../types/serviceResponse'
import IHttpClient from './types/httpClient'
import HttpClient from './httpClient'
import { Id } from '../types/propertyTypes'
import { Empty } from './contracts/generalContracts'

class Service<T> implements IService<T> {
    baseUrl: string
    client: IHttpClient<T>

    constructor(endpoint: string, base?: string) {
        this.baseUrl = endpoint
        this.client = base? new HttpClient<T>(endpoint, base) : new HttpClient<T>(endpoint)
    }

    buildRes<V>(res: AxiosResponse<V>, error: boolean): ServiceResponse<V> {
        const success = HttpStatusCode.Ok <= res.status && res.status < HttpStatusCode.MultipleChoices

        if (error && !success)
            throw Error('Error here')

        return {
            success: success,
            status: res.status,
            data: res.data
        }
    }

    async retrieve(query?: string): Promise<ServiceResponse<Array<T>>> {
        const res = await this.client.get(query)
        return this.buildRes<Array<T>>(res, true)
    }

    async retrieveSingle(id: Id): Promise<ServiceResponse<T>> {
        const res = await this.client.getSingle(`${id}/`)
        return this.buildRes<T>(res, true)
    }

    async create(data: T): Promise<ServiceResponse<T>> {
        const res = await this.client.post(data)
        return this.buildRes<T>(res, true)
    }

    async update(id: Id, data: T): Promise<ServiceResponse<T>> {
        const res = await this.client.put(id, data)
        return this.buildRes<T>(res, true)
    }

    async modify(id: Id, data: T): Promise<ServiceResponse<T>> {
        const res = await this.client.patch(id, data)
        return this.buildRes<T>(res, true)
    }

    async destroy(id: Id): Promise<ServiceResponse<Empty>> {
        const res = await this.client.delete(id)
        return this.buildRes<Empty>(res, true)
    }

    async request<K>(method: Method, data?: K, endpoint?: string): Promise<ServiceResponse<K>> {
        return this.requestWith<K, K>(method, data, endpoint)
    }

    async requestWith<K, V>(method: Method, data?: V, endpoint?: string | undefined): Promise<ServiceResponse<K>> {
        const res = await this.client.requestWith<K, V>(method, data, endpoint)
        return this.buildRes<K>(res, true)
    }

    async uploadFile(data: FormData, endpoint: string): Promise<ServiceResponse<T>> {
        const res = await this.client.uploadFile(data, endpoint)
        return this.buildRes<T>(res, true)
    }
}

export default Service