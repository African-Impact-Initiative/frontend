import { SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'

export interface IPageHeader {
    title: string,
    subTitle: string,
    noHr: boolean
}

const VBPageHeader = ({ title, subTitle, noHr }: IPageHeader) => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    alignItems: 'center',
                    marginBottom: '10px',
                    textAlign: 'left'

                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <Typography
                        sx={{
                            fontSize: '30px',
                            fontWeight: '600',
                            lineHeight: '38px',
                            color: '#101828'
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#475467',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '24px'
                        }}
                    >
                        {subTitle}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', columnGap: '30px' }}>
                    <Box>
                        <SearchOutlined sx={{ fontSize: '20px', color:'rgba(102, 112, 133, 1)', cursor:'pointer' }} />
                    </Box>
                    <Box>
                        {' '}
                        <SettingsOutlined sx={{ fontSize: '20px', color: 'rgba(102, 112, 133, 1)', cursor:'pointer' }} />
                    </Box>
                </Box>
            </Box>
            {!noHr && <Divider sx={{ marginBottom: '30px' }} />}
        </Box>
    )
}

export default VBPageHeader