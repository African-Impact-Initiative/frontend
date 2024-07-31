import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Button, Divider, Link, Typography } from '@mui/material'
import VBPageHeader from '../../components/VBPageHeader'
import FileUploadModal from '../../components/tasks/FileUploadModal'
import { getFileIcon } from '../../utils/fileUtils'
import { renderChallengeGroupBackground, renderChallengeGroupBg, renderChallengeGroupBorder } from '../../components/utils/tableUtils.ts'

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
    targetgroup: 'All Challenge HENT 2024',
    goal: 'In this assignment, you will focus on developing a Financial Horizon Optimization Proposal tailored to your startup company. The goal is to craft strategic recommendations that enhance the financial performance, stability, and growth prospects of your own startup.',
    instructions: 'For this assignment, focus on creating a Financial Horizon Optimization Proposal specifically for your startup. Begin with an overview of your current financial standing, emphasizing key metrics. Identify areas for enhancement, covering aspects like cost management and revenue strategies. Develop tailored, strategic recommendations aligned with your startup\'s goals for both short and long-term success. Conduct a comprehensive risk assessment with mitigation plans and provide clear financial projections. Organize your proposal professionally, including an executive summary, methodology, findings, recommendations, and conclusion. Submit your PDF assignment, ensuring clarity, accuracy, and proper citation of external sources.',
    submissionguideline: 'Submit your assignment in a PDF format.\nInclude all relevant calculations, charts, and graphs.\nClearly cite any external sources used in your analysis and recommendations.',
    criteria: 'Submit your assignment in a PDF format.\nInclude all relevant calculations, charts, and graphs.\nClearly cite any external sources used in your analysis and recommendations.'
}

const TaskDetails = () => {
    const { id } = useParams<{ id: string }>() // will be the id of the task
    const [fileModal, setFileModal] = useState(false)
    const [file, setFile] = useState<File | null>(null) // the file we track in the modal
    const [uploadedFile, setUploadedFile] = useState<File | null>(null) // the file stored in this page
    const [fileUrl, setFileUrl] = useState<string | null>(null)

    const handleOpenModal = () => {
        setFileModal(true)
    }

    const handleCloseModal = () => {
        setFileModal(false)
        setFile(null)
    }

    const handleFileChange = (file: File | null) => {
        setFile(file)
    }

    const handleFileUpload = () => {
        if (file) {
            console.log('Uploading file:', file)
            setUploadedFile(file)
            setFileModal(false)
            setFile(null)
        } else
            alert('No file selected.')
    }

    useEffect(() => {
        if (uploadedFile) {
            const url = URL.createObjectURL(uploadedFile)
            setFileUrl(url)
            return () => URL.revokeObjectURL(url)
        } else setFileUrl(null)
    }, [uploadedFile])
    
    return (
        <Box sx={{ padding: '12px 32px 20px 32px' }}>
            <FileUploadModal
                isOpen={fileModal}
                onClose={handleCloseModal}
                onFileChange={handleFileChange}
                onSubmit={handleFileUpload}
            />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
                <VBPageHeader
                    title={task.assignment}
                    subTitle={'Posted on ' + task.postdate + ' by ' + task.author}
                    noHr={true}
                >

                </VBPageHeader>
                <Button
                    sx={{
                        color: '#FFFFFF',
                        backgroundColor: '#DC6803',
                        height: '40px',
                        width: { md: '128px', xs: '100%' },
                        borderRadius: '10px',
                        display: 'flex',
                        cursor: 'pointer',
                        columnGap: '8px',
                        // marginTop (md) and marginBottom should be same values as 
                        // paddingTop and paddingBottom in VBPageHeader
                        // one could also modify VBPageHeader so we can pass in a component.
                        marginTop: { xs: '0', md: '20px' },
                        marginBottom: '20px',
                        justifySelf: 'center',
                        fontWeight: '600',
                        fontSize: '14px',
                        lineHeight: '20px',
                        textTransform: 'none',
                    }}
                    onClick={handleOpenModal}
                >
                    Submit
                </Button>
            </Box>
            <Divider sx={{ marginBottom: '30px' }} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
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
                        width: { md: '360px', xs: '100%' },
                        height: '480px',
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
                                    lineHeight: '20px',
                                    color: '#475467'
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
                                    lineHeight: '20px',
                                    color: '#475467'
                                }}
                            >
                                Target groups
                            </Typography>
                            <Box
                                sx={{
                                    border: renderChallengeGroupBorder(task.targetgroup),
                                    backgroundColor: renderChallengeGroupBackground(task.targetgroup),
                                    width: { md: 'fit-content', xs: '100%' },
                                    height: { md: '22px', xs: '100%' },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '16px',
                                    padding: '2px 10px 2px 10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: renderChallengeGroupBg(task.targetgroup),
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    {task.targetgroup}
                                </Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Typography
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px',
                                    color: '#475467'
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
                                    lineHeight: '20px',
                                    color: '#475467'
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
                                    lineHeight: '20px',
                                    color: '#475467'
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

                        <Box>
                            <Typography
                                gutterBottom
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px',
                                    color: '#475467'
                                }}
                            >
                                Attachment
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* if a file is uploaded, show icon */}
                                {uploadedFile &&
                                    <img src={getFileIcon(uploadedFile.name)}
                                        style={{ width: 30, height: 30, marginRight: 16 }} />
                                }

                                {/* if a file is uploaded and we have a url, show clickable filename */}
                                {uploadedFile && fileUrl && <Link href={fileUrl} target='_blank' rel='noopener noreferrer' underline='hover'>
                                    <Typography variant='body1'>{uploadedFile.name}</Typography>
                                </Link>}

                                {/* if a file is uploaded and we do NOT have a url, show normal text filename */}
                                {uploadedFile && !fileUrl && 
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            lineHeight: '24px',
                                            color: '#344054'
                                        }}
                                    >
                                        {uploadedFile.name}
                                    </Typography>
                                }
                                
                                {/* if a file is not uploaded, show 'N/A' */}
                                {!uploadedFile && 
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            lineHeight: '24px',
                                            color: '#344054'
                                        }}
                                    >
                                        N/A
                                    </Typography>
                                }

                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TaskDetails