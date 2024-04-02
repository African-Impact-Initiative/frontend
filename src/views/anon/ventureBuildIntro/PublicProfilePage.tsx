import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import PublicProfileView, { PublicProfileViewType } from "../../../components/publicProfile/PublicProfileView";
import { useEffect } from "react";

const PublicProfilePage = () => {
    const navigate = useNavigate();

    const { identifier } = useParams();
    const orgs = useAppSelector((state) => state.organizations);
    const org = orgs.data.find((org) => org.identifier === identifier);

    const PublicProfileViewProp: PublicProfileViewType = {
        name: org?.name || '',
        logo: org?.logo || '',
        tagline: org?.tagline || '',
        aboutUs: org?.aboutUs || '',
        country: org?.location || '',
        size: org?.size || '',
        website: org?.website && org.website.replace(/^https?:\/\/(www\.)?/, '') || '',
        email: org?.email || '',
        linkedin: org?.linkedin && org.linkedin.replace(/^https?:\/\/(www\.)?/, '') || '',
        twitter: org?.twitter && org.twitter.replace(/^https?:\/\/(www\.)?/, '') || '',
        facebook: org?.facebook && org.facebook.replace(/^https?:\/\/(www\.)?/, '') || '',
        instagram: org?.instagram && org.instagram.replace(/^https?:\/\/(www\.)?/, '') || '',
        leadership: org?.userSet.filter(user => user.leadership === true) || [],
        industries: org?.industries || [],
        isEditing: false,
        toggleView: undefined,
        handleSubmit: undefined
    };

    useEffect(() => {
        !orgs.data.find((org) => org.identifier === identifier) && navigate('/profile');
    }, [identifier])

    return <PublicProfileView {...PublicProfileViewProp} />;
}

export default PublicProfilePage;