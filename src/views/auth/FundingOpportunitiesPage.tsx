import { Box, Typography, Button, Divider, InputAdornment, TextField, MenuItem, IconButton, Icon, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Add, Search, MoreHorizRounded, ArrowForwardRounded } from '@mui/icons-material'
import { fundingPageData } from '../../utils/devUtils'


import VBPageHeader from '../../components/VBPageHeader'
import FundingCard from '../../components/fundingOpportunities/fundingCard.tsx'
const locations = [
    {
        name: 'South Africa',
        borderColor: '#B2DDFF',
        backgroundColor: '#EFF8FF',
        color: '#175CD3'
    },
    {
        name: 'Rwanda',
        borderColor: '#ABEFC6',
        backgroundColor: '#ECFDF3',
        color: '#067647'
    },
    {
        name: 'Chad',
        borderColor: '#C7D7FE',
        backgroundColor: '#EEF4FF',
        color: '#3538CD'
    },
    {
        name: 'Remote',
        borderColor: '#F9DBAF',
        backgroundColor: '#FEF6EE',
        color: '#B93815'
    }
]
const industries = [
    {
        name: 'Education',
        borderColor: '#B2DDFF',
        backgroundColor: '#EFF8FF',
        color: '#175CD3'
    },
    {
        name: 'Social',
        borderColor: '#ABEFC6',
        backgroundColor: '#ECFDF3',
        color: '#067647'
    },
    {
        name: 'Health',
        borderColor: '#C7D7FE',
        backgroundColor: '#EEF4FF',
        color: '#3538CD'
    },
    {
        name: 'Research',
        borderColor: '#F9DBAF',
        backgroundColor: '#FEF6EE',
        color: '#B93815'
    },
    {
        name: 'Technology',
        borderColor: '#F9DBAF',
        backgroundColor: '#FEF6EE',
        color: '#B93815'
    }
]

const FundingOpportunitiesPage = () => {
    const [search, setSearch] = useState('')
    // const [category, setCategory] = useState('')
    // const [sortBy, setSortBy] = useState('')
    const [fundings, setFundings] = useState(fundingPageData)
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null)


    const toggleIndustry = (industry: string) => {
        setSelectedIndustry((prevSelected) => (prevSelected === industry ? null : industry))
    }

    const toggleLocation = (location : string) => {
        setSelectedLocation((prevSelected) => (prevSelected === location ? null : location))
    }

    useEffect(() => {
        const filteredFundings = fundingPageData.filter((funding) => {
            const industryMatch = !selectedIndustry || funding.industry === selectedIndustry
            const locationMatch = !selectedLocation || funding.location === selectedLocation
            return industryMatch && locationMatch
        })

        setFundings(filteredFundings)
    }, [selectedIndustry, selectedLocation])

    // const categories = [...new Set(taskPageData.map(row => row.category))]

    // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearch(event.target.value)
    //     setFundings((prevFundings) => (prevFundings.filter(funding => (
    //         funding.name.includes(event.target.value) 
    //     ))))
    // }

    // const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCategory(event.target.value)
    //     setRows(taskPageData.filter(row => (
    //         row.assignment.includes(search) 
    //         && (event.target.value === '' || row.category === event.target.value))
    //     ))
    // }

    // const handleSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSortBy(event.target.value)
    // }

    const handleClearAll = () => {
        setSearch('')
        setSelectedIndustry('')
        setSelectedLocation('')
        setFundings(fundingPageData)   // clear all button will also reset the filtered data back to original
    }

    return (
        <Box sx={{ padding: '12px 32px 20px 32px' }}>
            <VBPageHeader
                title='Funding Opportunities'
                subTitle='Find the latest funding opportunities to help your organization grow. '
                noHr={false}
            />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <Box sx={{ padding: '20px', border: '1px solid #EAECF0', borderRadius: '16px', marginBottom: '32px' }}>
                    <Box sx={{
                        display: 'flex',
                        // justifyContent: 'space-between',
                        flexDirection: 'column',
                        gap: '20px',
                        marginBottom: '20px',
                        // backgroundColor: 'blue',
                    }}>
                        <Box>
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    width: '100%',
                                    paddingBottom: '8px',
                                    alignItems: 'center', 
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        lineHeight: '28px',
                                        color: '#101828',
                                    }}
                                >
                                    Alert Tags - Location
                                </Typography>
                            </Box>

                            
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                                {locations.map((loc, index) => (
                                    <Typography
                                        key={index}
                                        onClick={() => toggleLocation(loc.name)}
                                        sx={{
                                            padding: '2px 8px',
                                            borderRadius: '16px',
                                            border: `1px solid ${loc.borderColor}`,
                                            backgroundColor: loc.backgroundColor,
                                            color: loc.color,
                                            fontSize: '12px',
                                            // fontWeight: '500',
                                            lineHeight: '18px',
                                            fontWeight: selectedLocation === loc.name ? '600' : '500',
                                        }}
                                    >
                                        {loc.name}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                        <Box>
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    width: '100%',
                                    paddingBottom: '8px',
                                    alignItems: 'center', 
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        lineHeight: '28px',
                                        color: '#101828',
                                    }}
                                >
                                    Alert Tags - Industry
                                </Typography>
                            </Box>

                            
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                                {industries.map((ind, index) => (
                                    <Typography
                                        key={index}
                                        onClick={() => toggleIndustry(ind.name)}
                                        sx={{
                                            padding: '2px 8px',
                                            borderRadius: '16px',
                                            border: `1px solid ${ind.borderColor}`,
                                            backgroundColor: ind.backgroundColor,
                                            color: ind.color,
                                            fontSize: '12px',
                                            // fontWeight: '500',
                                            lineHeight: '18px',
                                            fontWeight: selectedIndustry === ind.name ? '600' : '500',
                                        }}
                                    >
                                        {ind.name}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Box>
                            <Typography
                                variant='body1'
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px',
                                }}
                                gutterBottom
                            >
                                    Search Fundraiser/Opportunity
                            </Typography>
                            <TextField
                                variant='outlined'
                                placeholder='Search'
                                value={search}
                                // onChange={handleSearchChange}
                                size='small'
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '24px'
                                    // ask about the gray color here. is not exactly the same gray. 
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>


                        <Box>
                            {/* <Typography
                                variant='body1'
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px',
                                }}
                                gutterBottom
                            >
                                    Type
                            </Typography>
                            <TextField
                                select
                                variant='outlined'
                                value={category}
                                // onChange={handleCategoryChange}
                                size='small'
                                sx={{
                                    width: '300px',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '24px',
                                }}
                            >
                                <MenuItem value=''>
                                    <em>Select</em>
                                </MenuItem>
                                {{categories.map((category) => (
                                        <MenuItem value={category}>
                                            {category}
                                        </MenuItem>
                                    ))}}
                            </TextField> */}
                        </Box>

                        <Button
                            onClick={handleClearAll}
                            sx={{
                                ml: 'auto',
                                mt: 'auto',
                                height: '44px',
                                width: '100px',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '600',
                                textTransform: 'none',
                                color: '#344054',
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            }}
                        >
                                Clear all
                        </Button>
                    </Box>
                </Box>




                <Box sx={{
                    display: 'flex',
                    columnGap: '24px',
                    rowGap: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {fundings.length > 0 ? fundings.map(funding => <FundingCard funding={funding} />)
                        :
                        <Typography>No funding opportunities found.</Typography>}
                    {/* {fundings.map(funding => <FundingCard funding={funding} />) } */}
                    
                </Box>
            </Box>
        </Box>
    )
}

export default FundingOpportunitiesPage