import { ClearOutlined, GroupAddOutlined, Search } from '@mui/icons-material'
import { Button, IconButton, InputBase, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PersonIcon from '@mui/icons-material/Person'
import User from '../../types/user'
import { FC, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'

export type AddLeadershipModalType = {
    leadership: Array<User>
    setLeadership: React.Dispatch<React.SetStateAction<Array<User>>>
    setLeadershipModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddLeadershipModal: FC<AddLeadershipModalType> = (prop) => {

    const { leadership, setLeadership, setLeadershipModal } = prop

    const org = useAppSelector((state) => state.userOrganization)

    const [curLeaders, setCurLeaders] = useState<Array<User>>(leadership)
    const [search, setSearch] = useState('')

    const handleRemoveLeader = (indexToRemove: number) => {
        const updatedLeaders = curLeaders.filter((_, index) => index !== indexToRemove)
        setCurLeaders(updatedLeaders)
    }

    // todo: add error message
    const handleAddLeader = () => {
        if (!curLeaders.some((leader) => leader.email === search)) {
            const user = org.data?.userSet.find((user) => user.email === search)
            if (user) {
                setCurLeaders([...curLeaders, user])
                setSearch('')
            }
        }
    }

    const handleDone = () => {
        setLeadership(curLeaders)
        setLeadershipModal(false)
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
                    width: {md:'400px', xs: '100%'},
                    borderRadius: '12px'
                }}
            >
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{border: '1px solid #EAECF0', width: '48px', height: '48px', alignItems: 'center', justifyContent: 'center', display: 'flex', borderRadius: '8px',  boxShadow: 2,}}>
                        <GroupAddOutlined sx={{width: '30px', height: '30px'}}/>
                    </Box>
                    <ClearOutlined 
                        sx={{width: '30px', height: '30px'}}
                        onClick={() => setLeadershipModal(false)}
                    />
                </Box>
                <Box sx={{marginTop: '20px', }}>
                    <Typography variant='h5' sx={{fontSize: '18px', fontWeight: '600', lineHeight: '28px', }}>Add leadership</Typography>
                    <Typography sx={{color: '#475467', fontSize: '14px', fontWeight: '400', lineHeight: '20px',}}>List leadership on your company’s public profile.</Typography>
                </Box>
                <Box>
                    {curLeaders.map((leader, index) => (
                        <Box  key={index} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Box sx={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                                <Box
                                    sx={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        marginRight: '20px',
                                        border: '1px solid #EAECF0',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'flex',
                                    }}
                                >
                                    { leader.photo ?
                                        <img 
                                            src={leader.photo || ''} 
                                            alt={`Avatar of ${leader.firstName} ${leader.lastName}`} 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                            }} 
                                        /> :
                                        <PersonIcon 
                                            sx={{
                                                backgroundColor: '#FFFFFF', 
                                                width:'100%',
                                                height:'100%',
                                            }} 
                                        />
                                    }
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
                                        {`${leader.firstName} ${leader.lastName}`}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: '#475467', fontSize: '14px', fontWeight: '400', lineHeight: '20px' }}>
                                        {leader.role}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '20px'}}>
                                <Button onClick={() => handleRemoveLeader(index)} sx={{width: '80px', height: '30px'}}>
                                    <Typography sx={{color: '#B42318', fontWeight: '600', lineHeight: '20px', fontSize: '14px', textTransform: 'none'}}>Remove</Typography>
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box sx={{marginTop: '20px'}}>
                    <Box>
                        <Typography sx={{color: '#344054', fontWeight: '500', fontSize: '14px', lineHeight: '20px' }}>Team member</Typography>
                    </Box>
                    <Box sx={{marginTop: '12px'}}>
                        <Paper
                            sx={{width:'100%', display: 'flex', alignItems: 'center', height: {md: 44, xs:'100%' }, borderRadius: 2, boxShadow: 0, border: '1px solid #D0D5DD'}}
                        >
                            <IconButton 
                                type='button' 
                                sx={{ p: '10px' }} 
                                aria-label='search'
                                onClick={handleAddLeader}
                            >
                                <Search />
                            </IconButton>
                            <InputBase
                                sx={{flex: 1, fontSize: 16}}
                                placeholder='search for team member'
                                inputProps={{ 'aria-label': 'label search' }}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{marginTop: '40px', display: 'flex', columnGap: '20px'}}>
                    <Button 
                        sx={{ 
                            height: {md: '44px', xs: '100%'}, 
                            width:{md: '170px', xs: '100%'}, 
                            border: '1px solid #D0D5DD', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            borderRadius: '10px', 
                            fontWeight: '600', 
                            fontSize: '16px', 
                            lineHeight: '24px', 
                            textTransform: 'none'
                        }}
                        onClick={() => setLeadershipModal(false)}
                    >
                        <Typography>Cancel</Typography>
                    </Button>
                    <Button 
                        sx={{ 
                            height: {md: '44px', xs: '100%'},
                            width:{md: '170px', xs: '100%'}, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            backgroundColor: '#DC6803', 
                            borderRadius: '10px', 
                            fontWeight: '600', 
                            fontSize: '16px', 
                            lineHeight: '24px',
                            textTransform: 'none',
                        }}
                        disabled={!(curLeaders.length || leadership.length)}
                        onClick={handleDone}
                        variant='contained'
                    >
                        <Typography sx={{color: 'white'}}>Done</Typography>
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default AddLeadershipModal
