import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <Nav>
      <Logo src="/alma.png" width={166} height={68} alt="alma" />
      <ul>
        <li>Leads</li>
        <li>Settings</li>
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
  background: #91925f00;
  background: linear-gradient(315deg, #91925f00, #e2db56);
  border-right: 1px solid #ccc;
`;

const Logo = styled(Image)`
  position: absolute;
  top: 20%;
  left: 20%;
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
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
