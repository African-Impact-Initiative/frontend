import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { Box, Divider, Typography } from '@mui/material'
import userAvatar from '../assets/avatar.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { SearchOutlined } from '@mui/icons-material'
import { Link } from '../navigation/types/sideBar'

import LogoutIcon from '@mui/icons-material/Logout'
import VBLogo from './VBLogo'

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
                    {!isAdmin ? <VBLogo dark={true} /> : <VBLogo dark={false} />}

                    {!isAdmin ? <Box
                        sx={{
                            display: 'flex',
                            border: `1px solid ${searchBoarder}`,
                            borderRadius: '8px',
                            height: '44px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            columnGap: '8px',
                            padding: '10px 14px 10px 14px',
                            margin: '40px 0',
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
                                    background: `${backgroundColor}`,
                                    color: color1,
                                }}
                            />
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
                            height: '100%',
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
                                        marginTop: `${sideBar?.name === 'Support' ? '150px' : '10px'
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
                    {!isAdmin && <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '14px',
                            background: 'rgba(249, 250, 251, 1)',
                            padding: '20px 16px 20px 16px',
                            borderRadius: '8px',

                        }}
                    >
                        
                    </Box>}


                    <Divider sx={{ margin: '20px 0' }} />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ width: '40px', height: '40px', cursor: 'pointer' }}>
                            <img src={userAvatar} alt='log-out' />
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
                                        // color: "rgba(71, 84, 103, 1)",
                                        color: color1,
                                    }}
                                >
                                    Sienna Hewitt
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
                                    sienna@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: '20px', height: '20px', cursor: 'pointer' }}>
                            <LogoutIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar
