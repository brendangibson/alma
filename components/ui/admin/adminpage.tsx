"use client";

import styled from "styled-components";
import LeftNav from "@/components/ui/admin/leftnav";
import LeadsTableSection from "@/components/ui/admin/leadstablesection";
import { store } from "../../../src/lib/store";

import { Provider } from "react-redux";

export default function AdminPage({ leads }) {
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
