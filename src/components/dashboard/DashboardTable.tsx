
import { Box } from '@mui/system'
import VBTableComponent, { ITableComponent } from '../VBTableComponent'

const DashboardTable = ({ data, headers, dataKeyAccessors }: ITableComponent) => {
    return (
        <Box >
            <VBTableComponent headers={headers} data={data} dataKeyAccessors={dataKeyAccessors} />
        </Box>
    )
}
export default DashboardTable
