import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Lead = {
  name: string;
  submitted: Date;
  status: "Pending" | "Reached Out";
  country: string;
};

type Leads = Lead[];

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json([
    {
      name: "Jorge Ruiz",
      submitted: new Date(),
      status: "Pending",
      country: "mexico",
    },
  ]);
}
