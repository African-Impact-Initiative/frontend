import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './notificationReducer'
import usersReducer from './usersReducer'
import organizationReducer from './organizationReducer'
import appUserReducer from './appUserReducer'

// create store for redux
const store = configureStore({
    reducer: {
        notifications: notificationReducer,
        user: appUserReducer,
        users: usersReducer,
        organizations: organizationReducer
    }
})

export default store