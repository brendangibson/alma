// Mock sign-in Component. Clicking on "Authenticate" will sign the user in

import styled from "styled-components";
import Button from "../button";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

const renderers = [...materialRenderers];

type Props = {
  onAuthentication: () => void;
};

const Authenticate = ({ onAuthentication }: Props) => (
  <Wrapper>
    <JsonForms
      schema={{
        type: "object",
        properties: {
          username: {
            type: "string",
            minLength: 1,
          },
          password: {
            type: "string",
            minLength: 1,
          },
        },
      }}
      renderers={renderers}
      cells={materialCells}
      data={{ username: "", password: "" }}
    />
    <Button onClick={onAuthentication}>Authenticate</Button>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: var(--spacing-07) auto;
`;

export default Authenticate;
