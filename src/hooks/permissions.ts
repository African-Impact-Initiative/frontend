import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './redux'
import PathConstants from '../navigation/pathConstants'
import { setErrorNotification } from '../store/notificationReducer'
import { useEffect } from 'react'

export const useAuthPermission = (setLoading: (val: boolean) => void) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user && !user.loading) {
            if (user.anon) {
                dispatch(setErrorNotification('You must be logged in to view this page'))
                navigate(PathConstants.home)
            }

            if (user.data)
                setLoading(false)
        }
    }, [user, navigate, dispatch, setLoading])
}

export const useAdminPermission = (setLoading: (val: boolean) => void) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user && !user.loading) {
            if (user.anon || (user.data && !user.data.admin)) {
                dispatch(setErrorNotification('You are not authorized to view this page'))
                navigate(PathConstants.home)
            }

            if (user.data && user.data.admin)
                setLoading(false)
        }
    }, [user, navigate, dispatch, setLoading])
}