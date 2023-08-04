import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import palette from "../../assets/palette";

const SidebarWrapper = styled.nav`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  align-items: center;
`;
// const Title = styled.div`
//   color: #042b5c;
//   display: flex;
//   flex-direction: column;
//   padding-top: 0.5rem;
//   margin-bottom: 1rem;
//   height: 3vh;
//   p {
//     margin: auto 0;
//   }
// `;
const RouterWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  .link-active {
    border-radius: 5px;
    background: #fefefe;
    color: ${palette.navy};
    font-weight: 900;
  }
  a {
    display: flex;
    text-align: left;
    width: 100%;
    padding: 0.6rem 0 0.6rem 0;
    margin-bottom: 0.3rem;
  }
  a > svg {
    font-size: 1rem;
    padding-left: 0.7rem;
  }
  a:visited {
  }
  a:hover {
    border-radius: 5px;
    background: #fefefe;
  }
`;

const LinkNm = styled.span`
  margin-left: 0.7rem;
  font-size: 1rem;
`;
function Sidebar() {
  return (
    <>
      <SidebarWrapper>
        {/* <Title>
          <p>
            HELPER LOGO - {"  "}
            <span role="img" aria-label="writing hand">
              ✋
            </span>
          </p>
        </Title> */}
        <RouterWrapper>
          <NavLink
            to="/customPage"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <LinkNm>my customPage</LinkNm>
          </NavLink>
          <NavLink
            to="/userCustomPage"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            <LinkNm>user custom page</LinkNm>
          </NavLink>
        </RouterWrapper>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
