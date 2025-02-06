"use client";

import styled from "styled-components";
import LeftNav from "@/components/ui/admin/leftnav";
import LeadsTableSection from "@/components/ui/admin/leadstablesection";
import { store } from "../../../src/lib/store";
import { add } from "../../../src/lib/leadsSlice";
import { Provider, useDispatch } from "react-redux";
import { Leads } from "@/app/api/leads/route";

type Props = {
  leads: Leads;
};

export default function AdminPage({ leads }: Props) {
  return (
    <Provider store={store}>
      <Main>
        <LeftNav />
        <section>
          <LeadsTableSection leads={leads} />
        </section>
      </Main>
    </Provider>
  );
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;
