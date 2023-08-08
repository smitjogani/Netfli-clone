import React from "react";
import "./Profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firbase";
import Planscreen from "../PlanScreen/Planscreen";

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Navbar />
      <div className="profileScreenBody">
        <h1>Edit Profile</h1>
        <div className="profileScreenInfo">
          <img
            src="https://imgs.search.brave.com/XNULQCkNiPo_257elLu8wipGVIAzN15ecxOMLHWBnuY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTV5/dXA1aGQyaTYweDdl/dzMuanBn"
            alt=""
          />

          <div className="profileScreenDetails">
            <h2>{user.email}</h2>
            <div className="profileScreePlans">
              <h3 className="membership">Plans</h3>
              <Planscreen />
              <button
                onClick={() => auth.signOut()}
                className="profilescreenSignout"
              >
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
