import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { Box, Divider, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { SearchOutlined } from '@mui/icons-material'
import { Link } from '../navigation/types/sideBar'

import LogoutIcon from '@mui/icons-material/Logout'
import VBLogo from './VBLogo'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { logout } from '../store/appUserReducer'
import PathConstants from '../navigation/pathConstants'

ChartJS.register(ArcElement, Tooltip, Legend)

export interface ISideBarProps {
    links: Array<Link>,
    backgroundColor: string,
    className: string,
    color1: string,
    color2: string,
    textColor: string,
    searchClass: string,
    searchBoarder: string,
    isAdmin: boolean,
}

const Sidebar = ({ links, backgroundColor, className, color1, color2, textColor, searchClass, searchBoarder, isAdmin }: ISideBarProps) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    const user = useAppSelector(state => state.user)

    const logoutHandler = () => {
        dispatch(logout())
        navigate(PathConstants.home)
    }
    
    return (
        <>
            <Box
                sx={{
                    borderRight: '0.5px solid #ccc',
                    width: '325px',
                    padding: '18px',
                    overflowY: 'auto',
                    background: `${backgroundColor}`,
                    color: color1,
                    display: { xs: 'none', md: 'inherit' },

                }}
            >
                <Box sx={{marginTop: '10px', textAlign: 'start'}}>
                    {!isAdmin ? <Box>
                        <img src={Logo} alt='logo' />
                    </Box>
                        :
                        <VBLogo dark={false} />}
                    {!isAdmin ? 
                        <Box
                            sx={{
                                height: '15%',
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    border: `1px solid ${searchBoarder}`,
                                    borderRadius: '8px',
                                    height: '50%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    columnGap: '8px',
                                    padding: '10px 14px 10px 14px',
                                }}
                            >
                                <SearchOutlined style={{ color: color2 }}/>
                                <Box className={`${searchClass}`}>
                                    {' '}
                                    <input
                                        placeholder='Search'
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            fontSize: '16px',
                                            borderBottom: '0px',
                                            background: `${backgroundColor}`,
                                            color: color1,
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box> :
                        <Box
                            sx={{
                                display: 'flex',
                                borderRadius: '8px',
                                height: '44px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                columnGap: '8px',
                                padding: '10px 14px 10px 14px',
                                margin: '40px 0',
                                backgroundColor: '#DC6803'
                            }}
                        >

                            <SearchOutlined
                                style={{
                                    color: color2,
                                }}
                            />

                            <Box className={`${searchClass}`}>
                                {' '}
                                <input
                                    placeholder='Search'
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        fontSize: '16px',
                                        borderBottom: '0px',
                                        background: ' #DC6803',
                                        color: color1,
                                    }}
                                />
                            </Box>
                        </Box>}

                    <Box
                        style={{
                            background: `${backgroundColor}`,
                            height: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        {links &&
                            links.map((sideBar) => (
                                <NavLink
                                    key={sideBar.id}
                                    to={sideBar.to}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? 'pending'
                                            : isActive
                                                ? className
                                                : 'inactive-nav'
                                    }
                                    style={{
                                        height: '40px',
                                        display: 'flex',
                                        columnGap: '40px',
                                        textDecoration: 'none',
                                        marginTop: `${sideBar?.name === 'Support' ? '30%' : '10px'
                                        }`,
                                        alignItems: 'center',
                                        padding: '10px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Box sx={{ width: '20px', height: '20px', }}>
                                        {typeof sideBar.icon === 'string' ? ( // check if the icon is a string (asset path)
                                            <img
                                                src={sideBar.icon}
                                                alt='icon'
                                                style={{ color: '#667085' }}
                                            />
                                        ) : (
                                            <sideBar.icon sx={{ color: '#667085' }} /> // assuming it's a React component
                                        )}
                                    </Box>
                                    <span
                                        style={{
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            color: textColor,
                                        }}
                                    >
                                        {sideBar.name}
                                    </span>
                                </NavLink>
                            ))}
                    </Box>

                    <Box sx={{ height: '15%', display: 'grid', alignItems: 'end' }}>
                        <Divider sx={{ margin: '20px 0' }} />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #EAECF0' }}>
                                {
                                    user.data && user.data.photo ?
                                        <img src={user.data.photo} alt='log-out' style={{width: '100%',height: '100%'}}/> :
                                        <PersonIcon sx={{ backgroundColor: '#FFFFFF', width:'100%', height:'100%' }} />
                                }
                            </Box>
                            <Box sx={{ cursor: 'pointer' }}>
                                <Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: color1,
                                        }}
                                    >
                                        { user.data && `${user.data.firstName} ${user.data.lastName}`}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            // color: "rgba(71, 84, 103, 1)",
                                            color: color2,
                                        }}
                                    >
                                        { user.data && user.data.email}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: '20px', height: '20px', cursor: 'pointer' }}>
                                <LogoutIcon onClick={logoutHandler} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar
