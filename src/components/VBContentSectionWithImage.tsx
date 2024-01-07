import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { ForgotStyle } from '../utils/styles'

interface ContentSectionWithImageProps {
    Component: JSX.Element,
    image: string
}

const VBContentSectionWithImage = ({Component, image}: ContentSectionWithImageProps) => {
    return (
        <Grid container spacing={2} sx={ForgotStyle.container}>
            <Grid item xs={12} md={5} lg={6}>
                {Component}
            </Grid>
            <Grid item md={7} lg={6} sx={ForgotStyle.imageSection}>
                <Container sx={{...ForgotStyle.imageSectionContainer.style, background: `url(${image}) no-repeat center right`, backgroundSize: 'contain'}}>
                </Container>
            </Grid>
        </Grid>
    )
}

export default VBContentSectionWithImage