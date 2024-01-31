import { ErrorOutlineOutlined, HelpOutlineOutlined } from '@mui/icons-material'
import {
    Button,
    Divider,
    InputBase,
    MenuItem,
    Paper,
    TextField,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import dataprime from '../../assets/dataprime.png'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { industriesList } from '../../utils/industries'
import { EventInfo } from '@ckeditor/ckeditor5-utils'

const CompanyProfileSettings = () => {
    const [formData] = useState({ name: '', email: '' })
    const [industry, setIndustry] = useState('')
    const [selectedFile, setSelectedFile] = useState<File>()
    const [, setWordCount] = useState(0)
    const [, setEditorContent] = useState(
        '<p>Yeeeeh</p>'
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFileChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                const image = new Image()
                image.src = event.target!.result as string
                image.onload = () => {
                    const maxWidth = 800
                    const maxHeight = 400
                    if (image.width <= maxWidth && image.height <= maxHeight)
                        setSelectedFile(file)
                    else
                        alert('Image dimensions must be max. 800x400px')

                }
            }
            reader.readAsDataURL(file)
        }
    }

    const handleUpload = () => {
        if (selectedFile)
            alert('Upload successful')
        else
            console.log('No file selected.')

    }

    const handleFormSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const updateWordCount = (content: string) => {
        const text = content.replace(/<[^>]*>/g, ' ')
        const words = text.trim().split(/\s+/).length
        setWordCount(words)
    }

    const handleEditorChange = (_: EventInfo<string, unknown>, editor: ClassicEditor) => {
        const content = editor.getData()
        setEditorContent(content)
        updateWordCount(content)
    }

    return (
        <Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' }

                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            sx={{
                                color: '#101828',
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: '28px',
                                textAlign: 'left'
                            }}
                        >
                            Company profile
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: { md: '14px', xs: '10px' },
                                lineHeight: '20px',
                                textAlign: { md: 'left', xs: 'left' }

                            }}
                        >
                            Update your company photo and details here.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '20px', width: '60%', justifyContent: { xs: 'center', md: 'flex-end' }, marginTop: {xs: '10px'} ,  marginBottom: {xs: '20px'}}}>
                        <Button
                            size='large'
                            variant='outlined'
                            sx={{
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                color: '#344054',
                                lineHeight: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                height: '40px',
                                width: { xs: '100%', md: 80 },
                                textTransform: 'none',
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleFormSubmit}
                            type='submit'
                            variant='contained'
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: '40px',
                                width: { xs: '100%', md: 80 },
                                textTransform: 'none',
                                fontSize: '14px'
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },

                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: { xs: 'left' },
                        marginTop: { xs: '20px' }
                    }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: 'left'
                            }}
                        >
                            Company name
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            Choose a name for your company.
                        </Typography>
                    </Box>
                    <Box
                    >
                        <Box
                            sx={{
                                width: '100%',
                                marginTop: '12px',
                                display: 'flex',
                                rowGap: '20px',
                                flexDirection: { xs: 'column', md: 'column' },

                            }}
                        >
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                    placeholder='DataPrime'
                                    inputProps={{ 'aria-label': 'company size' }}
                                />
                            </Paper>
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <HelpOutlineOutlined sx={{ color: '#98A2B3' }} />
                                </IconButton> */}
                                <Typography
                                    sx={{
                                        padding: '10px',
                                        color: '#667085',
                                        fontSize: '16px'
                                    }}
                                >
                                   Venturebuild.com/profile/
                                </Typography>
                                <Divider
                                    sx={{ ml: 2, height: 45, m: 0.5 }}
                                    orientation='vertical'
                                />
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16, ml: 1, color: '#667085' }}
                                    placeholder='dataprime'
                                    inputProps={{ 'aria-label': 'company size' }}
                                />
                            </Paper>
                        </Box>
                        <Box sx={{ marginTop: '12px' }}></Box>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: { md: 'center', xs: 'none' },
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: { xs: 'left', md: 'left' },
                    }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',

                            }}
                        >
                            Industry
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            Select your company’s industry.
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                justifyContent: { xs: 'center', md: 'flex-center' },
                                width: '100%',
                            }}
                        >
                            <TextField
                                value={industry}
                                select
                                label='Industry'
                                size='small'
                                onChange={(e) => setIndustry(e.target.value)}
                                sx={{
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                }}
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {industriesList.map((industry) => (
                                    <MenuItem key={industry.value} value={industry.value}>
                                        {industry.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        width: { md: '76.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'left' }, width: '100%' }}>
                        <Box
                            sx={{ display: 'flex', alignItems: 'center', columnGap: '2px' }}
                        >
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                Tagline
                            </Typography>
                            <HelpOutlineOutlined sx={{ color: '#98A2B3' }} />
                        </Box>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            A quick snapshot of your company.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ width: {md:'166%', xs: '100%'}, fontSize: { md: '16px', xs: '12px' }, color: '#475467', fontWeight: '400', lineHeight: '24px', padding: '14px' }}
                        className='my-custom-editor-meeting'
                    >
                        <CKEditor
                            editor={ClassicEditor}
                            config={{
                                toolbar: {
                                    items: [
                                        'heading',
                                        'bold',
                                        'italic',
                                        'underline',
                                        // "strikethrough",
                                        'link',
                                        'bulletedList',
                                        'numberedList',
                                        'blockQuote',
                                        'imageUpload',
                                        'alignment',
                                        'undo',
                                        'redo',
                                        // "codeBlock",
                                        'table',
                                        // "removeFormat",
                                        'highlight',
                                    ],
                                },
                            }}
                            data='<p>
                            DataPrime empowers financial
                             insights with AI-driven solutions <br/>
                              for smarter decision-making and
                              thriving FinTech innovations.
                                </p>'
                            onReady={(editor) => {
                                // you can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor)
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                console.log({ event, editor, data })
                                handleEditorChange(event, editor)
                            }}
                            onBlur={(_, editor) => {
                                console.log('Blur.', editor)
                            }}
                            onFocus={(_, editor) => {
                                console.log('Focus.', editor)
                            }}
                        />
                    </Box>

                </Box>
                <Divider />
                <Box sx={{
                    padding: { xs: '0px', md: '20px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    marginTop: { xs: '20px', md: '0' },
                    width: { md: '80%', xs: '100%' },
                    justifyContent: { xs: 'flex-start', md: 'space-between' },
                }}>
                    <Box sx={{ textAlign: { xs: 'left' } }}>
                        <Box
                            sx={{ display: 'flex', alignItems: 'center', columnGap: '2px' }}
                        >
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                Company logo
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            Update your company logo.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-center' }, marginTop: { xs: '20px', md: '0' }, columnGap: '20px', width: '71%' }}>
                        <Box>
                            <img src={dataprime} alt='humanimage' />
                        </Box>
                        <Box
                            sx={{
                                border: '3px solid #DC6803',
                                height: { md: '126px', xs: '100px' },
                                width: { md: '428px', xs: '100%' },
                                borderRadius: '12px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        border: '1px solid #EAECF0',
                                        borderRadius: '6px',
                                        height: { md: '36px', xs: '24px' },
                                        width: { md: '36px', xs: '24px' },
                                        justifyContent: 'center',
                                        boxShadow: 1
                                    }}
                                >
                                    <ErrorOutlineOutlined
                                        sx={{
                                            height: '26px',
                                            width: '28px',
                                            paddingTop: '6px',
                                            paddingLeft: '6px'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '8px',
                                    marginTop: {md: '16px', xs: '0px'}
                                }}
                            >
                                <Typography variant='body1' sx={{ marginTop: '16px' }}>
                                    {selectedFile ? `${selectedFile.name}` : ''}
                                </Typography>
                                <label htmlFor='file-upload'>
                                    <input
                                        type='file'
                                        id='file-upload'
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    <Box
                                        component='span'
                                        onClick={handleUpload}
                                        sx={{
                                            marginTop: '16px',
                                            color: '#B54708',
                                            fontWeight: '600',
                                            fontSize: {md: '18px', xs: '10px'}
                                        }}
                                    >
                                        Click to upload
                                    </Box>
                                </label>
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '400',
                                        fontSize: {md: '16px', xs: '10px'},
                                        lineHeight: {md: '18px', xs: '10px'}
                                    }}
                                >
                                    or drag and drop
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontWeight: '400',
                                    fontSize: {md: '16px', xs: '10px'},
                                    lineHeight: {md: '18px', xs: '10px'}
                                }}
                            >
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        width: {md: '75.5%', xs: '100%'},
                        justifyContent: {xs: 'flex-start', md: 'space-between'},
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            Social profiles
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                flexDirection: { xs: 'column', md: 'column' },
                                rowGap: '20px',
                                color: '#475467',
                            }}
                        >

                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <Typography
                                    sx={{
                                        padding: '10px',
                                        color: '#667085',
                                        fontSize: '16px'
                                    }}
                                >
                                    twitter.com/
                                </Typography>

                                <Divider
                                    sx={{ ml: 2, height: 45, m: 0.5 }}
                                    orientation='vertical'
                                />
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                    placeholder='dataprime'
                                    inputProps={{ 'aria-label': 'label search' }}
                                />
                            </Paper>

                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <Typography
                                    sx={{
                                        padding: '10px',
                                        color: '#667085',
                                        fontSize: '16px'
                                    }}
                                >
                                    facebook.com/
                                </Typography>

                                <Divider
                                    sx={{ ml: 2, height: 45, m: 0.5 }}
                                    orientation='vertical'
                                />
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                    placeholder='dataprime'
                                    inputProps={{ 'aria-label': 'label search' }}
                                />
                            </Paper>

                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <Typography
                                    sx={{
                                        padding: '10px',
                                        color: '#667085',
                                        fontSize: '14px'
                                    }}
                                >
                                    linkedin.com/company/
                                </Typography>

                                <Divider
                                    sx={{ ml: 2, height: 45, m: 0.5 }}
                                    orientation='vertical'
                                />
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                    placeholder='dataprime'
                                    inputProps={{ 'aria-label': 'label search' }}
                                />
                            </Paper>

                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '20px',
                        justifyContent: {md:'flex-end', xs:'flex-start'},
                        padding: '40px'
                    }}
                >
                    <Button
                        size='large'
                        variant='outlined'
                        sx={{
                            border: '1px solid #D0D5DD',
                            borderRadius: '8px',
                            color: '#344054',
                            lineHeight: '20px',
                            fontSize: '16px',
                            fontWeight: '600',
                            height: '40px',
                            width: { xs: '100%', md: 80 },
                            textTransform: 'none'
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleFormSubmit}
                        type='submit'
                        variant='contained'
                        sx={{
                            color: '#FFFFFF',
                            backgroundColor: '#DC6803',
                            borderRadius: '8px',
                            fontWeight: '600',
                            lineHeight: '20px',
                            height: '40px',
                            width: { xs: '100%', md: 80 },
                            textTransform: 'none',
                            fontSize: '16px',
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CompanyProfileSettings
