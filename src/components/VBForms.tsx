import { FilledInputProps, InputBaseComponentProps, InputProps, MenuItem, OutlinedInputProps, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export interface ITextFieldProps {
    value: string,
    setter: (value: string) => void,
    type?: string,
    label: string,
    placeholder?: string,
    validator?: () => boolean,
    required: boolean,
    helper?: string,
    size?: 'small' | 'medium',
    inputProps?: InputBaseComponentProps,
    multiline?: boolean,
    rows?: number,
    InputProps?: Partial<OutlinedInputProps> | Partial<FilledInputProps> | Partial<InputProps>
}

export const VBTextField = ({value, setter, type, label, placeholder, validator, required, helper, size, inputProps, multiline, rows, InputProps}: ITextFieldProps) => {
    const [formError, setFormError] = useState(false)

    const validate = () => {
        let valid = true

        if (validator !== undefined)
            valid = validator()
        else if (required) {
            console.log(1)
            valid = !(value && value.length > 0)
        }

        setFormError(!valid)

        if(!valid && helper === undefined)
            helper = 'Required Field!'
    }

    return (
        <TextField
            size={size}
            label={label}
            placeholder={placeholder? placeholder : ''}
            value={value}
            onBlur={() => validate()}
            onChange={(e) => setter(e.target.value)}
            helperText={formError? helper : ''}
            error={formError}
            required
            type={type}
            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
            InputLabelProps={{ required: false }}
            inputProps={inputProps}
            multiline={multiline}
            rows={rows}
            InputProps={InputProps}
        />
    )
}

type SelectItem = {
    value: string,
    label: string
}

export interface ISelectProps {
    value: string,
    setter: (value: string) => void,
    label: string,
    required: boolean,
    helper?: string,
    size?: 'small' | 'medium',
    list: Array<SelectItem>
}

export const VBSelect = ({ label, list, value, setter, required, helper, size }: ISelectProps) => {
    return (
        <>
            <Typography variant='h6' gutterBottom>{label}</Typography><TextField
                value={value}
                select
                label={label}
                fullWidth
                size={size}
                onChange={(e) => setter(e.target.value)}
                required={required}
                helperText={helper}
                sx={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {list.map(item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)}
            </TextField>
        </>
    )
}