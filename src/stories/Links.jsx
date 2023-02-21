import React from "react";
import PropTypes from "prop-types";
import "./links.css";

export const Link = ({ linkType, color, size, label, linkURL, ...props }) => (
  <a
    alt={label}
    className={`links link--${size} link--${linkType}`}
    style={color && { color }}
    target="_blank"
    href={linkURL}
    {...props}
  >
    {label}
  </a>
);

Link.propTypes = {
  color: PropTypes.string, // Link color
  size: PropTypes.oneOf(["small", "medium", "large"]), // Link size
  label: PropTypes.string.isRequired, // Link text
  linkURL: PropTypes.string, // Link URL
  onClick: PropTypes.func, // Optional click handler
};

Link.defaultProps = {
  color: null,
  linkType: "simple",
  size: "medium",
  linkURL: "https://cgbl-90.github.io/clopez/",
  onClick: undefined,
};
