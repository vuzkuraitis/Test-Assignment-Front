import styled from "styled-components";

export const Notification = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9997;

  .errorNotification {
    display: flex;
    margin-top: 10rem;
    height: 3rem;
    position: relative;
    flex-direction: row;
    font-family: "Roboto", sans-serif;
    background-color: #ffffff;
    width: 40%;
    z-index: 9998;
  }
  .errorChildren {
    line-height: 3rem;
    margin: 0 auto;
  }
`;
export const RemoveButton = styled.button`
  border-radius: 50%;
  background: #d0c9c0;
  border: none;
  color: #ffffff;
  position: fixed;
  top: 9.4rem;
  right: 29%;
`;
