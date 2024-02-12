import { createSlice } from '@reduxjs/toolkit'
import organizationService from '../api/organizationService'
import { changeOrganization } from './organizationReducer'
import { setSuccessNotification, setErrorNotification } from './notificationReducer'
import Organization from '../types/organization'
import { SetAppOrganizationState, UpdateAppOrganizationState } from './types/appOrganizationState'
import { Id } from '../types/propertyTypes'
import { AppDispatch } from './store'

type AppOrganization = {
    data: Organization | null
}

const initialState: AppOrganization = {
    data: null,
}

// toolkit sets up the redux and state
const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
        setAppOrganization(_state: AppOrganization, action: SetAppOrganizationState) {
            return {
                data: action.payload
            }
        },
        updateAppOrganization(state: AppOrganization, action: UpdateAppOrganizationState) {
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

export const { setAppOrganization, updateAppOrganization } = organizationSlice.actions

export const updateOrganization = (id: Id, org: Organization) => {
    return async (dispatch: AppDispatch) => {
        try {
            const organization = await organizationService.modify(id, org)
            dispatch(updateAppOrganization(organization.data as Organization))
            dispatch(changeOrganization(organization.data as Organization))
            dispatch(setSuccessNotification('Organization updated successfully'))
        } catch {
            dispatch(setErrorNotification('Update of organization failed'))
        }
    }
}

export default organizationSlice.reducer