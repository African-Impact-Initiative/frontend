import { FC } from "react"

export type BasicLayout = {
    Component: FC,
    title?: string,
    [key: string]: any
}

export type LayoutWithChildren = {
    Component: FC,
    title?: string,
    [key: string]: any,
    children?: any,
}