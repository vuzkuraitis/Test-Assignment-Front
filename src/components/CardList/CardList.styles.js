import styled from "styled-components";
import Card from "../Card/Card";

export const CardList = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CardItem = styled(Card)`
  box-sizing: border-box;
  margin-bottom: 3rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-right: 4rem;
    width: calc(50% - 2rem);
    :nth-child(even) {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    margin-right: 2.65rem;
    width: calc(25% - 2rem);
    :nth-child(even) {
      margin-right: 2.65rem;
    }
    :nth-child(4) {
      margin-right: 0;
    }
  }
`;
