import styled from "styled-components";

export const Footer = styled.div`
  background: #ffffff;
  border-top: 1px solid #000000;
  color: #000000;
  display: flex;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
  width: 80%;

  .socialMedia {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    .footer-item {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 1024px) {
    p {
      font-size: 1rem;
    }
  }
`;
