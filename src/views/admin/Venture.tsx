import { Box, Typography } from '@mui/material'
import VentureLogo from '../../assets/venture_logo_temp.png'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { VentureCard } from '../../components/VBCards'
import VBSelectionRow from '../../components/VBSelectionRow'
import VBTopBanner from '../../components/VBTopBanner'

const Venture = () => {
    const ventures = [
        {
            id: 1,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo,
        },
        {
            id: 2,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo,
        },
        {
            id: 3,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo,
        },
        {
            id: 4,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo,
        },
        {
            id: 5,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo,
        },
        {
            id: 6,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo,
        },
        {
            id: 7,
            name: 'VirtuWardrobe',
            caption: 'Virtual Fashion Retail',
            details:
                'VirtuWardrobe revolutionizes shopping with virtual try-ons and AI-driven fashion suggestions for style enthusiasts.',
            category: 'Fashion',
            logo: VentureLogo,
        },
    ]

    const action = () => {
        console.log('action__clicked')
    }

    return (
        <Box>
            <VBTopBanner
                title={'Ventures'}
                description="Explore and manage ventures here."
                Icon={SettingsOutlinedIcon}
                action={action}
            />
            <VBSelectionRow
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

export default Venture