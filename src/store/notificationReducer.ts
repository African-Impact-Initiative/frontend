import { createSlice } from '@reduxjs/toolkit'
import { AppNotificationState, AppNotificationAction } from './types/notificationState'

const initialState: AppNotificationState = {
    successNotification: null,
    errorNotification: null
}

// toolkit sets up the redux and state
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setSuccessNotification(state: AppNotificationState, action: AppNotificationAction) {
            return {
                ...state,
                successNotification: action.payload
            }
        },
        setErrorNotification(state: AppNotificationState, action: AppNotificationAction) {
            return {
                ...state,
                errorNotification: action.payload
            }
        }
    }
})

export const { setSuccessNotification, setErrorNotification } = notificationSlice.actions
export default notificationSlice.reducer