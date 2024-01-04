import { FC } from "react"

export type BasicLayout = {
    Component: FC,
    title?: string,
    [key: string]: any
}

export type LayoutWithChildren = {
    title?: string,
    [key: string]: any,
    children: any,
}

export type PassThroughProps = {
    title?: string,
    [key: string]: any,
    children: any,
}