import React from "react";

import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <FullImage src="/discs.png" width={290} height={514} alt="discs" />
      <Logo src="/alma.png" width={106} height={46} alt="alma" />
      <Title>Get an assessment of your immigration case</Title>
    </Wrapper>
  );
}

const leftAlign = "20%";

const Wrapper = styled.header`
  background: var(--color-light-green);
  width: 100%;
  height: 40vh;
  position: relative;
`;

const FullImage = styled(Image)`
  height: 100%;
`;

const Logo = styled(Image)`
  position: absolute;
  top: 10%;
  left: ${leftAlign};
`;

const Title = styled.h1`
  position: absolute;
  left: ${leftAlign};
  top: 30%;
  text-transform: capitalize;
`;
