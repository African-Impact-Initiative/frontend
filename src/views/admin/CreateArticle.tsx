import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ArrowBackIos, ContentCopy } from '@mui/icons-material'
import { Divider, MenuItem, TextField } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { useEffect, useState } from 'react'
import VBResourcesUploadSuccess from '../../components/VBResourcesUploadSuccess'
import { EventInfo } from '@ckeditor/ckeditor5-utils'

import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp'

const categories = [
    { label: 'science', value: 'science' },
    { label: 'commercial', value: 'commercial' },
    { label: 'Art', value: 'Art' },
]

const visibility = [
    { label: 'public', value: 'public' },
    { label: 'private', value: 'private' },
]

const CreateArticle = () => {
    const [_status, setStatus] = useState('')

    const [openUploadSuccess, setOpenUploadSuccess] = useState(false)
    const handleCloseUploadSuccess = () => setOpenUploadSuccess(false)

    const [wordCount, setWordCount] = useState(0)
    const [editorContent, setEditorContent] = useState('<p>Hello from CKEditor 5! This is an example.</p>')

    const updateWordCount = (content: string) => {
        const text = content.replace(/<[^>]*>/g, ' ')
        const words = text.trim().split(/\s+/).length
        setWordCount(words)
    }

    const handleEditorChange = (_event: EventInfo<string, unknown>, editor: ClassicEditor) => {
        const content = editor.getData()
        setEditorContent(content)
        updateWordCount(content)
    }

    useEffect(() => {
        // calculate the initial word count and set the editor content here if needed.
        updateWordCount(editorContent)
    }, [editorContent])

    const navigate = useNavigate()

    return (
        <>
            <VBResourcesUploadSuccess
                open={openUploadSuccess}
                handleClose={handleCloseUploadSuccess}
                type={'Article'}
                Icon={CheckCircleOutlineSharpIcon}
            />
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '20px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ flex: '2' }}>
                        <Button
                            sx={{
                                textTransform: 'none',
                                display: 'flex',
                                columnGap: '10px',
                                marginBottom: '10px',
                            }}
                            onClick={() => navigate('/admin/articles')}
                        >
                            <ArrowBackIos
                                style={{ color: 'rgba(208, 213, 221, 1)', fontSize: '20px' }}
                            />
                            <Typography
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    lineHeight: '20px',
                                }}
                            >
                                Article
                            </Typography>
                        </Button>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography
                                    sx={{
                                        color: 'rgba(16, 24, 40, 1)',
                                        fontWeight: 600,
                                        fontSize: '20px',
                                    }}
                                >
                                    Add new article
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', columnGap: '10px' }}>
                                <Button
                                    sx={{
                                        height: '44px',
                                        border: '1px solid #FFFFFF',
                                        borderRadius: '8px',
                                        background: '#FFFFFF',
                                        textTransform: 'none',
                                        boxShadow: 'rgba(16, 24, 40, 0.05)',
                                    }}
                                    onClick={() => navigate('/admin/articles')}
                                >
                                    <Typography
                                        sx={{
                                            color: 'rgba(71, 84, 103, 1)',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                        }}
                                    >
                                        Cancel
                                    </Typography>
                                </Button>
                                <Button
                                    sx={{
                                        height: '44px',
                                        border: '1px solid #FFFFFF',
                                        borderRadius: '8px',
                                        background: 'rgba(254, 223, 137, 1)',
                                        textTransform: 'none',
                                    }}
                                    onClick={() => navigate('/admin/articles')}
                                >
                                    <Typography
                                        sx={{
                                            color: 'rgba(181, 71, 8, 1)',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                        }}
                                    >
                                        Save draft
                                    </Typography>
                                </Button>
                                <Button
                                    sx={{
                                        height: '44px',
                                        border: '1px solid #FFFFFF',
                                        borderRadius: '8px',
                                        background: 'rgba(220, 104, 3, 1)',
                                        textTransform: 'none',
                                    }}
                                    onClick={() => setOpenUploadSuccess(true)}
                                >
                                    <Typography
                                        sx={{
                                            color: '#FFFFFF',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                        }}
                                    >
                                        Post article
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'rgba(52, 64, 84, 1)',
                                    marginBottom: '10px',
                                }}
                            >
                                Title <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField sx={{ width: '100%' }} />
                        </Box>

                        <Divider sx={{ margin: '25px 0' }} />

                        <Box className='my-custom-editor'>
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
                                            // "link",
                                            'bulletedList',
                                            'numberedList',
                                            'blockQuote',
                                            'imageUpload',
                                            'alignment',
                                            // "undo",
                                            // "redo",
                                            // "codeBlock",
                                            // "table",
                                            // "removeFormat",
                                            'highlight',
                                        ],
                                    },
                                }}
                                data='<p>Start typing or pasting your text.</p>'
                                onReady={(editor) => {
                                    // you can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor)
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData()
                                    console.log({ event, editor, data })
                                    handleEditorChange(event, editor)
                                }}
                                onBlur={(_event, editor) => {
                                    console.log('Blur.', editor)
                                }}
                                onFocus={(_event, editor) => {
                                    console.log('Focus.', editor)
                                }}
                            />
                        </Box>
                        <div>Word Count: {wordCount}</div>
                    </Box>
                    <Box sx={{ flex: '1' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'rgba(52, 64, 84, 1)',
                                marginBottom: '10px',
                            }}
                        >
                            Settings
                        </Typography>
                        <Box
                            sx={{
                                border: '1px solid rgba(234, 236, 240, 1)',
                                borderRadius: '12px',
                                display: 'flex',
                                rowGap: '20px',
                                flexDirection: 'column',
                                padding: '20px',
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Writer <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    // value={status}
                                    select
                                    label='Lana Stein'
                                    // size="large"
                                    onChange={(e) => setStatus(e.target.value)}
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <MenuItem value=''>
                                        <em>Lana Stein</em>
                                    </MenuItem>
                                    {categories.map((state) => (
                                        <MenuItem key={state.value} value={state.value}>
                                            {state.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Typography
                                    sx={{
                                        fontSize: '13px',
                                        fontWeight: 400,
                                        color: 'rgba(71, 84, 103, 1)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Change if you are not the writer of the article
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Category <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    // value={status}
                                    select
                                    label='Select'
                                    // size="large"
                                    onChange={(e) => setStatus(e.target.value)}
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <MenuItem value=''>
                                        <em>English</em>
                                    </MenuItem>
                                    {categories.map((state) => (
                                        <MenuItem key={state.value} value={state.value}>
                                            {state.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Visibility <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <TextField
                                    // value={status}
                                    select
                                    label='Visibility'
                                    // size="large"
                                    onChange={(e) => setStatus(e.target.value)}
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <MenuItem value=''>
                                        <em>Public</em>
                                    </MenuItem>
                                    {visibility.map((state) => (
                                        <MenuItem key={state.value} value={state.value}>
                                            {state.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                        marginBottom: '5px',
                                    }}
                                >
                                    Article link
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        border: '1px solid rgba(208, 213, 221, 1)',
                                        height: '44px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <Box sx={{ flex: '1/2', paddingLeft: '4px' }}>
                                        <input
                                            style={{
                                                width: '207px',
                                                border: 'none',
                                                outline: 'none',
                                                borderBottom: '0px',
                                                height: '100%',
                                            }}
                                            value={'venturebuild.com/resou'}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            borderLeft: '1px solid rgba(208, 213, 221, 1)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            flex: '1',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <ContentCopy />
                                        <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                color: 'rgba(71, 84, 103, 1)',
                                            }}
                                        >
                                            Copy{' '}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* </Modal> */}
        </>
    )
}

export default CreateArticle