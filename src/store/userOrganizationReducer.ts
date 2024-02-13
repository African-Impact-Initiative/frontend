import { createSlice } from '@reduxjs/toolkit'
import organizationService from '../api/organizationService'
import { changeOrganization } from './organizationReducer'
import { setSuccessNotification, setErrorNotification } from './notificationReducer'
import Organization from '../types/organization'
import { SetUserOrganizationState, UpdateUserOrganizationState } from './types/userOrganizationState'
import { Id } from '../types/propertyTypes'
import { AppDispatch } from './store'

type UserOrganization = {
    data: Organization | null
}

const initialState: UserOrganization = {
    data: null,
}

// toolkit sets up the redux and state
const organizationSlice = createSlice({
    name: 'userOrganization',
    initialState,
    reducers: {
        setUserOrganization(_state: UserOrganization, action: SetUserOrganizationState) {
            return {
                data: action.payload
            }
        },
        updateUserOrganization(state: UserOrganization, action: UpdateUserOrganizationState) {
            return {
                ...state,
                data: {
                    ...(state?.data || {}),
                    ...action.payload
                }
            }
        }
    }
})

export const { setUserOrganization, updateUserOrganization } = organizationSlice.actions

export const updateOrganization = (id: Id, org: Organization) => {
    return async (dispatch: AppDispatch) => {
        try {
            const organization = await organizationService.modify(id, org)
            dispatch(updateUserOrganization(organization.data as Organization))
            dispatch(changeOrganization(organization.data as Organization))
            dispatch(setSuccessNotification('Organization updated successfully'))
        } catch {
            dispatch(setErrorNotification('Update of organization failed'))
        }
    }
}

export default organizationSlice.reducer