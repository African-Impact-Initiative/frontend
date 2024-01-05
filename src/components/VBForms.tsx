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
        if (validator !== undefined)
            setFormError(validator())
        else if (required)
            setFormError(!(value && value.length > 0))
    }

    return (
        <TextField
            label={label}
            placeholder={placeholder? placeholder : ''}
            value={value}
            onBlur={() => validate()}
            onChange={(e) => setter(e.target.value)}
            helperText={helper}
            error={formError}
            required
            type={type}
            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
            InputLabelProps={{ required: false }}
        />
    )
}