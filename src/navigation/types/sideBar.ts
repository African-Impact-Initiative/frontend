import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export type Link = {
    id: number,
    name: string,
    to: string,
    icon: string | OverridableComponent<SvgIconTypeMap<NonNullable<unknown>, 'svg'>> & {
        muiName: string
    }
}