/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { useUserStore } from "../../store/useUserStore";
import Button from "../common/Button";

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LogoArea = styled.div`
  margin-left: 3rem;
  font-size: 2rem;
`;
const UserInfoArea = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  flex-wrap: wrap;
  flex-direction: row;
  * {
  }
`;

export default function Header() {
  const { userInfo } = useUserStore();
  return (
    <>
      <HeaderWrapper>
        <LogoArea>😀</LogoArea>
        <UserInfoArea>
          {userInfo ? <Button type="text">로그아웃</Button> : ""}
        </UserInfoArea>
      </HeaderWrapper>
    </>
  );
}
