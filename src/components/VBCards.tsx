import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export interface AboutCardProps {
    title: string,
    description: string,
    image: string,
}


export const AboutCard = ({ title, description, image }: AboutCardProps) => {
    // renders 2 cards one for sm screens and other for larger screens
    return (
        <>
            <Card sx={{display: {xs: 'flex', sm: 'none'}, border: 'none', backgroundColor: 'transparent', paddingLeft: '20px', width: '100%', height: '155px', }} variant='outlined'>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%'}}>
                    <img src={image} alt={title} style={{borderRadius: '50%', padding: '10px', width: '100px', height: '100px'}} />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '75%'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography component='div' variant='h5' fontWeight='bold'>
                                {title}
                            </Typography>
                        </Box>
                        <Typography variant='subtitle1' color='text.secondary' component='div'>
                            {description}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            <Card sx={{display: {xs: 'none', sm: 'inline-block'}, width: '100%', height: '320px', border: 'none', backgroundColor: 'transparent', transition: 'ease 0.5s', textAlign: 'center', padding: '30px', '&:hover': {marginTop: '-10px', marginBottom: '10px'}}} variant='outlined'>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={image} alt={title} style={{borderRadius: '50%', padding: '10px', marginTop: '10px', height: '100px', width: '100px'}} />
                </Box>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography component='div' variant='h6' fontWeight='bold' sx={{overflow: 'hidden', whiteSpace: 'no-wrap'}}>
                            {title}
                        </Typography>
                    </Box>
                    <Typography variant='subtitle1' color='text.secondary' component='div' sx={{height: '36px'}}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}