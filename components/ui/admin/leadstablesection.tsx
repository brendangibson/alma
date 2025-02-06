// Content section that contains the table that lists all the leads

"use client";

import styled from "styled-components";
import LeadsFilters from "./leadsfilters";
import LeadsTable from "./leadstable";
import { Leads } from "@/app/api/leads/route";
import { add } from "../../../src/lib/leadsSlice";
import { useDispatch } from "react-redux";

type Props = {
  leads: Leads;
};

export default function LeadsTableSection({ leads }: Props) {
  const dispatch = useDispatch();

  dispatch(add(leads));
  return (
    <Wrapper>
      <h2>Leads</h2>
      <LeadsFilters />
      <LeadsTable />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  gap: var(--spacing-04);
  flex-direction: column;
`;
