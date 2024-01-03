import { Container, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

export interface CarouselProps {
    list: Array<Array<string>>,
    key: string
}

const VBCarousel = ({list, key}: CarouselProps) => {
    return (
        <Container maxWidth='xl' sx={{paddingTop: '40px', paddingBottom: '40px', display: 'flex', justifyContent: 'center'}}>
            <Carousel sx={{width: '100%'}} autoPlay={false} animation='slide' navButtonsAlwaysVisible duration={1000} fullHeightHover>
                {
                    list.map((set, j) =>
                        <Box key={`carousel-${key}-set-${j}`} sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            {
                                set.map((image, i) => <img src={image} key={`${image}-${key}-${i}`} style={{height: '450px', width: '400px'}} alt="slider" />)
                            }
                        </Box>)
                }
            </Carousel>
        </Container>
    )
}

export default VBCarousel