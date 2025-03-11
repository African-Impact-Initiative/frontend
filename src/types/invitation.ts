import { Id } from './propertyTypes'
export interface CreateInvitation {
    email: string;
    organization: Id | number | string | null;
}

export interface InvitationResponse {
    id: number;
    email: string;
    organization: number;
    invitedBy?: number;
    invited_by?: number;
    status: string;
    createdAt?: string;
    created_at?: string;
    token: string;
    invitedByEmail?: string;
    invited_by_email?: string;
    invitedByName?: string;
    invited_by_name?: string;
    organizationName?: string;
    organization_name?: string;
    logo?: string;
}


