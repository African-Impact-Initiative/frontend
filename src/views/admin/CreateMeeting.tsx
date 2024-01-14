import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { CloseOutlined } from '@mui/icons-material'
import { TimePicker } from '@mui/x-date-pickers'
import { useState } from 'react'
import { EventInfo } from '@ckeditor/ckeditor5-utils'
import { VBIconButton } from '../../components/VBButtons'

export interface ICreateMeetingProps {
    handleClose: (e: React.MouseEvent<HTMLElement>) => void,
    action: (e: React.MouseEvent<HTMLElement>) => void,
    open: boolean
}

const CreateMeeting = ({ handleClose, action }: ICreateMeetingProps) => {
    const [_status, setStatus] = useState('')
    const [value, setValue] = useState(null)
    const [_wordCount, setWordCount] = useState(0)
    const [_editorContent, setEditorContent] = useState('<p>Hello from CKEditor 5! This is an example.</p>')

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

    const categories = [
        { label: '40 minutes before', value: 'science' },
        { label: '1 hour before', value: 'commercial' },
        { label: '2 hours before', value: 'Art' },
    ]

    const cohorts = [
        { label: 'French', value: 'science' },
        { label: 'Science', value: 'commercial' },
        { label: 'All', value: 'Art' },
    ]

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '48px'
                }}
            >
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                        color: 'rgba(16, 24, 40, 1)',
                        fontWeight: 600,
                        fontSize: '18px',
                    }}
                >
                    New Event
                </Typography>
                <Box>
                    <VBIconButton
                        Icon={CloseOutlined}
                        aria={{
                            label: 'close',
                            controls: 'close',
                            popup: false
                        }}
                        onClick={handleClose}
                    />
                </Box>
            </Box>

            <Box>
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'rgba(52, 64, 84, 1)',
                        marginBottom: '5px',
                    }}
                >
                    Title <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField label="Add the event title" sx={{ width: '100%' }} />
            </Box>

            <Box sx={{ marginTop: '20px' }}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'rgba(71, 84, 103, 1)',
                        marginBottom: '5px',
                    }}
                >
                    Cohorts
                </Typography>
                <TextField
                    // value={status}
                    select
                    label="Select cohorts for this event"
                    // size="large"
                    onChange={(e) => setStatus(e.target.value)}
                    sx={{
                        width: '100%',
                    }}
                >
                    <MenuItem value="">
                        <em>English</em>
                    </MenuItem>
                    {cohorts.map((state) => (
                        <MenuItem key={state.value} value={state.value}>
                            {state.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            <Box sx={{ display: 'flex', columnGap: '10px', marginTop: '20px' }}>
                <Box sx={{ width: '100%', display: 'flex', columnGap: '7px' }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: 'rgba(71, 84, 103, 1)',
                                marginBottom: '5px',
                            }}
                        >
                            Date
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {/* <DemoContainer components={['DatePicker']}> */}
                            <DatePicker
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                            {/* </DemoContainer> */}
                        </LocalizationProvider>{' '}
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: 'rgba(71, 84, 103, 1)',
                                marginBottom: '5px',
                            }}
                        >
                            from
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker />
                        </LocalizationProvider>

                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: 'rgba(71, 84, 103, 1)',
                                marginBottom: '5px',
                            }}
                        >
                            to
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker />
                        </LocalizationProvider>
                    </Box>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'rgba(71, 84, 103, 1)',
                            marginBottom: '5px',
                        }}
                    >
                        Reminder <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField
                        // value={status}
                        select
                        label="15 minutes before"
                        // size="large"
                        onChange={(e) => setStatus(e.target.value)}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <MenuItem value="">
                            <em>30 minutes before</em>
                        </MenuItem>
                        {categories.map((state) => (
                            <MenuItem key={state.value} value={state.value}>
                                {state.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', columnGap: '10px', marginTop: '20px' }}>
                <Box sx={{ width: '100%' }}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'rgba(71, 84, 103, 1)',
                            marginBottom: '5px',
                        }}
                    >
                        Frequency
                    </Typography>
                    <TextField
                        // value={status}
                        select
                        label="Do not repeat"
                        // size="large"
                        onChange={(e) => setStatus(e.target.value)}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <MenuItem value="">
                            {/* <em>English</em> */}
                        </MenuItem>
                        {categories.map((state) => (
                            <MenuItem key={state.value} value={state.value}>
                                {state.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'rgba(71, 84, 103, 1)',
                            marginBottom: '5px',
                        }}
                    >
                        Reminder <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField
                        // value={status}
                        select
                        label="15 minutes before"
                        // size="large"
                        onChange={(e) => setStatus(e.target.value)}
                        sx={{
                            width: '100%',
                        }}
                    >
                        <MenuItem value="">
                            <em>30 minutes before</em>
                        </MenuItem>
                        {categories.map((state) => (
                            <MenuItem key={state.value} value={state.value}>
                                {state.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </Box>

            <Box
                sx={{ marginTop: '20px', marginBottom: '40px' }}
                className="my-custom-editor-meeting"
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
                    data="<p>Describe the event.</p>"
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: '10px',
                }}
            >
                <Button
                    sx={{
                        width: '100%',
                        height: '44px',
                        border: '1px solid rgba(208, 213, 221, 1)',
                        borderRadius: '8px',
                        textTransform: 'none',
                    }}
                    onClick={handleClose}
                >
                    <Typography
                        sx={{
                            color: 'rgba(52, 64, 84, 1)',
                            fontWeight: 600,
                            fontSize: '16px',
                        }}
                    >
                        Discard
                    </Typography>
                </Button>
                <Button
                    sx={{
                        width: '100%',
                        height: '44px',
                        border: '1px solid #FFFFFF',
                        borderRadius: '8px',
                        background: 'rgba(220, 104, 3, 1)',
                        textTransform: 'none',
                    }}
                    onClick={action}
                >
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontWeight: 600,
                            fontSize: '16px',
                        }}
                    >
                        Save as draft
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default CreateMeeting