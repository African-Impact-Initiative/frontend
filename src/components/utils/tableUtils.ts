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
        return '#FEF6EE'
    else
        return '#EFF8FE'
}

export const renderTeamtypeBg = (type: string) => {
    if (type === 'Marketing')
        return 'rgba(6, 118, 71, 1)'
    else if (type === 'Operations')
        return 'rgba(185, 56, 21, 1)'
    else
        return 'rgba(2, 106, 162, 1)'
}


export const renderStatusTypeBorder = (type: string) => {
    if (type === 'Submitted')
        return '1px solid rgba(171, 239, 198, 1)'
    else if (type === 'Due')
        return '1px solid rgba(254, 223, 137, 1)'
    else
        return '1px solid rgba(254, 205, 202, 1)'
}

export const renderStatusTypeBackground = (type: string) => {
    if (type === 'Submitted')
        return '#ECFDF3'
    else if (type === 'Due')
        return '#FFFAEB'
    else
        return '#FEF3F2'
}

export const renderStatusTypeBg = (type: string) => {
    if (type === 'Submitted')
        return 'rgba(6, 118, 71, 1)'
    else if (type === 'Due')
        return 'rgba(181, 71, 8, 1)'
    else
        return 'rgba(180, 35, 24, 1)'
}