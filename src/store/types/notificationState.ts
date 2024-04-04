export type AppNotification = string | null

export type AppNotificationState = {
    successNotification: AppNotification,
    errorNotification: AppNotification,
    infoNotification: AppNotification
}

export type AppNotificationAction = {
    type: string
    payload: string | null
}
