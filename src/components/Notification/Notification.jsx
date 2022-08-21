import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";

const Notification = ({ children, handleClick }) => {
  return (
    <S.Notification className="notification">
      <div className="errorNotification">
        <div className="errorChildren">{children}</div>
        <S.RemoveButton className="delete" onClick={handleClick}>
          X
        </S.RemoveButton>
      </div>
    </S.Notification>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Notification;
