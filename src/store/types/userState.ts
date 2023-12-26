import User from "../../types/user"
export type AppUsers = Array<User>

export type AppSetUsersAction = {
    type: string
    payload: Array<User>
}

export type AppUpdateUserAction = {
    type: string
    payload: User
}
