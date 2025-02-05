// Homepage for the Alma leads App.
// Contains a form for a lead to enter their data

"use client";

import React from "react";
import styled from "styled-components";
import Header from "@/components/ui/header";
import LeadForm from "@/components/ui/leadForm";

const Main = styled.main`
  margin: 0;
`;

const Home = () => {
  return (
    <Main>
      <Header />
      <LeadForm />
    </Main>
  );
};

export default Home;
