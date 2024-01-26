import React from "react";
import "../styles/Profile.css";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export function Profile(_: ProfileProps) {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-details">
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </div>
            <button className="back-button" onClick={handleBackButtonClick}>
                Back
            </button>
        </div>
    );
}

export interface ProfileProps { }

export default Profile;
