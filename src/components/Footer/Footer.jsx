import React from "react";
import * as S from "./Footer.styles";

const Footer = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <p>Copyright © {year} Scandiweb Test assignment</p>
    </S.Footer>
  );
};

export default Footer;
