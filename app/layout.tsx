import StyledComponentsRegistry from "./registry";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: "700", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

import "./globals.css";
