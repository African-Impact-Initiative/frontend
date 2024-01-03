import './App.css'

import { ThemeProvider } from '@mui/material/styles'
import { getTheme } from './utils/styles'
import CssBaseline from '@mui/material/CssBaseline'

import SuccessNotification from './utils/notifications/SuccessNotification'
import ErrorNotification from './utils/notifications/ErrorNotification'

import { setUserOnRefresh } from './store/appUserReducer'
import { useEffect, useState } from 'react'
import VBLoading from './components/VBLoading'
import Router from './navigation/Router'
import { useAppDispatch, useAppSelector } from './hooks/redux'

const App = () => {
    const theme = getTheme()

    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)
    const user = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(setUserOnRefresh())
    }, [dispatch])

    useEffect(() => {
        if (user) setLoading(false)
    }, [user])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SuccessNotification />
            <ErrorNotification />
            {loading ? <VBLoading /> : <Router />}
        </ThemeProvider>
    )
}

export default App
