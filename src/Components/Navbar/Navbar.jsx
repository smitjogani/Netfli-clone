import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  const handleHome = () => {
    navigate("/");
  };

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img
          onClick={handleHome}
          className="nav-logo"
          src="https://imgs.search.brave.com/tAdyvoR9Y6ynlweoTLsw-OSo1X3SPOgP6lqzjCF2p0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb29k/aWJlZS5jb20vd3At/Y29udGVudC91cGxv/YWRzL05ldGZsaXgt/bG9nby0zMDB4MzAw/LnBuZw"
          alt="logo"
        />
        <img
          onClick={handleClick}
          className="nav-avatar"
          src="https://imgs.search.brave.com/XNULQCkNiPo_257elLu8wipGVIAzN15ecxOMLHWBnuY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTV5/dXA1aGQyaTYweDdl/dzMuanBn"
          alt="profilePic"
        />
      </div>
    </div>
  );
}

export default Navbar;
