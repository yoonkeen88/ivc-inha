import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #7b61ff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>IVC</Logo>
      <Nav>
        <NavLink>About</NavLink>
        <NavLink>Mission</NavLink>
        <NavLink>Recruit</NavLink>
        <NavLink>News</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;