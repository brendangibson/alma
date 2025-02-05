// Nice button

import styled from "styled-components";

type Props = {
  children: any;
  [x: string]: any;
};

const Button = ({ children, ...rest }: Props) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

const StyledButton = styled.button`
  border-radius: 8px;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-02) var(--spacing-05);
  width: 100%;
  cursor: pointer;
`;

export default Button;
