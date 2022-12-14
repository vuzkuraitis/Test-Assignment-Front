import React from "react";
import PropTypes from "prop-types";
import * as S from "./Button.styles";

const Button = ({ type, children, className, handleClick, value }) => {
  return (
    <S.Button
      type={type}
      onClick={handleClick}
      className={className}
      value={value}
      id={value}
    >
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
