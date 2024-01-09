import { Box, Typography } from '@mui/material'

export type VBWeeklyEvent = {
    date: string,
    time: string,
    event: string,
    borderColor: string,
    backgroundColor: string,
}

export interface IVBWeeklyViewProps {
    events: Array<VBWeeklyEvent>
}

const VBWeeklyView = ({ events }: IVBWeeklyViewProps) => {
    const days = ['MON', 'TUE', 'WED', 'ThUR', 'FRI', 'SAT', 'SUN']

    const times = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '01:00 PM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM',
    ]

    const renderEvents = (day: number, time: number) => {
        const eventsForTimeSlot = events.filter((event) => {
            const eventDay = new Date(event.date).getDay()
            const eventTime = new Date(event.date).getHours()
            return eventDay === day && eventTime === time
        })

        if (eventsForTimeSlot.length === 0) {
            return (
                [
                    <Box
                        key={`empty-${day}-${time}`}
                        sx={{
                            height: '90px',
                            width: '126px',
                            // border: "1px solid #ccc",
                            margin: '2px',
                            overflow: 'hidden',
                        }}
                    >
                        &nbsp;
                    </Box>
                ]
            )
        }

        return eventsForTimeSlot.map((event) => (
            <Box key={event.date} sx={{ display: 'flex', height: '100px' }}>
                <Box
                    sx={{
                        borderLeft: `3px solid ${event.borderColor}`,
                        width: '100%',
                        height: '86px',
                        marginTop: '16px',
                        backgroundColor: event.backgroundColor,
                        paddingTop: '6px',
                        textAlign: 'start',
                        paddingLeft: '6px',
                    }}
                >
                    <Box
                        sx={{
                            color: '#185CD4',
                            fontSize: '12px',
                            lineHeight: '20px',
                            fontWeight: '400',
                        }}
                    >
                      10:30 AM
                    </Box>
                    <Typography
                        sx={{
                            color: '#185CD4',
                            fontSize: '12px',
                            lineHeight: '20px',
                            fontWeight: '600',
                        }}
                    >
                        {event.event}{' '}
                    </Typography>
                </Box>
            </Box>
        ))
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto', // enable horizontal scrolling
    }

    const timeColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '63px',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px'
    }
    const timeSlotStyle = {
        border: '1px solid #ccc',
        width: '126px', // adjust the width as needed
        overflow: 'hidden',
    }

    const dayRowStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    const dayHeaderStyle = {
        padding: '8px',
        fontWeight: 'bold',
        border: '1px solid #ccc',
        width: '126px', // adjust the width as needed
    }

    return (
        <Box sx={containerStyle} className="weekly-view">
            <Box sx={timeColumnStyle}>
                {times.map((time, index) => (
                    <Box key={index} sx={{timeSlotStyle, height:'120px', width:'100px',}}>
                        {time}
                    </Box>
                ))}
            </Box>

            {days.map((day, dayIndex) => (
                <Box key={dayIndex} sx={dayRowStyle}>
                    <Box sx={dayHeaderStyle}>
                        <Box sx={{ fontWeight: 400 , color: '#98A2B3', fontSize: '12px'}}>{day}</Box>
                        <Box>{dayIndex + 16}</Box>
                    </Box>
                    {times.map((time, timeIndex) => (
                        <Box key={`${timeIndex}${time}`} sx={timeSlotStyle}>
                            {...renderEvents(dayIndex, timeIndex)}
                        </Box>
                    ))}
                </Box>
            ))}
        </Box>
    )
}

export default VBWeeklyView
