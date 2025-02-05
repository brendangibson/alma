export default function LeadsTable({ leads }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Submitted</th>
          <th>Status</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {leads?.map((lead) => (
          <tr>
            <td>{lead.name}</td>
            <td>{lead.submitted}</td>
            <td>{lead.status}</td>
            <td>{lead.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
