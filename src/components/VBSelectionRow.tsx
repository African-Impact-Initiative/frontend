import { Search } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { VBSelect } from './VBForms'

export interface ISelectionRowProps {
    search: boolean,
    type: string,
    header1?: string,
    header2?: string,
    header3?: string,
    label1?: string,
    label2?: string,
    label3?: string,
    firstBox?: boolean,
    secondBox?: boolean,
    thirdBox?: boolean
}

const VBSelectionRow = ({ search, type, header1, header2, label1, label2, firstBox, secondBox, thirdBox, header3, label3 }: ISelectionRowProps) => {
    const [status, setStatus] = useState('')

    const categories = [
        { label: 'science', value: 'science' },
        { label: 'commercial', value: 'commercial' },
        { label: 'Art', value: 'Art' },
    ]

    const filters = [
        { label: 'English', value: 'English' },
        { label: 'Maths', value: 'Maths' },
        { label: 'Science', value: 'Science' },
        { label: 'History', value: 'History' },
        { label: 'Art', value: 'Art' },
    ]
    return (
        <Box
            sx={{
                display: 'flex',
                margin: '40px 0',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: { md: 'row', xs: 'column' },

            }}
        >
            <Box sx={{ display: 'flex', columnGap: '16px', flexDirection: { md: 'row', xs: 'column' }, width: '100%' }}>
                {search && <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', rowGap: '5px', }} >
                    <Typography
                        sx={{
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#344054',
                            marginBottom: '6px'
                        }}
                    >
                        {type}
                    </Typography>
                    <Box
                        sx={{
                            width: { md: '360px', xs: '100%' },
                            height: '40px',
                            borderRadius: '4px',
                            border: '1px solid #D0D5DD',
                            display: 'flex',
                            padding: '10px',
                            columnGap: '10px',
                            alignItems: 'center',
                        }}
                    >
                        <Search sx={{ color: '#667085', height: '26px', width: '26px' }} />
                        <TextField
                            sx={{
                                '& fieldset': { border: 'none' },
                                width: '400px',
                            }}
                            label="Search"
                        />
                    </Box>
                </Box>}
                {firstBox && <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', rowGap: '5px', marginTop: { xs: '10px', md: '0px' } }} >
                    <Typography
                        sx={{
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#344054',
                            marginBottom: '6px',
                            textAlign: 'left'
                        }}
                    >
                        {header1}
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                        <VBSelect
                            label={label1!}
                            size="small"
                            setter={setStatus}
                            list={filters}
                            value={status}
                            required={false}
                        />
                    </Box>
                </Box>}
                {secondBox && <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', rowGap: '5px', marginTop: { xs: '10px', md: '0px' } }} >
                    <Typography
                        sx={{
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#344054',
                            marginBottom: '6px',
                            textAlign: 'left',
                        }}
                    >
                        {header2}
                    </Typography>

                    <Box sx={{ width: '100%', }}>
                        <VBSelect
                            label={label2!}
                            size="small"
                            setter={setStatus}
                            list={categories}
                            value={status}
                            required={false}
                        />
                    </Box>

                </Box>}
                {thirdBox && <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', rowGap: '5px' }} >
                    <Typography
                        sx={{
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#344054',
                            marginBottom: '6px',
                            textAlign: 'left',
                        }}
                    >
                        {header3}
                    </Typography>
                    {/* <Box
                    > */}
                    <Box sx={{ width: '100%', }}>
                        <VBSelect
                            label={label3!}
                            size="small"
                            setter={setStatus}
                            list={categories}
                            value={status}
                            required={false}
                        />
                    </Box>
                    {/* </Box> */}
                </Box>}

            </Box>

            <Box sx={{marginTop: { xs: '10px', md: '38px' }, justifyContent: { md: 'flex-end', xs: 'flex-start' } }}>
                <Box sx={{ display: 'flex', width: '100%', }}>
                    <Button
                        sx={{
                            width: '99px',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #D0D5DD',
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '10px',
                            // padding: '10px',
                            textTransform: 'none',
                        }}
                    >
                        <Typography
                            sx={{ color: '#344054', fontSize: '14px', lineHeight: '24px', fontWeight: '600' }}
                        >
                            Clear all
                        </Typography>
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export default VBSelectionRow