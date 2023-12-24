import ServiceResponse from "./serviceResponse"

interface Service<T> {
    baseUrl : string

    buildRes(res: any, error: boolean): ServiceResponse<T>

    retrieve(query: string):  ServiceResponse<T>
    retrieveSingle(id: number | string):  ServiceResponse<T>
    create(data: T):  ServiceResponse<T>
    update(id: number | string, data: T):  ServiceResponse<T>
    destroy(id: number):  ServiceResponse<T>
}

export default Service