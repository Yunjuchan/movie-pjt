import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Nav = styled.div`
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20%;
  font-size: 20px;
  a {
    text-decoration: none;
    color: #1A5586;
    font-weight: bold;
  }
  @media screen and (max-width: 1024px) {
    transition: all 0.2s;
    padding: 20px;
  }
`;

const NavItems = styled.div`
  display: flex;
  margin: 5px;
  gap: 20px;
`;

const NavItem = styled.div``;

export default function Layout() {
  return (
    <Wrapper>
      <Nav>
        <NavItems>
          <Link to="/">
            <NavItem>Home</NavItem>
          </Link>
        </NavItems>
        <NavItems>
          <Link to="/login">
            <NavItem>Log In</NavItem>
          </Link>
          <Link to="signup">
            <NavItem>Sign Up</NavItem>
          </Link>
        </NavItems>
      </Nav>
      <Outlet />
    </Wrapper>
  );
}
