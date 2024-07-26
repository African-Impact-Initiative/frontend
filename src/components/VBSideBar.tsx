import { Link, NavLink } from 'react-router-dom'
import { Box, Divider, Icon, Typography } from '@mui/material'
import userAvatar from '../assets/avatar.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { SearchOutlined } from '@mui/icons-material'
import { Link as LinkType } from '../navigation/types/sideBar'

import LogoutIcon from '@mui/icons-material/Logout'
import logo from '../assets/logo.svg'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { logout } from '../store/appUserReducer'
import PathConstants from '../navigation/pathConstants'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
    labels: ['Red', 'Blue'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 2],
            backgroundColor: ['rgba(220, 104, 3, 1)', '#ccc'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 0,
            borderRadius: 10,
        },
    ],
}

const textCenter = {
    id: 'Id Chart',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeDraw: (chart: any) => {
        const ctx = chart.ctx
        ctx.save()
        ctx.font = '15px Roboto'
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText(
            '80%',
            chart.getDatasetMeta(0).data[0].x,
            chart.getDatasetMeta(0).data[0].y - 0
        )
    },
}

const options = {
    // reduce the thickness of the doughnut
    cutout: '75%',
    plugins: {
        legend: {
            display: false, // hide the legend (labels)
        },
        doughnutBackground: {
            enabled: true,
            color: '#000000', // set the background color of the doughnut.
        },
    },
}

export interface ISideBarProps {
    links: Array<LinkType>,
    sidebarBackgroundColor: string,
    rightBorderColor: string,
    logoTextColor: string,

    searchTextColor: string,
    searchIconColor: string,
    searchBorderColor: string,
    searchBackgroundColor: string,

    // "item" here refers to the menu items 
    selectedItemBackgroundColor: string,
    selectedItemTextColor: string,
    itemTextColor: string,
    itemIconColor: string,

    userNameColor: string,
    userEmailColor: string,

    dividerColor: string,
    logoutIconColor: string,

    className: string,
    searchClass: string,
    isAdmin: boolean,
}

const Sidebar = ({
    links,
    sidebarBackgroundColor,
    rightBorderColor,
    logoTextColor,
    searchTextColor,
    searchIconColor,
    searchBorderColor,
    searchBackgroundColor,
    selectedItemBackgroundColor,
    selectedItemTextColor,
    itemTextColor,
    itemIconColor,
    userNameColor,
    userEmailColor,
    dividerColor,
    logoutIconColor,
    className,
    searchClass,
    isAdmin,
}: ISideBarProps) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        // event.preventDefault()
        
        dispatch(logout(false))
        // dispatch(setErrorNotification('Please fix the form errors before submission'))
    }

    return (
        <>
            <Box
                sx={{
                    borderRight: `1px solid ${rightBorderColor}`,
                    width: { xs: '81px', md: '280px' },
                    overflowY: 'auto',
                    background: sidebarBackgroundColor,
                    display: 'flex',
                    flexDirection: 'column',
                    flexShrink: 0,
                    justifyContent: 'space-between'
                }}
            >
                {/* top half of the sidebar, containing logo, search, menu items */}
                <Box sx={{ pt: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <Box sx={{ pl: '24px', pr: '24px' }}>
                        <Link to={PathConstants.home} style={{ textDecoration: 'none' }}>
                            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Icon sx={{ height: '32px', width: '32px' }}>
                                    <img src={logo} alt='logo' />
                                </Icon>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        display: { md: 'inline-block', xs: 'none' },
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        lineHeight: '28px',
                                        color: logoTextColor
                                    }}
                                >
                                    Venture Build
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box sx={{ pl: '24px', pr: '24px', display: { xs: 'none', md: 'inherit' } }}>
                        <Box sx={{
                            display: 'flex',
                            border: `1px solid ${searchBorderColor}`,
                            borderRadius: '8px',
                            height: '44px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            columnGap: '8px',
                            padding: '10px 14px 10px 14px',
                            background: searchBackgroundColor
                        }}>

                            <SearchOutlined style={{ color: searchIconColor }} />
                            <Box className={searchClass}>
                                {' '}
                                <input
                                    placeholder='Search'
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        borderBottom: '0px',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '24px',
                                        color: searchTextColor,
                                        background: searchBackgroundColor,
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ pl: '16px', pr: '16px' }}>
                        <Box sx={{ height: '100%', display: 'flex', gap: '4px', flexDirection: 'column' }}>
                            {links.slice(0, -2).map((link) => (  // be sure that links have >= 2 elements
                                <NavLink
                                    key={link.id}
                                    to={link.to}
                                    className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? className : 'inactive-nav'
                                    }
                                    style={({ isActive }) => ({
                                        height: '40px',
                                        display: 'flex',
                                        gap: '12px',
                                        padding: '8px 12px 8px 12px',
                                        cursor: 'pointer',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        background: isActive ? selectedItemBackgroundColor : 'transparent',
                                        color: isActive ? selectedItemTextColor : itemTextColor
                                        // background: selectedItemBackgroundColor
                                    })}
                                >
                                    {typeof link.icon === 'string' ? ( // check if the icon is a string (asset path)
                                        <Box sx={{ color: itemIconColor}}>
                                            <img src={link.icon} alt='sidebar-icon' style={{ color: itemIconColor }} />

                                        </Box>
                                    ) : (
                                        <link.icon sx={{ color: itemIconColor }} /> // assuming it's a React component
                                    )}
                                    
                                    <Typography
                                        sx={{
                                            display: { xs: 'none', md: 'inherit' },
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        {link.name}
                                    </Typography>
                                </NavLink>
                            ))}
                        </Box>
                    </Box>

                </Box>


                {/* bottom half of the sidebar, containing settings, profile, logout */}
                <Box sx={{ padding: '0 16px 32px 16px' }}>
                    <Box sx={{ pb: '24px' }}>
                        <Box sx={{ height: '100%', display: 'flex', gap: '4px', flexDirection: 'column' }}>
                            {links.slice(-2).map((link) => (  // be sure that links have >= 2 elements
                                <NavLink
                                    key={link.id}
                                    to={link.to}
                                    className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? className : 'inactive-nav'
                                    }
                                    style={({ isActive }) => ({
                                        height: '40px',
                                        display: 'flex',
                                        gap: '12px',
                                        padding: '8px 12px 8px 12px',
                                        cursor: 'pointer',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        background: isActive ? selectedItemBackgroundColor : 'transparent',
                                        color: isActive ? selectedItemTextColor : itemTextColor
                                        // background: selectedItemBackgroundColor
                                    })}
                                >
                                    {typeof link.icon === 'string' ? ( // check if the icon is a string (asset path)
                                        <img src={link.icon} alt='sidebar-icon' style={{ color: itemIconColor }} />
                                    ) : (
                                        <link.icon sx={{ color: itemIconColor }} /> // assuming it's a React component
                                    )}
                                    <Typography
                                        sx={{
                                            display: { xs: 'none', md: 'inherit' },
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        {link.name}
                                    </Typography>
                                </NavLink>
                            ))}
                        </Box>
                    </Box>
                    <Divider sx={{ background: dividerColor }} />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '24px 8px 0 8px',
                            borderRadius: '12px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center',
                                borderRadius: '12px',
                                // padding: '8px 8px 8px 8px',
                                // transition: 'background-color 0.3s ease',
                                // '&:hover': {
                                //     backgroundColor: '#eeeeee'
                                // },
                            }}
                        >                   
                            <Box sx={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                                <Box sx={{ height: '40px', width: '40px' }}>
                                    <img
                                        src={userAvatar} alt='logo'
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ cursor: 'pointer', display: {xs: 'none', md: 'block' } }}>
                                <Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: userNameColor,
                                        }}
                                    >
                                        {user.data?.firstName + ' ' + user.data?.lastName}
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
                                            maxWidth: '143px',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis', 
                                            color: userEmailColor,
                                        }}
                                    >
                                        {user.data?.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box onClick={handleLogout} 
                            sx={{ width: '20px', height: '20px', ml: 'auto', cursor: 'pointer', display: {xs: 'none', md: 'block' } }}
                        >
                            <LogoutIcon style={{color: logoutIconColor}} />
                        </Box>
                    </Box>

                </Box>

            </Box>
        </>
    )
}

export default Sidebar
