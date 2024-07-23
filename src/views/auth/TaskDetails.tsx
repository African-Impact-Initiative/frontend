import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import VBPageHeader from '../../components/VBPageHeader'

const TaskDetails = () => {
    const { id } = useParams<{ id: string }>()

    // the task with this id should be retrieved from backend.
    // currently hardcoding just for front end development
    const task = {
        id: 2,
        assignment: 'Brand harmony masterplan',
        author: 'John Johnson',
        category: 'Branding & Identity',
        postdate: '2024-11-12',
        duedate: '2024-11-28',
        status: 'Submitted',
        action: '',
        attempts: 3,
        submissionformat: 'PDF',
        goal: 'In this assignment, you will focus on developing a Financial Horizon Optimization Proposal tailored to your startup company. The goal is to craft strategic recommendations that enhance the financial performance, stability, and growth prospects of your own startup.',
        instructions: 'For this assignment, focus on creating a Financial Horizon Optimization Proposal specifically for your startup. Begin with an overview of your current financial standing, emphasizing key metrics. Identify areas for enhancement, covering aspects like cost management and revenue strategies. Develop tailored, strategic recommendations aligned with your startup\'s goals for both short and long-term success. Conduct a comprehensive risk assessment with mitigation plans and provide clear financial projections. Organize your proposal professionally, including an executive summary, methodology, findings, recommendations, and conclusion. Submit your PDF assignment, ensuring clarity, accuracy, and proper citation of external sources.',
        submissionguideline: 'Submit your assignment in a PDF format.\nInclude all relevant calculations, charts, and graphs.\nClearly cite any external sources used in your analysis and recommendations.',
        criteria: 'Submit your assignment in a PDF format.\nInclude all relevant calculations, charts, and graphs.\nClearly cite any external sources used in your analysis and recommendations.'
    }
    return (
        <Box sx={{ padding: '32px' }}>
            <VBPageHeader
                title={task.assignment}
                subTitle={'Posted on ' + task.postdate + ' by ' + task.author}
                noHr={false}
            />

            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: {md: 'row', xs: 'column'},
                    gap: '24px',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px'
                    }}
                >

                    <Box
                        sx={{
                            padding: '16px',
                            border: '1px solid #EAECF0',
                            borderRadius: '8px',
                            backgroundColor: '#F9FAFB',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#344054',
                            }}
                        >
                            {task.goal}
                        </Typography>

                    </Box>

                    <Box>
                        <Typography
                            gutterBottom
                            sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                            }}
                        >
                            Instructions
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#475467'
                            }}
                        >
                            {task.instructions}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            gutterBottom
                            sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                            }}
                        >
                            Submission Guidelines
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#475467'
                            }}
                        >
                            {task.submissionguideline}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            gutterBottom
                            sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                            }}
                        >
                            Evaluation Criteria
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#475467'
                            }}
                        >
                            {task.criteria}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: {md: '360px', xs: '100%'},
                        height: '496px',
                        padding: '24px',
                        borderRadius: '12px',
                        border: '1px solid #EAECF0',
                    }}
                >
                    <Box 
                        sx={{ 
                            width: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '20px'
                        }}
                    >
                        <Box>
                            <Typography 
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Category
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px',
                                    color: '#344054'
                                }}
                            >
                                {task.category}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography 
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Category
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px',
                                    color: '#344054'
                                }}
                            >
                                {task.category}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography 
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Target groups
                            </Typography>
                            fill in
                        </Box>

                        <Box>
                            <Typography 
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Deadline
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px',
                                    color: '#344054'
                                }}
                            >
                                {task.duedate}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography 
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Attempts allowed
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px',
                                    color: '#344054'
                                }}
                            >
                                {task.attempts + ' attempts'}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography 
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Submission format
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px',
                                    color: '#344054'
                                }}
                            >
                                {task.submissionformat}
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskDetails