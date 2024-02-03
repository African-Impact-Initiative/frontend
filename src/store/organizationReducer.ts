import organizationService from '../api/organizationService'
import { createSlice } from '@reduxjs/toolkit'

import { setSuccessNotification, setErrorNotification } from './notificationReducer'
import { userAddToOrg } from './appUserReducer'
import { AppOrganizations, AppSetOrganizationsAction, AppDestroyOrganizationAction, AppUpdateOrAddOrganizationAction } from './types/organizationState'
import Organization, { CompanyChallenges, CompanyFunding, CompanyStage } from '../types/organization'
import { Id } from '../types/propertyTypes'
import { AppDispatch } from './store'

const initialState: AppOrganizations = []

// toolkit sets up the redux and state
const organizationSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        setOrganizations(state: AppOrganizations, action: AppSetOrganizationsAction) {
            state = [...action.payload]
            return state
        },
        appendOrganization(state: AppOrganizations, action: AppUpdateOrAddOrganizationAction){
            state.push(action.payload)
        },
        destroyOrganization(state: AppOrganizations, action: AppDestroyOrganizationAction){
            return state.filter(organization => organization.id !== action.payload)
        },
        changeOrganization(state: AppOrganizations, action: AppUpdateOrAddOrganizationAction){
            return state.map(organization => organization.id === action.payload.id ? action.payload : organization)
        }
    }
})

export const { setOrganizations, appendOrganization, destroyOrganization, changeOrganization } = organizationSlice.actions

export const createOrganization = (org: Organization) => {
    return async (dispatch: AppDispatch) => {
        const organization = await organizationService.create(org)
        dispatch(appendOrganization(organization.data as Organization))
        dispatch(userAddToOrg((organization.data as Organization).id!))
        dispatch(setSuccessNotification('Organization created successfully'))
    }
}

export const initializeOrganizations = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const organizations = await organizationService.retrieve()
            dispatch(setOrganizations(organizations.data as Array<Organization>))
        } catch {
            dispatch(setErrorNotification('Error retrieving organizations'))
        }
    }
}

export const deleteOrganization = (id: Id) => {
    return async (dispatch: AppDispatch) => {
        try {
            await organizationService.destroy(id)
            dispatch(destroyOrganization(id))
            dispatch(setSuccessNotification('Organization deleted sucessfully'))
        } catch {
            dispatch(setErrorNotification('Error deleting organization'))
        }
    }
}

export const updateOrganization = (id: Id, org: Organization) => {
    return async (dispatch: AppDispatch) => {
        try {
            const organization = await organizationService.update(id, org)
            dispatch(changeOrganization(organization.data as Organization))
            dispatch(setSuccessNotification('Organization updated successfully'))
        } catch {
            dispatch(setErrorNotification('Update of organization failed'))
        }
    }
}

export const searchOrganizations = (query: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const organizations = await organizationService.retrieve(query)
            dispatch(setOrganizations(organizations.data as Array<Organization>))
        } catch {
            dispatch(setErrorNotification('Error fulfilling search'))
        }
    }
}

export const refreshOrganization = (id: Id) => {
    return async (dispatch: AppDispatch) => {
        try {
            const organization = await organizationService.retrieveSingle(id)
            dispatch(changeOrganization(organization.data as Organization))
        } catch {
            console.log('failure refreshing organization')
        }
    }
}

export const updateOrgStage = (id: Id, stage: CompanyStage) => {
    return async (dispatch: AppDispatch) => {
        await organizationService.addStage(id, stage)
        const organization = await organizationService.findByIdentifier(id)
        dispatch(changeOrganization(organization.data as Organization))
    }
}

export const updateOrgFunding = (id: Id, funding: CompanyFunding) => {
    return async (dispatch: AppDispatch) => {
        await organizationService.addFunding(id, funding)
        const organization = await organizationService.findByIdentifier(id)
        dispatch(changeOrganization(organization.data as Organization))
    }
}

export const updateOrgChallenges = (id: Id, challenges: Array<CompanyChallenges>) => {
    return async (dispatch: AppDispatch) => {
        await organizationService.addChallenges(id, challenges)
        const organization = await organizationService.findByIdentifier(id)
        dispatch(changeOrganization(organization.data as Organization))
    }
}

export default organizationSlice.reducer