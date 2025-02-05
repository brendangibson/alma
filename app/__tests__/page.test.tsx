import React from "react";

import { render, screen } from "@testing-library/react";
import { jest } from "@jest/globals";
import Home from "../../app/page";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe("Home", () => {
  it("renders the lead form", () => {
    render(<Home />);
    expect(
      screen.getByText("Get an assessment of your immigration case")
    ).toBeTruthy();
  });
});
