import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./header.css";
import logo from "../assets/images/cgbl.svg";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        {user ? (
          <Button
            btnType="danger"
            size="small"
            onClick={onLogout}
            label="Log out"
          />
        ) : (
          <>
            <Button
              btnType="primary"
              size="small"
              onClick={onLogin}
              label="Log in"
            />
            <Button
              btnType="success"
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
