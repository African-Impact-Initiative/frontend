import { ClearOutlined, GroupAddOutlined, Search } from '@mui/icons-material'
import { Button, IconButton, InputBase, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import avatar from '../../assets/avatar.png'

const AddLeadershipModal = () => {
    const leaders = [
        {
            imgUrl: avatar,
            leaderName: 'Sienna Hewitt',
            position: 'Founder',
        },
        {
            imgUrl: avatar,
            leaderName: 'Koray Okumus',
            position: 'Co-Founder',
        },
        {
            imgUrl: avatar,
            leaderName: 'Noah Pierre',
            position: 'Product Manager',
        },
    ]

    const handleRemoveLeader = (_: number) => {
    // implement your logic to remove the leader at the specified index
    // for example: setLeaders([...leaders.slice(0, index), ...leaders.slice(index + 1)]);
    }

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
                    // p: 4,
                    width: {md:'400px', xs: '100%'},
                    height: {md:'540px', xs: '100%'},
                    borderRadius: '12px'
                }}
            >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{border: '1px solid #EAECF0', width: '48px', height: '48px', alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '8px',  boxShadow: 2,}}>
                        <GroupAddOutlined sx={{width: '30px', height: '30px'}}/>
                    </Box>
                    <ClearOutlined sx={{width: '30px', height: '30px'}}/>
                </Box>
                <Box sx={{marginTop: '20px', }}>
                    <Typography variant='h5' sx={{fontSize: '18px', fontWeight: '600', lineHeight: '28px', }}>Add leadership</Typography>
                    <Typography sx={{color: '#475467', fontSize: '14px', fontWeight: '400', lineHeight: '20px',}}>List leadership on your company’s public profile.</Typography>
                </Box>
                <Box>
                    {leaders.map((leader, index) => (
                        <Box  key={index} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' ,}}>
                                <img src={leader.imgUrl} alt={`Avatar of ${leader.leaderName}`} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '20px' }} />
                                <Box>
                                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
                                        {leader.leaderName}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: '#475467', fontSize: '14px', fontWeight: '400', lineHeight: '20px' }}>
                                        {leader.position}
                                    </Typography>
                                </Box>
                            </Box>
                            <Button onClick={() => handleRemoveLeader(index)} sx={{width: '120px', height: '30px'}}>
                                <Typography sx={{color: '#B42318', fontWeight: '600', lineHeight: '20px', fontSize: '14px', textTransform: 'none'}}>Remove</Typography>
                            </Button>

                        </Box>
                    ))}
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    <Box>
                        <Typography sx={{color: '#344054', fontWeight: '500', fontSize: '14px', lineHeight: '20px' }}>Team member</Typography>
                    </Box>
                    <Box sx={{marginTop: '12px'}}>
                        <Paper
                            sx={{ display: 'flex', alignItems: 'center', width:{md: 342, xs:'100%' }, height: {md: 44, xs:'100%' }, borderRadius: 2, boxShadow: 0, border: '1px solid #D0D5DD'}}
                        >
                            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
                                <Search />
                            </IconButton>

                            <InputBase
                                sx={{flex: 1, fontSize: 16 }}
                                placeholder='search for team member'
                                inputProps={{ 'aria-label': 'label search' }}
                            />

                        </Paper>
                    </Box>
                </Box>
                <Box sx={{marginTop: '40px', display: 'flex', columnGap: '20px'}}>
                    <Button sx={{ height: {md: '44px', xs: '100%'}, width:{md: '170px', xs: '100%'}, border: '1px solid #D0D5DD', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', fontWeight: '600', fontSize: '16px', lineHeight: '24px', textTransform: 'none'}}>
                        <Typography>Cancel</Typography>
                    </Button>
                    <Button sx={{ height: {md: '44px', xs: '100%'},width:{md: '170px', xs: '100%'}, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#DC6803', borderRadius: '10px', fontWeight: '600', fontSize: '16px', lineHeight: '24px',textTransform: 'none'}}>
                        <Typography sx={{color: 'white'}}>Done</Typography>
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default AddLeadershipModal
