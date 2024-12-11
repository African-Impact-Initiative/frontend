import organizationService from '../api/organizationService'
import { createSlice } from '@reduxjs/toolkit'

import { setSuccessNotification, setErrorNotification } from './notificationReducer'
import { userAddToOrg } from './appUserReducer'
import { AppOrganizations, AppSetOrganizationsAction, AppDestroyOrganizationAction, AppUpdateOrAddOrganizationAction } from './types/organizationState'
import Organization, { CompanyChallenges, CompanyFunding, CompanyStage } from '../types/organization'
import { Id } from '../types/propertyTypes'
import { AppDispatch } from './store'
import { setUsers } from './usersReducer'
import User from '../types/user'

const initialState: AppOrganizations = {
    loading: true,
    data: []
}

// toolkit sets up the redux and state
const organizationSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        setOrganizations(_state: AppOrganizations, action: AppSetOrganizationsAction) {
            return {
                loading: false,
                data: action.payload
            }
        },
        appendOrganization(state: AppOrganizations, action: AppUpdateOrAddOrganizationAction){
            state.data.push(action.payload)
        },
        destroyOrganization(state: AppOrganizations, action: AppDestroyOrganizationAction){
            return {
                loading: false,
                data: state.data.filter(organization => organization.id !== action.payload)
            }
        },
        changeOrganization(state: AppOrganizations, action: AppUpdateOrAddOrganizationAction){
            return {
                loading: false,
                data: state.data.map(organization => organization.id === action.payload.id ? action.payload : organization)
            }
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

export const initializeOrganizationMembers = (organizationId: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const members = await organizationService.getOrganizationMembers(organizationId)
            console.log('Fetched members:', members.data)
            if (Array.isArray(members.data)) {
                dispatch(setUsers(members.data)) 
            } else {
                dispatch(setUsers([members.data])) 
            }
        } catch (error) {
            console.error('Error fetching members:', error)
            dispatch(setErrorNotification('Error retrieving team members'))
        }
    }
}


export const updateMemberCoownerStatus = (organizationId: number, userId: number) => {
    console.log(organizationId)
    console.log(userId)
    return async (dispatch: AppDispatch) => {
        try {
            await organizationService.updateMemberCoownerStatus(organizationId, userId)
            await dispatch(initializeOrganizationMembers(organizationId))
            dispatch(setSuccessNotification('Co-admin status updated successfully'))
        } catch (error) {
            console.error('Error updating coowner status:', error)
            dispatch(setErrorNotification('Failed to update co-admin status'))
        }
    }
}

export default organizationSlice.reducer