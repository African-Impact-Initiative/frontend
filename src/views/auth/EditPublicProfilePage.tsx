import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateOrganization } from "../../store/userOrganizationReducer";
import Organization from "../../types/organization";
import PrivateEditPublicProfileView, { PrivateEditPublicProfileViewType } from "../../components/publicProfile/PrivateEditPublicProfileView";
import PublicProfileView, { PublicProfileViewType } from "../../components/publicProfile/PublicProfileView";

const EditPublicProfilePage = () => {
    const dispatch = useAppDispatch();

    const org = useAppSelector((state) => state.userOrganization);

    const [isPublicView, setIsPublicView] = useState(false);
    const [logoModal, setLogoModal] = useState(false)
    const [leadershipModal, setLeadershipModal] = useState(false)
    const [jobModal, setJobModal] = useState(false)
    const [tagline, setTagline] = useState('');
    const [aboutUs, setAboutUs] = useState('');
    const [country, setCountry] = useState('')
    const [size, setSize] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [twitter, setTwitter] = useState('');
    const [facebook, setFacebook] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');

    useEffect(() => {
        if (org.data) {
            setTagline(org.data.tagline || '');
            setAboutUs(org.data.aboutUs || '');
            setCountry(org.data.location || '');
            setEmail(org.data.email || '');
            setSize(org.data.size || '');
            setWebsite(org.data.website && org.data.website.replace(/^https?:\/\//, '') || '');
            setInstagram(org.data.instagram && org.data.instagram.replace(/^https?:\/\//, '') || '');
            setFacebook(org.data.facebook && org.data.facebook.replace(/^https?:\/\//, '') || '');
            setTwitter(org.data.twitter && org.data.twitter.replace(/^https?:\/\//, '') || '');
            setLinkedin(org.data.linkedin && org.data.linkedin.replace(/^https?:\/\//, '') || '');
        }
    }, [org]);

    const handleSubmit = () => {
        const updateOrg = {
            tagline,
            size,
            email,
            aboutUs,
            location: country || null,
            twitter: twitter && "https://" + twitter || '',
            website: website && "https://" + website || '',
            facebook: facebook && "https://" + facebook || '',
            linkedin: linkedin && "https://" + linkedin || '',
            instagram: instagram && "https://" + instagram || '',
        }
        if (org.data && org.data.id) {
            dispatch(updateOrganization(org.data.id, updateOrg as Organization));
        }
    }

    const toggleView = () => {
        setIsPublicView(!isPublicView);
    }

    const PrivateEditPublicProfileViewProp: PrivateEditPublicProfileViewType = {
        name: org.data?.name || '',
        tagline,
        aboutUs,
        country,
        size,
        website,
        email,
        linkedin,
        twitter,
        facebook,
        instagram,
        jobModal,
        leadershipModal,
        logoModal,
        setTagline,
        setAboutUs,
        setCountry,
        setSize,
        setWebsite,
        setEmail,
        setLinkedin,
        setTwitter,
        setFacebook,
        setInstagram,
        setJobModal,
        setLeadershipModal,
        setLogoModal,
        toggleView,
        handleSubmit
    };

    const PublicProfileViewProp: PublicProfileViewType = {
        name: org.data?.name || '',
        tagline,
        aboutUs,
        country,
        size,
        website,
        email,
        linkedin,
        twitter,
        facebook,
        instagram,
        isEditing: true,
        toggleView,
        handleSubmit
    };

    return (
        isPublicView 
            ? <PublicProfileView {...PublicProfileViewProp} /> 
            : <PrivateEditPublicProfileView {...PrivateEditPublicProfileViewProp} />
    );
}

export default EditPublicProfilePage;