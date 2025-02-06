// Table that lists all the leads

import { Lead, Leads } from "@/app/api/leads/route";
import styled from "styled-components";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { approve, unapprove } from "../../../src/lib/leadsSlice";
import Button from "../button";
import { RootState } from "@/src/lib/store";

const LeadsTable = () => {
  const leads = useSelector((state: RootState) => state.leads.value);
  const dispatch = useDispatch();

  console.log("leads: ", leads);

  const handleStatusClick = (lead: Lead) => () => {
    if (lead.status === "Pending") {
      dispatch(approve(lead.id));
    } else {
      dispatch(unapprove(lead.id));
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <TH align="left">Name↓</TH>
          <TH align="left">Submitted↓</TH>
          <TH align="left">Status↓</TH>
          <TH align="left">Country↓</TH>
        </tr>
      </thead>
      <tbody>
        {leads?.map((lead) => (
          <tr key={lead.id}>
            <TD align="left">{lead.name}</TD>
            <TD align="left">
              {format(lead.submitted, "dd/MM/yyyy, hh:mm a")}
            </TD>
            <TD align="left">
              <Button onClick={handleStatusClick(lead)}>{lead.status}</Button>
            </TD>
            <TD align="left">{lead.country}</TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey);
  width: 100%;
`;

const TH = styled.th`
  color: var(--color-grey);
  cursor: pointer;
  padding: var(--spacing-03);
`;

const TD = styled.td`
  padding: var(--spacing-03);
  border-bottom: 1px solid var(--color-grey);
`;

export default LeadsTable;
