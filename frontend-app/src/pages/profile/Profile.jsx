import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Profile;