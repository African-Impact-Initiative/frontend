import './App.css'

import { ThemeProvider } from '@mui/material/styles'
import { getTheme } from './utils/styles'
import CssBaseline from '@mui/material/CssBaseline'

import SuccessNotification from './components/VBSuccessNotification'
import ErrorNotification from './components/VBErrorNotification'
import InfoNotification from './components/VBInfoNotification'

import { setUserOnRefresh } from './store/appUserReducer'
import { useEffect, useState } from 'react'
import VBLoading from './components/VBLoading'
import Router from './navigation/Router'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { initializeOrganizations } from './store/organizationReducer'

const App = () => {
    const theme = getTheme()

    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)
    const user = useAppSelector(state => state.user)
    const organizations = useAppSelector(state => state.organizations)

    useEffect(() => {
        dispatch(setUserOnRefresh())
    }, [dispatch])

    useEffect(() => {
        // todo: optimize this
        dispatch(initializeOrganizations())
    }, [dispatch])

    useEffect(() => {
        if (user && !user.loading && organizations && !organizations.loading) setLoading(false)
    }, [user, organizations])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SuccessNotification />
            <ErrorNotification />
            <InfoNotification />
            {loading ? <VBLoading /> : <Router />}
        </ThemeProvider>
    )
}

export default App
