import { Button, IconButton, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ButtonProps {
    size?: "small" | "large" | "medium"
    onClick?: (event: any) => void
}

interface TextButtonProps extends ButtonProps {
    text: string,
}

interface IconButtonProps extends ButtonProps {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string
    },
    aria: {
        label: string,
        controls: string,
        popup?: boolean | "dialog" | "menu" | "grid" | "false" | "true" | "listbox" | "tree"
    }
}

export const VBContainedButton = ({ size, text, onClick }: TextButtonProps) => {
    const handleClick = (e: any) => {
        if (onClick !== undefined)
            onClick(e)
    }

    return (
        <Button size={size === undefined? "medium" : size} variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}} onClick={handleClick}>
            { text }
        </Button>
    )
}

export const VBOutlinedButton = ({ size, text, onClick }: TextButtonProps) => {
    const handleClick = (e: any) => {
        if (onClick !== undefined)
            onClick(e)
    }

    return (
        <Button size={size === undefined? "medium" : size} variant='outlined' sx={{color: '#000'}} onClick={handleClick}>
            { text }
        </Button>
    )
}

export const VBIconButton = ({ size, onClick, Icon, aria }: IconButtonProps) => {
    const handleClick = (e: any) => {
        if (onClick !== undefined)
            onClick(e)
    }

    return (
        <IconButton
            size={size === undefined? "medium" : size}
            aria-label={aria.label}
            aria-controls={aria.controls}
            aria-haspopup={aria.popup}
            onClick={handleClick}
            color="inherit"
        >
            <Icon />
        </IconButton>
    )
}