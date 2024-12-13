export interface CreateInvitation {
    email: string;
    organization: number;
}

export interface InvitationResponse {
    id: number;
    email: string;
    organization: number;
    invited_by: number;
    status: string;
    created_at: string;
    token: string;
}