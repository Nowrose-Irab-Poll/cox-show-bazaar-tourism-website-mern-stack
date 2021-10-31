import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { user, signInUsingGoogle, logOut } = useAuth();
  const location = useLocation();

  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((res) => {
      history.push(redirect_uri);
    });
  };

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="m-5 p-5">
      <h2>Log In Using Google</h2>

      {user.email && (
        <div>
          <h4>Signed In as: {user.displayName}</h4>
          <h4>Email: {user.email}</h4>
        </div>
      )}

      {user.email ? (
        <button onClick={handleLogOut} className="btn btn-primary">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="me-2"
          ></FontAwesomeIcon>
          Log Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn btn-primary">
          <FontAwesomeIcon icon={faGoogle} className="me-2"></FontAwesomeIcon>
          Google Sign In
        </button>
      )}
    </div>
  );
};

export default Login;
