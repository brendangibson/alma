// Confirmation that the lead has submitted their form

import styled from "styled-components";
import Image from "next/image";
import Button from "./button";

type Props = {
  onClose: () => void;
};

const SubmissionConfirmation = ({ onClose }: Props) => (
  <Wrapper>
    <CenteredImage src="/info.png" height={100} width={100} alt="info" />
    <h3>Thank You!</h3>
    <p>
      Your information was submitted to our team of immigration attorneys.
      Expect an email from hello@tryalma.ai.
    </p>
    <Button onClick={onClose}>Go Back to Homepage</Button>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin: 0 auto;
  width: 50%;
`;

const CenteredImage = styled(Image)``;

export default SubmissionConfirmation;
