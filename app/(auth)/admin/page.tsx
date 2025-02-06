import AdminPage from "@/components/ui/admin/adminpage";

export const dynamic = "force-dynamic";

const url =
  (process.env.URL ? process.env.URL : "https://" + process.env.VERCEL_URL) +
  "/api/leads";

export default async function () {
  let leads = [];
  try {
    let data = await fetch(url);
    console.error("data: ", data);
    leads = await data.json();
  } catch (e) {
    console.error(`Error fetching leads from ${url}: ${e}`);
  }

  return <AdminPage leads={leads} />;
}
