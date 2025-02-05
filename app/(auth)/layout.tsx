"use client";

import Authenticate from "@/components/ui/admin/authenticate";
import type React from "react";
import { useState } from "react";

export default function ({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthenticate = () => {
    setAuthenticated(true);
  };

  return authenticated ? (
    children
  ) : (
    <Authenticate onAuthentication={handleAuthenticate} />
  );
}
