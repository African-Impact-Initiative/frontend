import { ModeEditOutlineOutlined, OpenInNewOutlined, RemoveRedEye } from '@mui/icons-material'
import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import SelectionRow from '../../../Admin/SelectionRow/SelectionRow'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import TopBanner from '../../../Admin/TopBanner/TopBanner'
import { fundersData } from '../../../../data'
import AddFundingModal from '../Funding/AddFundingModal'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SubmissionsRow from './SubmissionRow'


const Submissions = () => {

    return (
        <Box>
            <TopBanner
                title={'Submissions'}
                description="Monitor, respond, grade, and manage submissions here."
                icon={SettingsOutlinedIcon}
                // action={uploadAction}
            />

            <SubmissionsRow/>
        </Box>
    )
}

export default Submissions