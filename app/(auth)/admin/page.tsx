import AdminPage from "@/components/ui/admin/adminpage";

export default async function () {
  let data = await fetch(process.env.URL + "/api/leads");
  let leads = await data.json();
  return <AdminPage leads={leads} />;
}
