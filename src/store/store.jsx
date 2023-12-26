import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import usersReducer from './reducers/usersReducer'
import organizationReducer from './reducers/organizationReducer'

// create store for redux
const store = configureStore({
    reducer: {
        notifications: notificationReducer,
        user: userReducer,
        users: usersReducer,
        organizations: organizationReducer
    }
})

export default store