import React from "react";
import PropTypes from "prop-types";
import "./button.css";

// Primary UI component for user interaction
export const Button = ({ btnType, backgroundColor, size, label, ...props }) => (
  <button
    type="button"
    className={`button button--${size} button--${btnType}`}
    style={backgroundColor && { backgroundColor }}
    {...props}
  >
    {label}
  </button>
);

Button.propTypes = {
  backgroundColor: PropTypes.string, // What background color to use
  size: PropTypes.oneOf(["small", "medium", "large"]), // Button size
  label: PropTypes.string.isRequired, // Button text
  onClick: PropTypes.func, // Optional click handler
};

Button.defaultProps = {
  backgroundColor: null,
  btnType: "primary",
  size: "medium",
  onClick: undefined,
};
