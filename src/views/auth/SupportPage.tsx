import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Button, Checkbox, FormControlLabel, InputBase, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
// import { IAboutCardProps } from '../../components/VBCards'

// import home from '../../assets/home.svg'
// import guide from '../../assets/guide.svg'
// import community from '../../assets/community.svg'
import VBPageHeader from '../../components/VBPageHeader'
import React, { useState } from 'react'

const SupportPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [copyToMyEmail, setCopyToMyEmail] = useState(false)
    const [agreePrivacyPolicy, setAgreePrivacyPolicy] = useState(false)

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handleEditorChange = (editor: ClassicEditor) => {
        setContent(editor.getData())
    }
    const handleCopyEmailCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCopyToMyEmail(event.target.checked)
    }
    const handleAgreePolicyCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgreePrivacyPolicy(event.target.checked)
    }
    const handleClearForm = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setContent('')
        setCopyToMyEmail(false)
        setAgreePrivacyPolicy(false)
    }
    const handleSendMessage = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log('Form submitted')
        // console.log(firstName)
        // console.log(lastName)
        // console.log(email)
        // console.log(content)
        // console.log(copyToMyEmail)
        // console.log(agreePrivacyPolicy)
    }
    
    return (
        <Box sx={{ padding: '12px 32px 20px 32px' }}>
            <VBPageHeader
                title='Support'
                subTitle='How can we help you today?'
                noHr={false}
            />
            {/* <Typography>Please fill out this form.</Typography> */}
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ display: 'flex', columnGap: '40px', flexDirection: { md: 'row', xs: 'column' } }}>
                    <Box>
                        <Box sx={{ display: 'flex', columnGap: '6px' }} >
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                First name
                            </Typography>

                        </Box>
                        <Box sx={{ marginTop: '10px', width: '100%', }}>
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { md: 250, xs: '100%' },
                                    height: 50,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    inputProps={{ 'aria-label': 'first Name' }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{ display: 'flex', columnGap: '6px', marginTop: {xs: '20px', md: 0} }}
                        >
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    lineHeight: '20px'
                                }}
                            >
                                Last name
                            </Typography>

                        </Box>
                        <Box sx={{ marginTop: '10px', width: '100%', }}>
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { md: 250, xs: '100%' },
                                    height: 50,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    inputProps={{ 'aria-label': 'Last Name' }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', columnGap: '6px' }} >
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px'
                            }}>
                            Email
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '10px', }}>
                        <Paper
                            component='form'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: { md: 540, xs: '100%' },
                                height: 50,
                                borderRadius: 2,
                                boxShadow: 0,
                                border: '1px solid #D0D5DD'
                            }}
                        >
                            <InputBase
                                sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                placeholder='name@domain.com'
                                value={email}
                                onChange={handleEmailChange}
                                inputProps={{ 'aria-label': 'email' }}
                            />
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', columnGap: '6px' }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px'
                            }}
                        >
                            Message
                        </Typography>

                    </Box>
                    <Box
                        sx={{ width: { md: 540, xs: '100%' }, fontSize: '16px', color: '#475467', fontWeight: '400', lineHeight: '24px', marginTop: '10px' }}
                        className='my-custom-editor-meeting'
                    >
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onReady={(editor) => {
                                // you can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor)
                            }}
                            onChange={(e, editor) => {
                                console.log(e)
                                handleEditorChange(editor)
                            }}
                            onBlur={(e, editor) => {
                                console.log(e)
                                console.log('Blur.', editor)
                            }}
                            onFocus={(e, editor) => {
                                console.log(e)
                                console.log('Focus.', editor)
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked={false}
                                    checked={copyToMyEmail}
                                    onChange={handleCopyEmailCheckboxChange}
                                    sx={{
                                        color: '#D0D5DD',
                                        '&.Mui-checked': {
                                            color: '#DC6803',
                                        }
                                    }}
                                />
                            }
                            label={
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        color: '#475467',
                                        lineHeight: '24px'
                                    }}
                                >
                                    Send a copy to my email.
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked={false}
                                    checked={agreePrivacyPolicy}
                                    onChange={handleAgreePolicyCheckboxChange}
                                    sx={{
                                        color: '#D0D5DD',
                                        '&.Mui-checked': {
                                            color: '#DC6803',
                                        }
                                    }}
                                />
                            }
                            label={
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        color: '#475467',
                                        lineHeight: '24px'
                                    }}
                                >
                                    You agree to our friendly <span style={{ textDecoration: 'underline' }}>privacy policy</span>.
                                </Typography>
                            }
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            marginTop: '30px',
                            flexDirection: { md: 'row', xs: 'column' },
                            columnGap: { md: '20px' },
                            rowGap: { xs: '20px' }

                        }}
                    >
                        <Button
                            onClick={handleClearForm}
                            size='large'
                            variant='outlined'
                            sx={{
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                color: '#344054',
                                lineHeight: '20px',
                                fontSize: '16px',
                                fontWeight: '600',
                                height: '50px',
                                width: { md: '260px', xs: '100%' },
                                textTransform: 'none',
                                outline: 'none',
                            }}
                        >
                            Clear form
                        </Button>
                        <Button
                            onClick={handleSendMessage}
                            type='submit'
                            variant='contained'
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: '50px',
                                width: { md: '260px', xs: '100%' },
                                textTransform: 'none',
                                fontSize: '16px',
                            }}
                        >
                            Send message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
    // eslint-disable-next-line no-unreachable
    {/* <Box>
        <Container maxWidth='lg' sx={{ paddingTop: '30px', paddingBottom: '40px' }}>
            <Grid container spacing={2}>
                {
                    contactChannels.map(contact =>
                        <Grid item key={contact.title} xs={12} sm={6} md={4} sx={{ display: { md: 'flex' }, justifyContent: 'center' }}>
                            <AboutCard {...contact} />
                        </Grid>)
                }
            </Grid>
        </Container>
    </Box> */}
}

export default SupportPage

