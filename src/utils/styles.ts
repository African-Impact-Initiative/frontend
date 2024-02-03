/* eslint react-refresh/only-export-components: 0 */

import { createTheme } from '@mui/material/styles'

const BLACK = '#040720'
const ORANGE = '#EA841F'
const BLUE = '#29A6E0'
const ORANGE_SECONDARY = 'rgba(181, 71, 8, 1)'

export const getTheme = () => {
    return createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: BLACK
            },
            secondary: {
                main: ORANGE_SECONDARY,
            },

        },
        typography: {
            fontFamily: [
                '-apple-system',
                'Inter',
                'BlinkMacSystemFont',
                'Open Sans',
                'Fira Sans',
                'Roboto',
                '\'Segoe UI\'',
                '\'Helvetica Neue\'',
                'Arial',
                'sans-serif',
                '\'Apple Color Emoji\'',
                '\'Segoe UI Emoji\'',
                '\'Segoe UI Symbol\'',
            ].join(','),
        },
    })
}

export const ForgotStyle = {
    loading: {
        marginTop: '90px'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
    },
    margins: {
        maxWidth: 'xl'
    },
    title: {
        style: {
            width: '100%',
            textAlign: 'center',
            marginBottom: '10px',
            marginTop: '10px'
        },
        props: {
            variant: 'h3',
            component: 'div'
        }
    },
    googleContainer: {
        width: '100%',
        marginTop: '20px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    google: {
        props: {
            variant: 'outlined'
        },
        style: {
            margin: '10px',
            color: BLACK
        }
    },
    divider: {
        color: BLACK
    },
    secondary: {
        style: {
            width: '100%',
            textAlign: 'center',
            marginBottom: '40px',
            marginTop: '10px'
        },
        props: {
            variant: 'p',
            component: 'div'
        }
    },
    form: {
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        style: {
            width: '40%',
            marginTop: '10px',
            marginBottom: '10px',
            color: '#fff',
            backgroundColor: '#DC6803',
            '&:hover': { backgroundColor: '#E8822A'}
        },
        props: {
            variant: 'contained'
        }
    },
    register: {
        width: '100%',
        textAlign: 'left',
        marginBottom: '20px'
    },
    registerText: {
        props: {
            variant: 'p',
            component: 'span',
            fontWeight: 'bold'
        },
        style: {
            color: BLACK
        }
    },
    registerLink: {
        textDecoration: 'none',
        width: '100%'
    },
    createAccount: {
        style: {
            color: ORANGE
        },
        props: {
            variant: 'p',
            component: 'span',
            fontWeight: 'bold'
        }
    },
    imageSection: {
        display: {
            xs: 'none',
            md: 'flex'
        },
        backgroundColor: '#FFF',
        height: '100%',
        width: '100%'
    },
    imageSectionContainer: {
        style: {
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center'
        }
    },
    image: {
        width: '100%',
        height: '100%'
    },
    forgotPasswordText: {
        style: {
            color: BLUE,
            width: '100%',
            textAlign: 'right'
        },
        props: {
            variant:'p',
            component:'div',
            fontWeight:'bold'
        }
    },
    forgotLink: {
        textDecoration: 'none',
        color: BLUE
    }
}
