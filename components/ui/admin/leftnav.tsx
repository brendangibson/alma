import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <Nav>
      <LogoArea>
        <Logo src="/alma.png" width={166} height={68} alt="alma" />
      </LogoArea>
      <ul>
        <SelectedLink>Leads</SelectedLink>
        <UnselectedLink>Settings</UnselectedLink>
      </ul>
      <User>
        <Initials>A</Initials>Admin
      </User>
    </Nav>
  );
}

const Nav = styled.nav`
  position: relative;
  height: 100vh;
  width: 15vw;

  border-right: 1px solid #ccc;
`;

const LogoArea = styled.div`
  background: #91925f00;
  background: radial-gradient(
    circle closest-side,
    var(--color-yellow),
    transparent
  );
  background-repeat: no-repeat;
  background-position: -7.5vw -7.5vw;
  height: 15vw;
`;

const Logo = styled(Image)`
  position: absolute;
  top: 5%;
  left: 5%;
`;

const User = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Initials = styled.div`
  border-radius: 50%;
  background: #ccc;
  height: 5vh;
  width: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedLink = styled.li`
  font-weight: bold;
  list-style: none;
  padding: var(--spacing-03) 0;
`;

const UnselectedLink = styled.li`
  list-style: none;
  padding: var(--spacing-03) 0;
`;
