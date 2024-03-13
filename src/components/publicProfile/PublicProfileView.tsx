import { ArrowOutwardOutlined, FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Button, Divider, Switch, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import PathConstants from '../../navigation/pathConstants';
import { FC } from 'react';

export type PublicProfileViewType = {
    name: string,
    tagline: string,
    aboutUs: string,
    country: string,
    size: string,
    website: string,
    email: string,
    linkedin: string,
    twitter: string,
    facebook: string,
    instagram: string,
    isEditing: boolean,
    toggleView: (() => void) | null;
    handleSubmit: (() => void) | null;
}

const PublicProfileView: FC<PublicProfileViewType> = (prop) => {
    const navigate = useNavigate();

    const {
        name,
        tagline,
        aboutUs,
        country,
        size,
        website,
        email,
        linkedin,
        twitter,
        facebook,
        instagram,
        isEditing,
        toggleView,
        handleSubmit
    } = prop;

    return (
        <Box>
            <Box
              sx={{
                backgroundColor: '#EAECF0',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '240px',
                width: '100%'
              }} 
            />

            <Box
              sx={{
                height: { md: '185px', xs: '100%' },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '-50px',
                padding: '20px',
                flexDirection: { md: 'row', xs: 'column' },
              }}
            >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    columnGap: '24px', 
                    flexDirection: { md: 'row', xs: 'column' },  
                  }}
                >
                    <Box
                      sx={{
                        display: 'flex',
                        position: 'relative',
                        borderRadius: '100px',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                        <Box
                          sx={{
                            display: 'flex',
                            height: '160px',
                            width: '160px',
                            border: '4px solid #FFFFFF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '100%',
                            backgroundColor: '#EAECF0'
                          }}
                        >
                            <Typography
                              sx={{
                                color: '#475467',
                                fontWeight: '600',
                                lineHeight: '72px',
                                fontSize: '60px',
                              }}
                            >
                                DP
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                          sx={{
                            fontSize: '30px',
                            fontWeight: '600',
                            lineHeight: '38px',
                            color: '#101828'
                          }}
                        >
                            {name}
                        </Typography>
                    </Box>
                </Box>
                { isEditing && 
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#344054',
                      }}
                    >
                        <Box
                          sx={{
                            display: 'flex',
                            columnGap: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: { xs: 'start' },
                            width: '100%'
                          }}
                        >
                            <Switch
                              checked={true}
                              onChange={toggleView}
                              inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography
                              sx={{
                                color: '#344054',
                                fontWeight: '500',
                                lineHeight: '24px',
                                fontSize: '16px'
                              }}
                            >
                                Switch to private view
                            </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            columnGap: '20px',
                            justifyContent: 'flex-end',
                            padding: '40px'
                          }}
                        >
                            <Button
                              size='large'
                              variant='outlined'
                              sx={{
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                color: '#344054',
                                lineHeight: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                height: '40px',
                                width: { md: '80px', xs: '100%' },
                                textTransform: 'none'
                              }}
                              onClick={() => {
                                navigate(PathConstants.dashboard);
                              }}
                            >
                                Cancel
                            </Button>
                            <Button
                              type='submit'
                              variant='contained'
                              sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: '40px',
                                width: { md: '127px', xs: '100%' },
                                textTransform: 'none',
                                fontSize: '14px'
                              }}
                              onClick={handleSubmit}
                            >
                                Save changes
                            </Button>
                        </Box>
                    </Box>
                }
            </Box>

            <Box 
              sx={{ 
                padding: '40px', 
                display: 'flex', 
                columnGap: '40px', 
                flexDirection: {md: 'row', xs: 'column'}, 
                width: '100%', 
                height: '100%'
              }}
            >
                <Box sx={{ width: {md:'68%', xs: '100%'} }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'start' 
                        }}
                    >
                        <Typography
                          sx={{
                            fontSize: '18px',
                            fontWeight: '600',
                            fontHeight: '28px',
                            color: '#101828'
                          }}
                        >
                            Overview
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            fontHeight: '20px',
                            color: '#475467',
                            marginTop: '4px'
                          }}
                        >
                            Learn about the company's values, mission, and vision.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box>
                        <Box 
                          sx={{ 
                            marginTop: '32px', 
                            display: 'flex', 
                            columnGap: '6px' 
                            }}
                        >
                            <Typography
                              sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px'
                              }}
                            >
                                Tagline
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '8px' }}>
                            <Typography
                              sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '24px'
                              }}
                            >
                                { tagline }
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box 
                          sx={{ 
                            marginTop: '40px', 
                            display: 'flex', 
                            columnGap: '6px' 
                          }}
                        >
                            <Typography
                              sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '20px'
                              }}
                            >
                                About
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '8px' }}>
                            <Typography
                              sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '24px'
                              }}
                            >
                                { aboutUs }
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                      sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        marginTop: '48px', 
                        textAlign: 'start' 
                      }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                              sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                                linetHeight: '28px',
                                color: '#101828'
                              }}
                            >
                                Leadership
                            </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                          }}
                        >
                            Take a look at the leadership of the company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '48px',
                        textAlign: 'start'
                      }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                            <Typography
                              sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                                linetHeight: '28px',
                                color: '#101828'
                              }}
                            >
                                Open positions
                            </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467',
                            amrginTop: '4px'
                          }}
                        >
                            Explore open positions in the company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '48px',
                        textAlign: 'start'
                      }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                            <Typography
                              sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                                linetHeight: '28px',
                                color: '#101828'
                              }}
                            >
                                More about the startup
                            </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467',
                            marginTop: '4px'
                          }}
                        >
                            Explore articles featuring the company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px', marginBottom: '32px' }} />
                </Box>

                <Box 
                  sx={{ 
                    width: {md:'32%', xs: '100%'},
                    paddingRight: '32px' 
                  }}
                >
                    <Box
                      sx={{
                        border: '1px solid #D0D5DD',
                        height: 'fit',
                        width: {md:'360px', xs: '100%'},
                        padding: '26px',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                        <Box sx={{ width: '100%'}}>
                            <Box
                              sx={{ 
                                display: 'flex', 
                                columnGap: '6px', 
                                width: '100%'
                              }}
                            >
                                <Typography
                                  sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                  }}
                                >
                                    Location
                                </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '20px',
                                marginTop: '10px'
                              }}
                            >
                                <Typography
                                  sx={{ 
                                    color: '#344054', 
                                    fontWeight: '500', 
                                    fontSize: '16px', 
                                    fontHeight: '24px' }}
                                >
                                    { country }
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%'}}>
                                <Box
                                  sx={{ 
                                    marginTop: '24px', 
                                    display: 'flex', 
                                    columnGap: '6px',  
                                  }}
                                >
                                    <Typography
                                      sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                      }}
                                    >
                                        Industries
                                    </Typography>                                
                                </Box>
                                <Box
                                  sx={{
                                    marginTop: '12px',
                                    display: 'flex',
                                    columnGap: '10px',
                                    flexDirection: { md: 'row', xs: 'column' },
                                    rowGap: { xs: '10px', md: '0px' }
                                  }}
                                >
                                    <Box
                                      sx={{
                                        border: '1px solid #E9D7FE',
                                        height: '22px',
                                        width: '110px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '14px',
                                        color: '#6941C6',
                                        backgroundColor: '#E9D7FE',
                                        columnGap: '10px'
                                      }}
                                    >
                                        <Typography
                                          sx={{
                                            color: '#6941C6',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                            fontSize: '14px'
                                          }}
                                        >
                                            FinTech
                                        </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        border: '1px solid #C7D7FE',
                                        height: '22px',
                                        width: '110px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '14px',
                                        color: '#6941C6',
                                        backgroundColor: '#C7D7FE',
                                        columnGap: '10px'
                                      }}
                                    >
                                        <Typography
                                          sx={{
                                            color: '#3538CD',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                            fontSize: '14px'
                                          }}
                                        >
                                            AI-driven
                                        </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        border: '1px solid #FCCEEE',
                                        height: '22px',
                                        width: '110px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '14px',
                                        color: '#6941C6',
                                        backgroundColor: '#FCCEEE',
                                        columnGap: '10px'
                                      }}
                                    >
                                        <Typography
                                          sx={{
                                            color: '#C11574',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                            fontSize: '14px'
                                          }}
                                        >
                                            Software
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ 
                                    marginTop: '24px', 
                                    display: 'flex', 
                                    columnGap: '6px' 
                                    }}
                                >
                                    <Typography
                                        sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                        }}
                                    >
                                        Size
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                        color: '#344054',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        lineHeight: '24px'
                                        }}
                                    >
                                        { size } employees
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                    <Typography
                                        sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                        }}
                                    >
                                        Website
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '10px',
                                    color: '#B54708',
                                    textDecoration: 'none'
                                    }}
                                    component="a"
                                    href={"https://"+website}
                                >
                                    <Typography
                                        sx={{
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        lineHeight: '24px'
                                        }}
                                    >
                                        { website }
                                    </Typography>
                                    <ArrowOutwardOutlined style={{ height: '20px', width: '20px' }} />
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ 
                                    marginTop: '24px', 
                                    display: 'flex', 
                                    columnGap: '6px' 
                                    }}
                                >
                                    <Typography
                                        sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                        }}
                                    >
                                        Email
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '10px',
                                    color: '#B54708',
                                    textDecoration: 'none'
                                    }}
                                    component="a"
                                    href={`mailto:${email}`}
                                >
                                    <Typography
                                        sx={{
                                        color: '#B54708',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        lineHeight: '24px'
                                        }}
                                    >
                                        { email }
                                    </Typography>
                                    <ArrowOutwardOutlined style={{ height: '20px', width: '20px' }} />
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px' }}>
                                    <Typography
                                        sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                        }}
                                    >
                                        Social media
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ 
                                    display: 'flex', 
                                    columnGap: '14px', 
                                    marginTop: '8px' 
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: '#344054',
                                            textDecoration: 'none'
                                        }}
                                        component="a"
                                        href={"https://"+twitter}
                                    >
                                        <Twitter />
                                    </Box>
                                    <Box
                                        sx={{
                                            color: '#344054',
                                            textDecoration: 'none'
                                        }}
                                        component="a"
                                        href={"https://"+facebook}
                                    >
                                        <FacebookOutlined />
                                    </Box>
                                    <Box
                                        sx={{
                                            color: '#344054',
                                            textDecoration: 'none'
                                        }}
                                        component="a"
                                        href={"https://"+linkedin}
                                    >
                                        <LinkedIn />
                                    </Box>
                                    <Box
                                        sx={{
                                            height: '20px',
                                            width: '20px',
                                            border: '3px  solid #98A2B3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderRadius: '5px',
                                            justifyContent: 'center',
                                            color: '#344054',
                                            textDecoration: 'none'
                                        }}
                                        component="a"
                                        href={"https://"+instagram}
                                    >
                                        <Instagram />
                                    </Box>
                                </Box>                                    
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PublicProfileView;