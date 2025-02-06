// API endpoint to get the leads

import { NextResponse } from "next/server";
import { subDays } from "date-fns";

export type Lead = {
  id: string;
  name: string;
  submitted: Date;
  status: "Pending" | "Reached Out";
  country: string;
};

export type Leads = Lead[];

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json([
    {
      id: "dfsafsdfs",
      name: "Jorge Ruiz",
      submitted: new Date(),
      status: "Pending",
      country: "Mexico",
    },
    {
      id: "cfdwef29u32fn",
      name: "Bajar Zamir",
      submitted: subDays(new Date(), 45),
      status: "Pending",
      country: "Pakistan",
    },
  ]);
}
