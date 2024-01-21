import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { Box, Typography } from '@mui/material'

export interface IBreadCrumb {
    breadCrumbKey: string,
    breadCrumbs: Array<{
        name: string,
        link: string,
    }>
}

const VBBreadCrumb = ({ breadCrumbs, breadCrumbKey }: IBreadCrumb) => {
    const bold = 600
    const light = 500
    const decrement = 1

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                rowGap: '7px',
                marginBottom: '4px',
            }}
        >
            {breadCrumbs.map((crumb, index) => (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        columnGap: '4px',
                    }}
                    key={`${breadCrumbKey}-${crumb.name}-${index}`}
                >
                    <a href={crumb.link} style={{ textDecoration: 'none' }}>
                        <Typography component='span'
                            sx={{
                                fontWeight: `${index == breadCrumbs.length - decrement ? bold : light}`,
                                background: `${
                                    index == breadCrumbs.length - decrement && 'rgba(249, 250, 251, 1)'
                                }`,
                                padding: `${index == breadCrumbs.length - decrement && '5px'}`,
                                color: `${
                                    index == breadCrumbs.length - decrement
                                        ? 'rgba(71, 84, 103, 1)'
                                        : 'rgba(52, 64, 84, 1)'
                                }`,
                            }}
                        >
                            {crumb?.name}
                        </Typography>
                    </a>
                    {/* prevent it from showing after last crumb title */}
                    {index != breadCrumbs.length - decrement && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                // paddingTop:'3px'
                            }}
                        >
                            <a href={crumb.link} style={{ textDecoration: 'none' }}>
                                <ArrowForwardIosOutlinedIcon
                                    sx={{
                                        color: 'rgba(208, 213, 221, 1)',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                    }}
                                />
                            </a>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    )
}

export default VBBreadCrumb