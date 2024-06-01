import { createSlice } from '@reduxjs/toolkit'
import organizationService from '../api/organizationService'
import { changeOrganization } from './organizationReducer'
import { setSuccessNotification, setErrorNotification } from './notificationReducer'
import Organization from '../types/organization'
import { SetUserOrganizationState, UpdateUserOrganizationState } from './types/userOrganizationState'
import { Id } from '../types/propertyTypes'
import { AppDispatch } from './store'
import User from '../types/user'
import userService from '../api/userService'
import { changeUsers } from './usersReducer'

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
                    ...state.data,
                    ...action.payload
                }
            }
        }
    }
})

export const { setUserOrganization, updateUserOrganization } = organizationSlice.actions

export const updateOrganization = (id: Id, org: Organization, logo?: File | null, leadersToUpdate?: Array<User>) => {
    return async (dispatch: AppDispatch) => {
        try {
            await organizationService.modify(id, org)

            // upload logo
            if (logo) {
                const formData = new FormData()
                formData.append('logo', logo)
                await organizationService.uploadLogo(id, formData)
            }

            // update leadership
            if (leadersToUpdate) {
                for (const leader of leadersToUpdate) {
                    const user = await userService.update(
                        leader.id, 
                        {
                            firstName: leader.firstName,
                            lastName: leader.lastName,
                            leadership: !leader.leadership
                        } as User
                    )
                    dispatch(changeUsers(user.data as User))
                }
            }

            const organization = await organizationService.retrieveSingle(id)
            dispatch(updateUserOrganization(organization.data as Organization))
            dispatch(changeOrganization(organization.data as Organization))
            dispatch(setSuccessNotification('Organization updated successfully'))
        } catch {
            dispatch(setErrorNotification('Update of organization failed'))
        }
    }
}

export default organizationSlice.reducer