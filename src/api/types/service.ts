import { AxiosResponse, Method } from 'axios'
import ServiceResponse from '../../types/serviceResponse'
import { Id } from '../../types/propertyTypes'
import { Empty } from '../contracts/generalContracts'

interface IService<T> {
    buildRes<V>(res: AxiosResponse<V>, error: boolean): ServiceResponse<V>
    retrieve(query?: string):  Promise<ServiceResponse<Array<T>>>
    retrieveSingle(id: Id):  Promise<ServiceResponse<T>>
    create(data: T):  Promise<ServiceResponse<T>>
    update(id: Id, data: T):  Promise<ServiceResponse<T>>
    modify(id: Id, data: T):  Promise<ServiceResponse<T>>
    destroy(id: Id):  Promise<ServiceResponse<Empty>>

    request<K>(method: Method, data?: K, endpoint?: string): Promise<ServiceResponse<K>>
    requestWith<K, V>(method: Method, data?: V, endpoint?: string | undefined): Promise<ServiceResponse<K>>
}

export default IService