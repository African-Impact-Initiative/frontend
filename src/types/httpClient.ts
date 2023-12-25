import { AxiosResponse } from 'axios'
import { Id } from './user'

interface IHttpClient<T> {
    get(query?: string, endpoint?: string):  Promise<AxiosResponse<T>>
    put(id: Id, obj: T, endpoint?: string):  Promise<AxiosResponse<T>>
    patch(id: Id, obj: T, endpoint?: string):  Promise<AxiosResponse<T>>
    post(obj: T, endpoint?: string):  Promise<AxiosResponse<T>>
    delete(id: Id, endpoint?: string):  Promise<AxiosResponse<T>>
}

export default IHttpClient