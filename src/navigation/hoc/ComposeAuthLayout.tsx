import { FC } from 'react'
import AuthLayout from '../layouts/AuthLayout'

const ComposeAuthLayout = (Component: FC) => (passThroughProps: { [key: string]: any }) => (
    <AuthLayout {...passThroughProps} Component={Component} />
)

export default ComposeAuthLayout
