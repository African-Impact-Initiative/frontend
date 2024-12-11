import userService from '../api/userService'
import { createSlice } from '@reduxjs/toolkit'

import { setSuccessNotification, setErrorNotification } from './notificationReducer'
import User from '../types/user'
import { AppUsers, AppSetUsersAction, AppUpdateUserAction } from './types/userState'
import { AppDispatch } from './store'

const initialState: AppUsers = []

// toolkit sets up the redux and state
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state: AppUsers, action: AppSetUsersAction) {
            state = [...action.payload]
            return state
        },
        changeUsers(state: AppUsers, action: AppUpdateUserAction) {
            if (state === null) return state
            return state.map(user => user.id === action.payload.id? action.payload : user)
        }
    }
})

export const { setUsers, changeUsers } = userSlice.actions

export const initializeUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const users = await userService.retrieve()
            dispatch(setUsers(users.data as Array<User>))
        } catch {
            dispatch(setErrorNotification('Error retrieving users'))
        }
    }
}

export const updateUser = (data: User) => {
    return async (dispatch: AppDispatch) => {
        try {
            const user = await userService.update(data.id, data)
            dispatch(changeUsers(user.data as User))
            dispatch(setSuccessNotification('User updated'))
        } catch {
            dispatch(setErrorNotification('Error updating user'))
        }
    }
}


export default userSlice.reducer