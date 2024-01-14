import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const VBCalendar = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                sx={{ fontSize: '40px', color: '#DC6803', width:'100%' }}
                showDaysOutsideCurrentMonth
                fixedWeekNumber={6}
            />
        </LocalizationProvider>
    )
}

export default VBCalendar