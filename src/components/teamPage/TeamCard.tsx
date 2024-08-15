import { Box } from '@mui/system'
import TeamInfo from './TeamInfo'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import avatar from '../../assets/avatar.png'

import {
    AnnouncementOutlined,
    MenuOpenOutlined,
    MoreVertOutlined
} from '@mui/icons-material'

const TeamCard = () => {
    const newTeamMembers = [
        {
            id: 1,
            iconUrl: LightModeOutlinedIcon,
            icon: MoreVertOutlined,
            name: 'Executive',
            memberCount: 1,
            memberImages: [avatar, avatar]
        },
        {
            id: 2,
            iconUrl: AnnouncementOutlined,
            icon: MoreVertOutlined,
            name: 'Advisory',
            memberCount: 5,
            memberImages: [avatar]
        },
        {
            id: 3,
            iconUrl: MenuOpenOutlined,
            icon: MoreVertOutlined,
            name: 'Operations',
            memberCount: 6,
            memberImages: [avatar, avatar, avatar, avatar, avatar]
        },
    ]

    return (
        <Box sx={{ marginBottom: '60px', marginTop: '40px' }}>
            <Box
                sx={{

                    display: 'flex',
                    flexWrap: 'wrap',
                    columnGap: '24px',
                    rowGap: '24px',
                    flex: 1,
                }}
            >
                {newTeamMembers.map((team) => (
                    <Box key={team.id}>
                        <TeamInfo
                            iconUrl={team.iconUrl}
                            icon={team.icon}
                            name={team.name}
                            memberCount={team.memberCount}
                            memberImages={team.memberImages}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default TeamCard

