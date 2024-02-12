import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './notificationReducer'
import usersReducer from './usersReducer'
import organizationReducer from './organizationReducer'
import appUserReducer from './appUserReducer'
import appOrganizationReducer from './appOrganizationReducer'

// create store for redux
const store = configureStore({
    reducer: {
        notifications: notificationReducer,
        user: appUserReducer,
        users: usersReducer,
        organization: appOrganizationReducer,
        organizations: organizationReducer
    }
})

// infer the `RootState` and `AppDispatch` types from the store itself
export type IVBState = ReturnType<typeof store.getState>

// inferred type
export type AppDispatch = typeof store.dispatch

export default store