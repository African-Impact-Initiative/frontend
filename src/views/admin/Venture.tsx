import { Box, Typography } from '@mui/material'
import React from 'react'
import TopBanner from '../../../Admin/TopBanner/TopBanner'
import SelectionRow from '../../../Admin/SelectionRow/SelectionRow'
import VentureCard from '../../../Admin/VentureCard/VentureCard'
import VentureLogo1 from '../../../../assets/ventureLogo1.png'
import VentureLogo2 from '../../../../assets/VentureLogo2.png'
import VentureLogo3 from '../../../../assets/VentureLogo3.png'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'


export default function Venture() {
    const ventures = [
        {
            id: 1,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo1,
        },
        {
            id: 2,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo2,
        },
        {
            id: 3,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo3,
        },
        {
            id: 4,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo3,
        },
        {
            id: 5,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo1,
        },
        {
            id: 6,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo3,
        },
        {
            id: 7,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo1,
        },
    ]

    const action = () => {
        console.log('action__clicked')
    }
    return (
        <Box>
            <TopBanner
                title={'Ventures'}
                description="Explore and manage ventures here."
                icon={SettingsOutlinedIcon}
            // action={uploadAction}
            />
            <SelectionRow
                search={true}
                firstBox={true}
                secondBox={true}
                thirdBox={true}
                type="Search ventures"
                header1="Industries"
                header2="Cohorts"
                header3="Sort by"
                label1="Select"
                label2="Select"
                label3="A - Z"
            />
            <Box sx={{ marginBottom: '18px', textAlign: 'start' }}>
                <Typography
                    sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px' }}
                >
                    All Ventures
                </Typography>
            </Box>
            <Box
                sx={{
                    overflow: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                }}
            >
                {ventures?.map((venture) => (
                    <VentureCard
                        key={venture.id}
                        name={venture.name}
                        logo={venture.logo}
                        caption={venture.caption}
                        details={venture.details}
                        action={action}
                        category={venture.category}
                    />
                ))}
            </Box>
        </Box>
    )
}
