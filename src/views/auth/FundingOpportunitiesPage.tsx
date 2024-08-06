import { Box, Typography, Button, Divider, InputAdornment, TextField, MenuItem, IconButton, Icon, Grid } from '@mui/material'
import { useState } from 'react'
import { Add, Search, MoreHorizRounded, ArrowForwardRounded } from '@mui/icons-material'
import { fundingPageData } from '../../utils/devUtils'
import {  } from '../../components/utils/tableUtils.ts'


import VBPageHeader from '../../components/VBPageHeader'
import FundingCard from '../../components/fundingOpportunities/fundingCard.tsx'

const FundingOpportunitiesPage = () => {
    const [value, setValue] = useState('1')
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    // const [sortBy, setSortBy] = useState('')
    const [fundings, setFundings] = useState(fundingPageData)

    // const categories = [...new Set(taskPageData.map(row => row.category))]

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearch(event.target.value)
    //     setRows(taskPageData.filter(row => (
    //         row.assignment.includes(search) 
    //         && (category === '' || row.category === category))
    //     ))
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

    // const handleClearAll = () => {
    //     setSearch('')
    //     setCategory('')
    //     // setSortBy('')
    //     setRows(taskPageData)   // clear all button will also reset the filtered data back to original
    // }

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
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        marginBottom: '12px',
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
                                    Alert Tags
                                </Typography>
                            </Box>

                            
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                                <Typography 
                                    sx={{
                                        padding: '2px 8px 2px 8px',
                                        borderRadius: '16px',
                                        border: '1px solid #B2DDFF',
                                        backgroundColor: '#EFF8FF',
                                        color: '#175CD3',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        lineHeight: '18px'

                                    }}
                                >
                                    Product
                                </Typography>
                                <Typography 
                                    sx={{
                                        padding: '2px 8px 2px 8px',
                                        borderRadius: '16px',
                                        border: '1px solid #ABEFC6',
                                        backgroundColor: '#ECFDF3',
                                        color: '#067647',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        lineHeight: '18px'

                                    }}
                                >
                                    Marketing
                                </Typography>
                                <Typography 
                                    sx={{
                                        padding: '2px 8px 2px 8px',
                                        borderRadius: '16px',
                                        border: '1px solid #C7D7FE',
                                        backgroundColor: '#EEF4FF',
                                        color: '#3538CD',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        lineHeight: '18px'

                                    }}
                                >
                                    Management
                                </Typography>
                                <Typography 
                                    sx={{
                                        padding: '2px 8px 2px 8px',
                                        borderRadius: '16px',
                                        border: '1px solid #F9DBAF',
                                        backgroundColor: '#FEF6EE',
                                        color: '#B93815',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        lineHeight: '18px'

                                    }}
                                >
                                    Operations
                                </Typography>
                                <Typography 
                                    sx={{
                                        padding: '2px 8px 2px 8px',
                                        borderRadius: '16px',
                                        border: '1px solid #FECDCA',
                                        backgroundColor: '#FEF3F2',
                                        color: '#B42318',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        lineHeight: '18px'

                                    }}
                                >
                                    Add more...
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            // backgroundColor: 'red',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                            
                            // justifyContent: 'space-between',
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
                            <Typography
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
                                {/* {categories.map((category) => (
                                        <MenuItem value={category}>
                                            {category}
                                        </MenuItem>
                                    ))} */}
                            </TextField>
                        </Box>

                        <Button
                            // onClick={handleClearAll}
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
                    {fundings.map(funding => <FundingCard funding={funding} />) }
                    
                </Box>
            </Box>
        </Box>
    )
}

export default FundingOpportunitiesPage