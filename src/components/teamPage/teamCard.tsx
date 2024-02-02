import { Box } from '@mui/system'
import TeamInfo from './teamInfo'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import avatar1 from '../../assets/Avatar1.png'
import avatar2 from '../../assets/Avatar2.png'
import avatar3 from '../../assets/Avatar3.png'
import avatar4 from '../../assets/Avatar4.png'

import {
    AnnouncementOutlined,
    MenuOpenOutlined,
    MoreVertOutlined
} from '@mui/icons-material'

const TeamCard = () => { 

    const  arrayOfImages= [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar1,
        avatar2,
        avatar3,
        avatar4,
    ]
    const newTeamMembers = [
        {
            id: 1,
            iconUrl: LightModeOutlinedIcon,
            icon: MoreVertOutlined,
            name: 'Executive',
            count: '6 updates',
      
        },
        {
            id: 2,
            iconUrl: AnnouncementOutlined,
            icon: MoreVertOutlined,
            name: 'Advisory',
            count: '5 updates',
     
        },
        {
            id: 3,
            iconUrl: MenuOpenOutlined,
            icon: MoreVertOutlined,
            name: 'Operations',
            count: '6 updates',
      
        },
    ]

    return (
        <Box sx={{marginBottom: '60px', marginTop: '40px'}}>
            <Box
                sx={{
         
                    display: 'flex',
                    flexWrap:'wrap',
                    columnGap:'30px',
                    rowGap:'30px',
                    flex: 1,
                }}
            >
                {newTeamMembers.map((team) => (
                    <Box key={team.id}>
                        <TeamInfo
                            iconUrl={team.iconUrl}
                            icon={team.icon}
                            name={team.name}
                            count={team.count}
                            arrayOfImages={arrayOfImages}              
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default TeamCard

