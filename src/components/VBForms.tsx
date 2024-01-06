import { TextField } from "@mui/material"
import { useState } from "react"

export interface ITextFieldProps {
    value: string,
    setter: (value: string) => void,
    type?: string,
    label: string,
    placeholder?: string,
    validator?: () => boolean,
    required: boolean,
    helper?: string
}

export const VBTextField = ({value, setter, type, label, placeholder, validator, required, helper}: ITextFieldProps) => {
    const [formError, setFormError] = useState(false)

    const validate = () => {
        let valid = true

        if (validator !== undefined)
            valid = validator()
        else if (required) {
            valid = !(value && value.length > 0)
        }

        setFormError(valid)

        if(!valid && helper === undefined)
            helper = 'Required Field!'
    }

    return (
        <TextField
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
        />
    )
}