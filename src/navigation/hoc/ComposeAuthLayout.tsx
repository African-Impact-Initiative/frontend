import { FC } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { PassThroughProps } from '../types/layout'

const ComposeAuthLayout = (Component: FC) => (passThroughProps: PassThroughProps) => (
    <AuthLayout {...passThroughProps} Component={Component} />
)

export default ComposeAuthLayout
