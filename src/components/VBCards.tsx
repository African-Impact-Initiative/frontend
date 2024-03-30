import { Box, Button, Divider, Typography, Card, CardContent } from '@mui/material'
import React from 'react'
import StoreIcon from '@mui/icons-material/Store'

export interface IAboutCardProps {
    title: string,
    description: string,
    image: string,
    address?: string
}

export const AboutCard = ({ title, description, image, address }: IAboutCardProps) => {
    // renders 2 cards one for sm screens and other for larger screens
    return (
        <>
            <Card sx={{display: {xs: 'flex', sm: 'none'}, border: 'none', backgroundColor: 'transparent', paddingLeft: '20px', width: '100%', height: '155px', }} variant='outlined'>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%'}}>
                    <img src={image} alt={title} style={{borderRadius: '50%', padding: '10px', width: '100px', height: '100px'}} />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '75%'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography component='div' variant='h5' fontWeight='bold'>
                                {title}
                            </Typography>
                        </Box>
                        <Typography variant='subtitle1' color='text.secondary' component='div'>
                            {description}
                        </Typography>
                        {address && <Typography variant='subtitle1' color='text.secondary' component='div'>
                            {address}
                        </Typography>}
                    </CardContent>
                </Box>
            </Card>
            <Card sx={{display: {xs: 'none', sm: 'inline-block'}, width: '100%', height: '320px', border: 'none', backgroundColor: 'transparent', transition: 'ease 0.5s', textAlign: 'center', padding: '30px', '&:hover': {marginTop: '-10px', marginBottom: '10px'}}} variant='outlined'>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={image} alt={title} style={{borderRadius: '50%', padding: '10px', marginTop: '10px', height: '100px', width: '100px'}} />
                </Box>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography component='div' variant='h6' fontWeight='bold' sx={{overflow: 'hidden', whiteSpace: 'no-wrap'}}>
                            {title}
                        </Typography>
                    </Box>
                    <Typography variant='subtitle1' color='text.secondary' component='div' sx={{height: '36px'}}>
                        {description}
                    </Typography>
                    {address && <Typography variant='subtitle1' color='text.secondary' component='div'>
                        {address}
                    </Typography>}
                </CardContent>
            </Card>
        </>
    )
}

export interface IVentureCardProps {
    name: string,
    caption: string | null,
    category: string | null,
    logo: string | null,
    details: string | null,
    action: (e: React.MouseEvent<HTMLElement>) => void
}

export const VentureCard = ({ name, caption, logo, details, category, action }: IVentureCardProps) => {
    return (
        <Box
            sx={{
                width: {md:'344px', xs: '100%'},
                border: '1px solid rgba(234, 236, 240, 1)',
                borderRadius: '12px',
            }}
        >
            <Box sx={{ padding: '20px', height: '180px' }}>
                <Box sx={{ display: 'flex', columnGap: '15px' }}>
                    {logo?
                        <img src={logo} alt='logo' style={{ width: '40px', height: '40px' }} />
                        : <StoreIcon sx={{backgroundColor: '#EAECF0', borderRadius: '20px', padding: '7px', width: '40px', height: '40px'}} />}
                    <Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        lineHeight: '24px',
                                        color: 'rgba(16, 24, 40, 1)',
                                    }}
                                >
                                    {name}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    color: 'rgba(71, 84, 103, 1)',
                                }}
                            >
                                {caption}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ margin: '18px 0', textAlign: 'start' }}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '20px',
                            color: '#475467',
                        }}
                    >
                        {details?.length &&  details?.length > 125? `${details?.substring(0, 125).trim()}...` : details}
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <Button
                        sx={{
                            textTransform: 'none',
                            border: '1px solid rgba(208, 213, 221, 1)',
                            height: '36px',
                            width: '105px',
                            borderRadius: '8px'
                        }}
                        onClick={action}
                    >
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                lineHeight: '20px',
                                color: 'rgba(71, 84, 103, 1)',
                            }}
                        >
                            Learn More
                        </Typography>
                    </Button>
                </Box>
                {category && <Box
                    sx={{
                        padding: '7px',
                        borderRadius: '20px',
                        background: 'rgba(249, 250, 251, 1)',
                        border: '1px solid #EAECF0',
                        fontSize: '12px',
                        fontWeight: 500,
                        lineHeight: '20px',
                    }}
                >
                    <Typography>{category}</Typography>
                </Box>}
            </Box>
        </Box>
    )
}
