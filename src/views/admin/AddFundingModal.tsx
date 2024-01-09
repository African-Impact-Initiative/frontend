import { ClearOutlined, Search, WorkOutlineOutlined } from '@mui/icons-material'
import {
    Button,
    IconButton,
    InputBase,
    MenuItem,
    Paper,
    Switch,
    TextField,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



import React, { useState } from 'react'

const AddFundingModal = ({handleClose, action, setFundingModal }) => {
    

    const [team, setTeam] = useState(false)
    const [value, setValue] = React.useState(dayjs('2023-04-17'))



    const teams = [
        { label: 'Jona', value: 'Joan' },
        { label: 'Yinka', value: 'Yinka' },
        { label: 'Sule', value: 'Sule' },
        { label: 'Mike', value: 'Mike' },
        { label: 'Sam', value: 'Sam' }
    ]

    return (
        <Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    padding: '24px',
                    width: {md:'900px', xs: '100%'},
                    height:  {md:'720px', xs: '100%'},
                    borderRadius: '12px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '28px' }}
                    >
                        New funding opportunity
                    </Typography>
                    
                    <ClearOutlined 
                        sx={{ width: '30px', height: '30px' , color: 'rgba(102, 112, 133, 1)', cursor: 'pointer' }}
                        onClick={() => {
                            setFundingModal(false)
                        }}
                    />
                </Box>
                <Box sx={{  display: 'flex', columnGap: '16px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Box>
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                variant="p"
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Opportunity 
                            </Typography>
                            <Typography variant="p" sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Paper
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: {md:'418px', xs: '100'},
                                    height: {md: '40px', xs: '100px'},
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16 , ml: 2}}
                                    placeholder="Add the opportunity name"
                                    inputProps={{ 'aria-label': 'label search' }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                    <Box >
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                variant="p"
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Organization
                            </Typography>
                            <Typography variant="p" sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Paper
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: {md:'418px', xs: '100'},
                                    height: {md: '40px', xs: '100px'},
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16 , ml: 2}}
                                    placeholder="Add the organization name"
                                    inputProps={{ 'aria-label': 'label search' }}
                                />
                            </Paper>
                        </Box>
                        
                    </Box>
                </Box>               
                <Box >
                    <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                        <Typography
                            variant="p"
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px'
                            }}
                        >
                            Tags
                        </Typography>
                        <Typography variant="p" sx={{ color: '#F04438' }}>
                            *
                        </Typography>
                    </Box>
                    <TextField
                        // value={status}
                        select
                        label="Select tags for this opportunity"
                        size='small'
                        onChange={(e) => setTeam(e.target.value)}
                        sx={{
                            width: {md:'850px', xs: '100%'},
                            color: '#667085',
                            fontSize: '16px',
                        }}
                    >
                        <MenuItem value="">
                            <em>State</em>
                        </MenuItem>
                        {teams.map((state) => (
                            <MenuItem key={state.value} value={state.value}>
                                {state.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box >
                    <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                        <Typography
                            variant="p"
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px'
                            }}
                        >
                            Link
                        </Typography>
                        <Typography variant="p" sx={{ color: '#F04438' }}>
                            *
                        </Typography>
                    </Box>
                    <Box>
                        <Paper
                            component="form"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: { md: 850, xs: '100%' },
                                height: { md: 44, xs: '100%' },
                                borderRadius: 2,
                                boxShadow: 0,
                                border: '1px solid #D0D5DD'
                            }}
                        >
                            <InputBase
                                sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                placeholder="Add the link to the opportunity webpage or to the organization’s website"
                                inputProps={{ 'aria-label': 'company size' }}
                            />
                        </Paper>
                    </Box>
                </Box>             
                <Box sx={{  display: 'flex', columnGap: '26px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Box >
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                variant="p"
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Grant amount 
                            </Typography>
                            <Typography variant="p" sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '8px', width: '100%', display: 'flex', columnGap: '16px' }}>
                            <Paper
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: {md:'316px', xs: '100'},
                                    height: {md: '40px', xs: '100px'},
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                              
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16, ml: 2 }}
                                    placeholder="Enter the exact amount or a range"
                                    inputProps={{ 'aria-label': 'label search' }}
                                />
                            </Paper>
                            <Box sx={{display: 'flex', columnGap: '8px', alignItems: 'center'}}>
                                <Typography
                                    variant="p"
                                    sx={{
                                        color: '#344054',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '24px'
                                    }}
                                >
                                OR
                                </Typography>
                                <Switch
                                    // checked={isToggled}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />

                                <Typography
                                    variant="p"
                                    sx={{
                                        color: '#344054',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '24px'
                                    }}
                                >
                                The amount is variable
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Box>
                   
                </Box>
                <Box sx={{display: 'flex', columnGap: '26px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Box >
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                variant="p"
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                From
                            </Typography>
                            <Typography variant="p" sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box sx={{width: '100%' , display: 'flex', columnGap: '16px'}}>                        
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    <DatePicker
                                        label=""
                                        value={value}
                                        size="small"
                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <Box sx={{display: 'flex', columnGap: '4px', alignItems: 'center'}}>
                                <Typography
                                    variant="p"
                                    sx={{
                                        color: '#344054',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '24px'
                                    }}
                                >
                                OR
                                </Typography>
                                <Switch
                                    // checked={isToggled}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />

                                <Typography
                                    variant="p"
                                    sx={{
                                        color: '#344054',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '24px'
                                    }}
                                >
                                Applications accepted on an ongoing basis
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                        <Typography
                            variant="p"
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px'
                            }}
                        >
                            Description
                        </Typography>
                        <Typography variant="p" sx={{ color: '#F04438' }}>
                            *
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '10px' }}>
                        <textarea
                            style={{
                                width: '100%',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                borderRadius: '8px',
                                padding: '12px',
                                fontSize: '16px',
                                lineHeight: '24px',
                                fontWeight: '400',
                                fontFamily: ' inter',
                                height: {xs: '100%', md: '0px'},
                                color: '#667085'
                            }}
                            placeholder="Briefly describe the opportunity"
                            rows={3}
                            onChange={(e) => {
                                console.log(e)
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: '10px',
                        marginTop: '10px'
                    }}
                >
                    <Button
                        sx={{
                            width: '100%',
                            height: '44px',
                            border: '1px solid rgba(208, 213, 221, 1)',
                            borderRadius: '8px',
                            textTransform: 'none',
                        }}
                        onClick={handleClose}
                    >
                        <Typography
                            sx={{
                                color: 'rgba(52, 64, 84, 1)',
                                fontWeight: 600,
                                fontSize: '16px',
                            }}
                        >
                        Discard
                        </Typography>
                    </Button>
                    <Button
                        sx={{
                            width: '100%',
                            height: '44px',
                            border: '1px solid #FFFFFF',
                            borderRadius: '8px',
                            background: 'rgba(220, 104, 3, 1)',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#E8822A' }
                        }}
                        onClick={action}
                    >
                        <Typography
                            sx={{
                                color: '#FFFFFF',
                                fontWeight: 600,
                                fontSize: '16px',
                            }}
                        >
                        Save as draft
                        </Typography>
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default AddFundingModal