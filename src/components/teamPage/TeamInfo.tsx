import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'

interface TeamInfoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iconUrl: React.ComponentType<any>;
    name: string; 
    count: string;
    arrayOfImages: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.ComponentType<any>;
}

const TeamInfo = (props: TeamInfoProps) => {
    const { iconUrl: IconUrl, name, count, arrayOfImages, icon: Icon } = props

    return (
        <Box sx={{width: '100%'}}>
            <Card
                sx={{
                    border: '1px solid #D0D5DD',
                    width: {md: '349px', xs: '100%', },
                    borderRadius: '18px',
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '25px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    border: '1px solid #EAECF0',
                                    display: 'flex',
                                    borderRadius: '6px',
                                    height: '32px',
                                    width: '32px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: 1,
                                }}
                            >
                                <IconUrl
                                    sx={{
                                        height: '16px',
                                        width: '16px',
                                        cursor: 'pointer',
                                        color: '#344054'

                                    }}
                                />
                            </Box>
                            <Box>
                                <Icon sx={{ cursor: 'pointer', height: '20px', width: '20px', color: '#98A2B3' }} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: {md: 'space-between', xs: 'start'},
                                flexDirection: {md: 'row', xs: 'column'}
                            }}
                        >
                            <Box sx={{textAlign: {xs: 'start', md: 'start'}}}>
                                <Typography
                                    variant='body1'
                                    sx={{
                                        color: '#101828',
                                        fontWeight: '600',
                                        fontSize: '20px',
                                        lineHeight: '30px',
                                    }}
                                >
                                    {name}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', paddingLeft: {xs: '20px', md: '0px'} }}>
                                <Box sx={{ display: 'flex', alignItems: 'center',  }}>
                                    {arrayOfImages.map((image) => (
                                        <Box sx={{ flexDirection: 'row' }} key={image}>
                                            <Box
                                                sx={{
                                                    width: '40px',
                                                    height: '40px',
                                                    marginLeft: '-26px',
                                                }}
                                            >
                                                <img src={image} alt='images' style={{ width: '24px', height: '24px' }} />
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>

                                <Box
                                    sx={{
                                        backgroundColor: '#EAECF0',
                                        border: '1px solid ##EAECF0',
                                        lineHeight: '24px',
                                        borderRadius: '24px',
                                        width: '24px',
                                        height: '26px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: '-20px',
                                    }}
                                >
                                    <Typography variant='body1' sx={{ fontSize: '12px', fontWeight: '600', lineHeight: '18px' }}> +9</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
                <Divider sx={{ width: '100%', marginTop: '20px' }} />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '16px',
                    }}>
                    <Box
                        sx={{
                            border: '1px solid #D0D5DD',
                            height: '28px',
                            width: '100px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '6px',
                            padding: '6px',
                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid green',
                                height: '10px',
                                width: '10px',
                                backgroundColor: 'green',
                                borderRadius: '20px',
                            }}
                        ></Box>
                        <Box
                            sx={{
                                color: '#344054',
                                fontWeight: '500',
                                lineHeight: '20px',
                                fontSize: '14px',
                                cursor: 'pointer'
                            }}
                        >
                            {count}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            color: '#B54708',
                            lineHeight: '20px',
                            fontweight: '600',
                            fontSize: '14px',
                            cursor: 'pointer'
                        }}
                    >
                        See more
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default TeamInfo
