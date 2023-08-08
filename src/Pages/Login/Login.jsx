import React, { useState } from "react";
import "./Login.css";

import SignupScreen from "../../Components/Signup/Signup";

const Login = () => {
  const [signin, setSignin] = useState(false);

  return (
    <div className="loginScreen">
      {/* <Navbar/> */}
      <div className="lgn-background">
        <img
          className="lgn-logo"
          src="https://imgs.search.brave.com/tAdyvoR9Y6ynlweoTLsw-OSo1X3SPOgP6lqzjCF2p0Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb29k/aWJlZS5jb20vd3At/Y29udGVudC91cGxv/YWRzL05ldGZsaXgt/bG9nby0zMDB4MzAw/LnBuZw"
          alt=""
        />
        <button className="lgn-btn" onClick={() => setSignin(true)}>
          Sign in
        </button>
        <div className="lgn-gradiant"></div>
        <div className="lgn-body">
          {signin ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="lgn-input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="lgn-getStart"
                    onClick={() => setSignin(true)}
                  >
                    GET STRATED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
