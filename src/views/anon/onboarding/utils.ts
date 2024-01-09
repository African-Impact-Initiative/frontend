import { SideBarListItem } from '../../../components/VBLeftSideBarWithView'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'

export const terms: SideBarListItem = {
    Icon: LibraryBooksOutlinedIcon,
    title: 'Terms of Use',
    secondary: 'Please read before proceeding'
}

export const personalInfo: SideBarListItem = {
    Icon: PermIdentityOutlinedIcon,
    title: 'Personal Information',
    secondary: 'Tell us more about you'
}

export const onboardingPath: SideBarListItem = {
    Icon: ListOutlinedIcon,
    title: 'Onboarding Path',
    secondary: 'Choose your onboarading path'
}

export const companyProfile: SideBarListItem = {
    Icon: ErrorOutlineOutlinedIcon,
    title: 'Company Profile',
    secondary: 'Create your startup profile'
}

export const userOnboardingOutline = {
    title: (name: string) => `Welcome aboard ${name}`,
    tagline: 'Your venture building journey starts here.',
    list: [terms, personalInfo, onboardingPath, companyProfile]
}

export const developmentStepperProps = {
    title: (name: string) => `Hi ${name}, almost there!`,
    tagline: 'Just a few questions to help tailor your experience and resource recommendations',
    stepCount: 3
}

export const orgSearchParam = 'org'