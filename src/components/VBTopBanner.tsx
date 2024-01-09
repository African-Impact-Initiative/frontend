import { Box, Button, SvgIconTypeMap, Typography } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React from 'react'
import { VBIconButton } from './VBButtons'

export interface ITopBannerProps {
    title: string,
    description: string,
    actionText: string,
    action: (e: React.MouseEvent<HTMLElement>) => void,
    Icon?: OverridableComponent<SvgIconTypeMap<NonNullable<unknown>, 'svg'>> & {
        muiName: string
    },
}

const VBTopBanner = ({ title, description, action, actionText, Icon }: ITopBannerProps) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{textAlign: 'start'}}>
                <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 30 , lineHeight: '38px'}}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 400, fontSize: 16 , lineHeight: '24px', color: '#475467', marginTop: '4px'}}>
                        {description}
                    </Typography>
                </Box>
            </Box>
            <Box>
                {Icon && <VBIconButton Icon={Icon} onClick={action} aria={{
                    label: 'top-banner-button',
                    controls: 'top-banner-button',
                    popup: false
                }} />}
                {!Icon && (
                    <Button sx={{ background: 'rgba(220, 104, 3, 1)', borderRadius: '8px', width: '100%', height: '40px', '&:hover': { backgroundColor: '#E8822A' }, }} onClick={action}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: 14,
                                textTransform: 'none',
                                color: '#FFFFFF',
                            }}
                        >
                            {actionText}
                        </Typography>
                    </Button>
                )}
            </Box>
        </Box>
    )
}

export default VBTopBanner