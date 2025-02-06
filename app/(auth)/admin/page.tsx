import AdminPage from "@/components/ui/admin/adminpage";

export default async function () {
  let leads = [];
  try {
    let data = await fetch("https://" + process.env.VERCEL_URL + "/api/leads");
    leads = await data.json();
  } catch (e) {
    console.error("Error fetching leads: , e");
  }
  return <AdminPage leads={leads} />;
}
