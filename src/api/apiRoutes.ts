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
        teamStatus: 'users/team-status/', // Added for new team status endpoint 
        userDetail: ':id/', // Added for UserViewUpdateDeleteAPIView
        // Add invitation routes
        invitations: 'invitations/',
        processInvitation: 'invitations/process/:token/',
        acceptInvitation: 'invitations/:id/accept/',
        declineInvitation: 'invitations/:id/decline/',
        withdrawInvitation: 'invitations/:id/withdraw/',
        resendInvitation: 'invitations/:id/resend/',
    },
    organizationOperations: {
        baseUrl: 'organizations/',
        stageUrl: 'stages/',
        challengeUrl: 'challenges/',
        fundingUrl: 'funding/',
        findById: 'identifier/',
        uploadLogo: 'upload-logo/', // Added for logo upload
        organizationMembers: 'members/:organizationId/', 
        updateMember: 'members/:organizationId/user/:userId/', // Added for member updates
        updateMemberCoowner: 'members/:organizationId/user/:userId/coowner/'
    },
    authorizationOperations: {
        baseUrl: 'auth/',
        password: 'token/',
        google: 'convert-token/',
        kill: 'invalidate-sessions/'
    },
}

export default apiRoutes