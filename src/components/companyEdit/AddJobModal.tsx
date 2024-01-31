import { ClearOutlined, Search, WorkOutlineOutlined } from '@mui/icons-material'
import { Button, IconButton, InputBase, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

const AddJobModal = () => {
    const [, setTeam] = useState('')

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
                    width: {md:'640px', xs: '100%'},
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
                    <Box
                        sx={{
                            border: '1px solid #EAECF0',
                            width: '48px',
                            height: '48px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            borderRadius: '8px',
                            boxShadow: 2
                        }}
                    >
                        <WorkOutlineOutlined sx={{ width: '30px', height: '30px' }} />
                    </Box>
                    <ClearOutlined sx={{ width: '30px', height: '30px' }} />
                </Box>
                <Box sx={{ marginTop: '16px' }}>
                    <Typography
                        variant='h5'
                        sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '28px' }}
                    >
                        Add job
                    </Typography>
                    <Typography
                        sx={{
                            color: '#475467',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px'
                        }}
                    >
                        List a new job on your company’s public profile.
                    </Typography>
                </Box>
                <Box >
                    <Box sx={{ marginTop: '20px', display: 'flex', columnGap: '6px' }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px'
                            }}
                        >
                            Job title
                        </Typography>
                        <Typography sx={{ color: '#F04438' }}>
                            *
                        </Typography>
                    </Box>
                    <Box>
                        <Paper
                            component='form'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: { md: 592, xs: '100%' },
                                height: { md: 44, xs: '100%' },
                                borderRadius: 2,
                                boxShadow: 0,
                                border: '1px solid #D0D5DD'
                            }}
                        >
                            <InputBase
                                sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                placeholder='e.g. Program Manager'
                                inputProps={{ 'aria-label': 'company size' }}
                            />
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{  display: 'flex', columnGap: '26px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Box>
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Team
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box>
                            <TextField
                            // value={status}
                                select
                                label='Select team'
                                size='small'
                                onChange={(e) => setTeam(e.target.value)}
                                sx={{
                                    width: {md:'288px', xs: '100%'},
                                    color: '#667085',
                                    fontSize: '20px',
                                    marginTop: '10px'
                                }}
                            >
                                <MenuItem value=''>
                                    <em>State</em>
                                </MenuItem>
                                {teams.map((state) => (
                                    <MenuItem key={state.value} value={state.value}>
                                        {state.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                    <Box >
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Salary
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box >
                            <TextField
                            // value={status}
                                select
                                label='$ e.g. 55k - 65k'
                                size='small'
                                onChange={(e) => setTeam(e.target.value)}
                                sx={{
                                    width: {md:'288px', xs: '100%'},
                                    color: '#667085',
                                    fontSize: '16px',
                                    marginTop: '10px'
                                }}
                            >
                                <MenuItem value=''>
                                    <em>State</em>
                                </MenuItem>
                                {teams.map((state) => (
                                    <MenuItem key={state.value} value={state.value}>
                                        {state.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '10px', display: 'flex', columnGap: '26px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Box >
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
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
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '12px', width: '100%' }}>
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: {md:'288px', xs: '100'},
                                    height: {md: '40px', xs: '100px'},
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <IconButton
                                    type='button'
                                    sx={{ p: '10px' }}
                                    aria-label='search'
                                >
                                    <Search />
                                </IconButton>

                                <InputBase
                                    sx={{ flex: 1, fontSize: 16 }}
                                    placeholder='Search for city'
                                    inputProps={{ 'aria-label': 'label search' }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Employment
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <TextField
                            // value={status}
                            select
                            label='Select capacity'
                            size='small'
                            onChange={(e) => setTeam(e.target.value)}
                            sx={{
                                width: {md:'288px', xs: '100%'},
                                color: '#667085',
                                fontSize: '16px',
                                marginTop: '10px'
                            }}
                        >
                            <MenuItem value=''>
                                <em>State</em>
                            </MenuItem>
                            {teams.map((state) => (
                                <MenuItem key={state.value} value={state.value}>
                                    {state.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', columnGap: '6px' }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px'
                            }}
                        >
                            Description
                        </Typography>
                        <Typography sx={{ color: '#F04438' }}>
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
                                color: '#667085'
                            }}
                            placeholder='e.g. We are currently in search of a highly motivated individual to join our dynamic team. This role will involve working closely with various departments to contribute to the growth and success of our organization.'
                            rows={4}
                            onChange={(e) => {
                                console.log(e)
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ marginTop: '40px', display: 'flex', columnGap: '20px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Button sx={{  height: {md: '44px', xs: '100%'}, width: {md: '290px', xs: '100%'}, border: '1px solid #D0D5DD', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', fontWeight: '600', fontSize: '18px', lineHeight: '24px', }}>
                        <Typography sx={{fontSize: '16px', lineHeight: '24px', fontWeight: '600', textTransform: 'none'}}>Cancel</Typography>
                    </Button>
                    <Button sx={{ height: {md: '44px', xs: '100%'}, width: {md: '290px', xs: '100%'}, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#DC6803', borderRadius: '10px', fontWeight: '600', fontSize: '18px', lineHeight: '24px', marginTop: {xs: '10px', md: '0px'}}}>
                        <Typography sx={{ color: 'white' , fontSize: '16px', lineHeight: '24px', fontWeight: '600', textTransform: 'none'}}>Add job</Typography>
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default AddJobModal