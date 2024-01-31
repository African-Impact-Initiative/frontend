import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/system'
import { TablePagination, Typography } from '@mui/material'
import { useState, Fragment } from 'react'

export const renderTeamtypeBorder = (type: string) => {
    if (type === 'Marketing')
        return '1px solid rgba(171, 239, 198, 1)'
    else if (type === 'Operations')
        return '1px solid rgba(249, 219, 175, 1)'
    else
        return '1px solid rgba(185, 230, 254, 1)'
}

export const renderTeamtypeBackground = (type: string) => {
    if (type === 'Marketing')
        return '#ECFDF4'
    else if (type === 'Operations')
        return ' #FEF6EE'
    else
        return '  #EFF8FE'
}

export const renderTeamtypeBg = (type: string) => {
    if (type === 'Marketing')
        return 'rgba(6, 118, 71, 1)'
    else if (type === 'Operations')
        return 'rgba(185, 56, 21, 1)'
    else
        return 'rgba(2, 106, 162, 1)'
}

export interface ITableComponent {
    headers: Array<string>,
    dataKeyAccessors: Array<string>,
    data: Array<{ [key: string]: string | number }>
}

const VBTableComponent = ({ headers, data, dataKeyAccessors }: ITableComponent) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (_: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        setPage(newPage)
        // aPI call for Pagination
    }

    const handleChangeRowsPerPage: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
        // aPI call for Pagination
    }

    const renderRow = (row: { [key: string]: string | number }) => {
        return (
            <TableRow
                role='table-row'
                sx={{
                    borderBottom: '1px solid #EAECF0',
                    marginBottom: '2000px',

                    height: '72px',
                    '& th': {
                        fontSize: '1.25rem',
                        color: 'rgba(96, 96, 96)',
                    },
                }}
                // key={uuidv4()}
                style={{marginBottom: '10px' , fontSize: '20px'}}
            >
                {dataKeyAccessors?.map((_, index) => (
                    <TableCell key={`table-cell-${index}`} align='left' role='table-row-cell'
                    >
                        {dataKeyAccessors[index] == 'team' ? (
                            <>
                                <Box
                                    sx={{
                                        border: renderTeamtypeBorder(row.team as string),
                                        backgroundColor: renderTeamtypeBackground(row.team as string),
                                        width: {md:'100px', xs: '100%'},
                                        height: {md:'22px', xs: '100%'},
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '100px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color:renderTeamtypeBg(row.team as string),
                                            fontWeight: '500',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {row.team}
                                    </Typography>
                                </Box>
                            </>
                        ) : (
                            <> {row[dataKeyAccessors[index]]}</>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        )
    }

    return (
        <TableContainer component={Paper} sx={{marginTop: '10px'}}>
            <Table sx={{ padding: '40px', marginTop: '12px' }}>
                <TableHead>
                    <TableRow sx={{ borderTop: '0px'}}>
                        {headers.map((header, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    color: '#475467',
                                    fontSize: '12px',
                                    fontWeight: '500',
                                    lineHeight: '18px',
                                }}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <Fragment
                            key={`table-body-${index}`}
                        >
                            {renderRow(row)}
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={data?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}

export default VBTableComponent
