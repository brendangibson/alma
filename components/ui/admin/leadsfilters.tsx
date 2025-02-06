import styled from "styled-components";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

const uischema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      label: "Search",
      scope: "#/properties/search",
    },
    {
      type: "Control",
      label: "Status",
      scope: "#/properties/status",
    },
  ],
};

export default function LeadsFilters() {
  const renderers = [...materialRenderers];

  return (
    <Filters>
      <JsonForms
        schema={{
          type: "object",
          properties: {
            search: {
              type: "string",
            },
            status: {
              type: "string",
              enum: ["All", "Pending", "Reached Out"],
            },
          },
        }}
        uischema={uischema}
        renderers={renderers}
        cells={materialCells}
        data={{ search: "", status: "All" }}
      />
    </Filters>
  );
}

const Filters = styled.nav`
  display: flex;
  gap: var(--spacing-04);
  width: 33%;
`;
