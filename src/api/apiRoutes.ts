const apiRoutes = {
    userOperations: {
        baseUrl: 'accounts/',
        userUrl: 'accounts/me/',
        adminUrl: 'accounts/admins/',
        passwordResetUrl: 'password_reset/',
        passwordResetConfirmUrl: 'password_reset/confirm/',
        passwordChangeUrl: 'accounts/change_password/',
        emailChangeUrl: 'accounts/change_email/',
        activateUrl: 'accounts/activate/',
        terms: 'accounts/onboarding/terms/',
        personalInfo: 'accounts/onboarding/personal-info/',
        addOrganization: 'accounts/onboarding/add-organization/',
    }
}

export default apiRoutes