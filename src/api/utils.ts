import { Method } from "axios";

export const METHODS: { [key: string]: Method } = {
    get: 'GET',
    delete: 'DELETE',
    head: 'HEAD',
    options: 'OPTIONS',
    post: 'POST',
    put: 'PUT',
    patch: 'PATCH',
    purge: 'PURGE',
    link: 'LINK',
    unlink: 'UNLINK',
}