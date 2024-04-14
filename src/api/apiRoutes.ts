const apiRoutes: { [key: string]: { [key:string]: string } } = {
    userOperations: {
        baseUrl: 'accounts/',
        userUrl: 'me/',
        adminUrl: 'admins/',
        passwordResetUrl: 'password_reset/',
        passwordResetConfirmUrl: 'password_reset/confirm/',
        passwordChangeUrl: 'change_password/',
        emailChangeUrl: 'change_email/',
        activateUrl: 'activate/',
        terms: 'onboarding/terms/',
        personalInfo: 'onboarding/personal-info/',
        addOrganization: 'onboarding/add-organization/',
    },
    organizationOperations: {
        baseUrl: 'organizations/',
        stageUrl: 'stages/',
        challengeUrl: 'challenges/',
        fundingUrl: 'funding/',
        findById: 'identifier/',
        uploadLogo: 'upload-logo/',
    },
    authorizationOperations: {
        baseUrl: 'auth/',
        password: 'token/',
        google: 'convert-token/',
        kill: 'invalidate-sessions/'
    },
}

export default apiRoutes