const apiRoutes = {
    userOperations: {
        baseUrl: '/api/accounts/',
        userUrl: '/api/accounts/me/',
        adminUrl: '/api/accounts/admins/',
        passwordResetUrl: '/api/password_reset/',
        passwordResetConfirmUrl: '/api/password_reset/confirm/',
        passwordChangeUrl: '/api/accounts/change_password/',
        emailChangeUrl: '/api/accounts/change_email/',
        activateUrl: '/api/accounts/activate/',
        terms: '/api/accounts/onboarding/terms/',
        personalInfo: '/api/accounts/onboarding/personal-info/',
        addOrganization: '/api/accounts/onboarding/add-organization/',
    }
}

export default apiRoutes