import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorNotification } from '../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../components/navigation/routes'

export const PrivateAdminRoute = ({ children }) => {
    // check for authentication/permission before return
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            if (user.anon)
                dispatch(setErrorNotification('Forbidden: Not logged in'))
                // navigate(PAGES.home.path)

        }
    }, [user, dispatch, navigate])

    return <>{children}</>
}
