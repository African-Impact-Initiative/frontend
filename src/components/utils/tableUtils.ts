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



export const renderChallengeGroupBorder = (type: string) => {
    return '1px solid #ABEFC6'
}

export const renderChallengeGroupBackground = (type: string) => {
    
    return '#ECFDF3'
}

export const renderChallengeGroupBg = (type: string) => {
    return '#085D3A'
}

const industries = [
    {
        name: 'Education',
        borderColor: '#B2DDFF',
        backgroundColor: '#EFF8FF',
        color: '#175CD3'
    },
    {
        name: 'Social',
        borderColor: '#ABEFC6',
        backgroundColor: '#ECFDF3',
        color: '#067647'
    },
    {
        name: 'Health',
        borderColor: '#C7D7FE',
        backgroundColor: '#EEF4FF',
        color: '#3538CD'
    },
    {
        name: 'Research',
        borderColor: '#F9DBAF',
        backgroundColor: '#FEF6EE',
        color: '#B93815'
    },
    {
        name: 'Technology',
        borderColor: '#F9DBAF',
        backgroundColor: '#FEF6EE',
        color: '#B93815'
    }
]
export const renderAlertTagIndustryColor = (type: string) => {
    const industry = industries.find((industry) => industry.name === type)
    if (industry)
        return industry.color
    return '#bbb'
}

export const renderAlertTagIndustryBackground = (type: string) => {
    const industry = industries.find((industry) => industry.name === type)
    if (industry)
        return industry.backgroundColor
    return '#eee'
}