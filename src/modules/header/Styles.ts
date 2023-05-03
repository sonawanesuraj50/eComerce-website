import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 80px;
  background-color: whitesmoke;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const HeaderLinkWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const HeaderLink = styled.div`
  color: red;
  cursor: pointer;
`;
