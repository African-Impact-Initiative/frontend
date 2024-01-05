import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Button, Checkbox, Container, FormControlLabel, Grid, InputBase, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { AboutCard, IAboutCardProps } from '../../components/VBCards'

const ContactUs = () => {
    const handleSendMessage = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    const handleEditorChange = (editor: ClassicEditor) => {
        const content = editor.getData()
        console.log(content)
    }

    const contactChannels: Array<IAboutCardProps> = [
        {
            title: 'Email',
            description: 'Our friendly team is here to help.',
            address: 'hi@venturebuild.com',
            image: '/static/svgs/home.svg'
        },
        {
            title: 'Office',
            description: 'Come say hello at our office.',
            address: '100 Placeholder Street, City, Province, Country, Post Code',
            image: '/static/svgs/guide.svg'
        },
        {
            title: 'Phone',
            description: 'Mon-Fri from 9am to 5pm.',
            address: '+1 (100) 000-0000',
            image: '/static/svgs/community.svg'
        },

    ]

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                width: '100%',
                padding: {md:'50px', xs: '10px'} ,
                flexDirection: {md: 'row', xs: 'column'}
            }}>
                <Box sx={{ width: '100%' }}>
                    <img src='/src/assets/Aboutusbg.png' alt='female bf' style={{width: '100%'}}/>
                </Box>
                <Box sx={{ width: '100%', height: 'fit', display: 'flex', flexDirection: {md:'column', xs: 'column'}, alignItems: 'start', padding:{md: '40px' , xs: '0px'}}}>
                    <Box sx={{textAlign: {md: 'start', xs: 'center'}, width: '100%'}}>
                        <Typography style={{ fontSize: '36px', fontWeight: '600', lineHeight: '44px', letterSpacing: '-2%', color: '#101828' }}>Contact us</Typography>
                    </Box>
                    <Box sx={{ marginTop: '20px', width: '100%', textAlign: {md: 'start', xs: 'center'} }}>
                        <Typography style={{ fontSize: '20px', fontWeight: '400', lineHeight: '30px', color: '#475467',width: '100%', }}>Our friendly team would love to hear from you.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '40px', marginTop: '20px', flexDirection: {md: 'row', xs: 'column'} , width: '100%'}}>
                        <Box>
                            <Box
                                sx={{ marginTop: '30px', display: 'flex', columnGap: '6px' }}
                            >
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
                            <Box sx={{ marginTop: '10px', width: '100%',  }}>
                                <Paper
                                    component="form"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: {md: 250, xs:'100%'},
                                        height: 50,
                                        borderRadius: 2,
                                        boxShadow: 0,
                                        border: '1px solid #D0D5DD'
                                    }}
                                >
                                    <InputBase
                                        sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                        placeholder="First Name"
                                        inputProps={{ 'aria-label': 'first Name' }}
                                    />
                                </Paper>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                sx={{ marginTop: '30px', display: 'flex', columnGap: '6px' }}
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
                            <Box sx={{ marginTop: '10px', width: '100%',  }}>
                                <Paper
                                    component="form"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: {md: 250, xs:'100%'},
                                        height: 50,
                                        borderRadius: 2,
                                        boxShadow: 0,
                                        border: '1px solid #D0D5DD'
                                    }}
                                >
                                    <InputBase
                                        sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                        placeholder="Last Name"
                                        inputProps={{ 'aria-label': 'Last Name' }}
                                    />
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%'}}>
                        <Box
                            sx={{ marginTop: '30px', display: 'flex', columnGap: '6px' }}
                        >
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
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width:{md: 540, xs: '100%'},
                                    height: 50,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                    placeholder="name@domain.com"
                                    inputProps={{ 'aria-label': 'email' }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                    <Box sx={{width: '100%'}}>
                        <Box
                            sx={{ marginTop: '30px', display: 'flex', columnGap: '6px' }}
                        >
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
                            sx={{ width: {md:'90%', xs: '100%'}, fontSize: '16px', color: '#475467', fontWeight: '400', lineHeight: '24px', marginTop: '10px' }}
                            className="my-custom-editor-meeting"
                        >
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Leave us a message...</p>"
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
                        {/* <Box sx={{ marginTop: '10px', border: '2px solid red',   width: {md: 550, xs: '100%'} }}>
                            <textarea
                                style={{
                                    width: 300,
                                    height: '160px',
                                    border: '2px solid blue',
                                    // border: '1px solid rgba(208, 213, 221, 1)',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    fontSize: '16px',
                                    lineHeight: '38px',
                                    fontWeight: '400',
                                    fontFamily: ' inter',
                                    background: 'white',
                                    outline: 'none',
                                }}
                                placeholder="Leave us a message..."
                                rows={5}
                                onChange={(e) => {
                                    console.log(e)
                                }}
                            />
                        </Box> */}
                    </Box>
                    <Box sx={{ marginTop: '20px' , width: '100%'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked={false}
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
                                        variant="body1"
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
                                        variant="body1"
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
                                flexDirection: {md: 'row', xs: 'column'},
                                columnGap: {md: '20px'},
                                rowGap: {xs: '20px'}

                            }}
                        >
                            <Button
                                size="large"
                                variant="outlined"
                                sx={{
                                    border: '1px solid #D0D5DD',
                                    borderRadius: '8px',
                                    color: '#344054',
                                    lineHeight: '20px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    height: '50px',
                                    width: {md: '260px', xs: '100%'},
                                    textTransform: 'none',
                                    outline: 'none',
                                }}
                            >
                                Clear form
                            </Button>
                            <Button
                                onClick={handleSendMessage}
                                type="submit"
                                variant="contained"
                                sx={{
                                    color: '#FFFFFF',
                                    backgroundColor: '#DC6803',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    lineHeight: '20px',
                                    height: '50px',
                                    width: {md: '260px', xs: '100%'},
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
            <Box>
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
            </Box>
            <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ backgroundColor: '#F9FAFB', width: {md: '1200px', xs: '100%'}, height: {md:'180px', xs: '100%'}, borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '60px',  }}>
                    <Box sx={{ display: 'flex', columnGap: '50px', justifyContent: 'center', flexDirection: {md: 'row', xs: 'column'} }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: {md:'start', xs: 'center'}, marginBottom: {xs: '20px'} }}>
                            <Typography style={{ color: '#101828', fontSize: '30px', fontWeight: '600', lineHeight: '48px' }}>Stay up to-date</Typography>
                            <Typography style={{ color: '#475467', fontSize: '20px', fontWeight: '400', lineHeight: '30px' }}>Stay in the loop with everything new about Venture Build.</Typography>
                        </Box>
                        <Box>
                            {/* flexDirection: {md: 'row', xs: 'column'}  */}
                            <Box sx={{ display: 'flex', columnGap: '16px', flexDirection: {md: 'row', xs: 'column'} , rowGap: {xs: '20px'}}}>
                                <Paper
                                    component="form"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: {md:350, xs: '100%'},
                                        height: 50,
                                        borderRadius: 2,
                                        boxShadow: 0,
                                        border: '1px solid #D0D5DD'
                                    }}
                                >
                                    <InputBase
                                        sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                        placeholder="Enter your email"
                                        inputProps={{ 'aria-label': ' email' }}
                                    />
                                </Paper>
                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        color: '#FFFFFF',
                                        backgroundColor: '#DC6803',
                                        borderRadius: '8px',
                                        fontWeight: '600',
                                        lineHeight: '20px',
                                        height: '50px',
                                        width: {md: '140px', xs: '100%'},
                                        textTransform: 'none',
                                        fontSize: '16px',
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Box>
                            <Box style={{ display: 'flex', }}>
                                <Typography style={{ color: '#475467', fontSize: '14px', lineHeight: '26px', fontWeight: '400', }}>We care about your data in our <span style={{ textDecoration: 'underline' }}>privacy policy</span></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUs

