import { Box } from '@mui/system'
import VBTopBanner from '../../components/VBTopBanner'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SubmissionsRow from '../../components/submissions/SubmissionRow'


const Submissions = () => {

    return (
        <Box>
            <VBTopBanner
                title={'Submissions'}
                description="Monitor, respond, grade, and manage submissions here."
                Icon={SettingsOutlinedIcon}
                action={() => console.log('temp action')}
            />
            <SubmissionsRow/>
        </Box>
    )
}

export default Submissions