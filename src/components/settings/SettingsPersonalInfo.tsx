import {
    ErrorOutlineOutlined,
    HelpOutlineOutlined,
    MailOutlined
} from '@mui/icons-material'
import {
    Button,
    Divider,
    IconButton,
    InputBase,
    Paper,
    TextField,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import avatarimage from '../../assets/Avatar.png'
import MenuItem from '@mui/material/MenuItem'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { EventInfo } from '@ckeditor/ckeditor5-utils'
import { countryList } from '../../utils/countries'

const SettingsPersonalInfo = () => {
    const [formData] = useState({ name: '', email: '' })
    const [selectedFile, setSelectedFile] = useState<File>()
    const [country, setCountry] = useState('')
    const [, setWordCount] = useState(0)
    const [, setEditorContent] = useState(
        '<p>Yeeeeh</p>'
    )

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

    const handleFormSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleUpload = () => {
        if (selectedFile)
            alert('Upload successful')
        else
            console.log('No file selected.')
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                        <Typography
                            sx={{
                                color: '#101828',
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: '28px',
                                textAlign: 'left'
                            }}
                        >
                            Personal info
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
                            Update your photo and personal details here.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '20px', width: '60%', justifyContent: { xs: 'center', md: 'flex-end' }, marginTop: { xs: '10px' }, marginBottom: { xs: '20px' } }}>
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

                            }}>
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
                        alignItems: 'center',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        width: '100%',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: { md: 'left', xs: 'left' }
                            }}
                        >
                            Name
                        </Typography>
                    </Box>
                    <Box sx={{ width: '100%', padding: { xs: '0 0px', md: '0 20px', } }}>
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: { xs: 'center', md: 'flex-center' }, flexDirection: { xs: 'column', md: 'row' }, columnGap: '20px' }}>
                            <Box sx={{ marginTop: '12px' }}>
                                <Paper
                                    component='form'
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: { xs: '100%', md: 244 },
                                        height: 44,
                                        borderRadius: 2,
                                        boxShadow: 0,
                                        border: '1px solid #D0D5DD'
                                    }}
                                >
                                    <InputBase
                                        sx={{ ml: 2, flex: 1, fontSize: 16, width: { xs: '100%', md: 244 }, }}
                                        placeholder='Sienna'
                                        inputProps={{ 'aria-label': 'company size' }}
                                    />
                                </Paper>
                            </Box>
                            <Box sx={{ marginTop: '12px' }}>
                                <Paper
                                    component='form'
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: { xs: '100%', md: 244 },
                                        height: 44,
                                        borderRadius: 2,
                                        boxShadow: 0,
                                        border: '1px solid #D0D5DD'
                                    }}
                                >
                                    <InputBase
                                        sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                        placeholder='Hewitt'
                                        inputProps={{ 'aria-label': 'company size' }}
                                    />
                                </Paper>
                            </Box>
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
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                        width: { md: '75.5%', xs: '100%' },
                        alignItems: { md: 'center', xs: 'none' }
                    }}>
                    <Box>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: 'left',
                                display: 'flex'
                            }}
                        >
                            Email address
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{
                            marginTop: '12px',
                            display: 'flex',
                            justifyContent: { xs: 'flex-center', md: 'flex-center' },
                            width: '100%'
                        }}>
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
                                <IconButton sx={{ p: '10px' }} aria-label='menu'>
                                    <MailOutlined />
                                </IconButton>
                                <InputBase
                                    sx={{ flex: 1, fontSize: 16 }}
                                    placeholder='sienna@dataprime.com'
                                    inputProps={{ 'aria-label': 'company size' }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ marginBottom: '20px' }} />
                <Box sx={{
                    padding: { xs: '0px', md: '20px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    marginTop: { xs: '20px', md: '0' },
                    width: { md: '75.5%', xs: '100%' },
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
                                Your photo
                            </Typography>
                            <HelpOutlineOutlined />
                        </Box>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: { md: '14px', xs: '10px' },
                                lineHeight: { md: '40px', xs: '10px' }
                            }}
                        >
                            This will be displayed on your profile.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-center' }, marginTop: { xs: '20px', md: '0' }, columnGap: '20px', width: '61%' }}>
                        <Box>
                            <img src={avatarimage} alt='humanimage' />
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
                                    marginTop: { md: '16px', xs: '0px' }
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
                                            fontSize: { md: '14px', xs: '10px' }
                                        }}
                                    >
                                        Click to upload
                                    </Box>
                                </label>
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '400',
                                        fontSize: { md: '14px', xs: '10px' },
                                        lineHeight: { md: '18px', xs: '10px' }

                                    }}
                                >
                                    or drag and drop
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontWeight: '400',
                                    fontSize: { md: '14px', xs: '10px' },
                                    lineHeight: { md: '18px', xs: '10px' }
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
                        alignItems: { md: 'center', xs: 'none' },
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },

                    }}
                >
                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                            }}
                        >
                            Role
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ marginTop: '12px', width: '100%', justifyContent: { xs: 'center', md: 'flex-center', width: '100%' } }}>
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD',

                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                    placeholder='Founder'
                                    inputProps={{ 'aria-label': 'company size' }}
                                />
                            </Paper>
                        </Box>
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
                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            Country
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{
                            justifyContent: { xs: 'center', md: 'flex-center' },
                            width: '100%',
                        }}>
                            <TextField
                                value={country}
                                select
                                label='Country'
                                size='small'
                                onChange={(e) => setCountry(e.target.value)}
                                sx={{
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    border: '0px'
                                }}
                            >
                                <MenuItem value=''>
                                    <em>Country</em>
                                </MenuItem>
                                {countryList.map((country) => (
                                    <MenuItem key={country.value} value={country.value}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box>
                    <Box sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'left' }, width: '100%' }}>
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                Bio
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '40px'
                                }}
                            >
                                Write a short introduction.
                            </Typography>
                        </Box>

                        <Box
                            sx={{ width: { md: '154%', xs: '100%' }, fontSize: '16px', color: '#475467', fontWeight: '400', lineHeight: '24px', padding: '14px' }}
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
                                Greetings! I am the founder of DataPrime,
                                an innovative <br/> company transforming the finance
                                industry with AI-driven <br/> solutions
                                and driving FinTech advancements.
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
                </Box>
                <Divider />
                <Box sx={{
                    display: 'flex',
                    columnGap: '20px',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    padding: { xs: '0px', md: '20px' },

                }}>
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
        </Box>
    )
}

export default SettingsPersonalInfo
