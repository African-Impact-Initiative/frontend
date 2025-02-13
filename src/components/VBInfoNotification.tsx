import useTheme from '@mui/material/styles/useTheme'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { setInfoNotification } from '../store/notificationReducer'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

const VBInfoNotification = () => {
    const theme = useTheme()
    const smallScreen = theme.breakpoints.values.sm
    const notification = useAppSelector(state => state.notifications.infoNotification)
    const dispatch = useAppDispatch()

    // if on mobile notif on bottom right otehr wise top center
    useEffect(() => {
        if(notification) {
            toast.info(notification , {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            dispatch(setInfoNotification(null))
        }
    }, [notification, smallScreen, dispatch])

    return (
        <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default VBInfoNotification