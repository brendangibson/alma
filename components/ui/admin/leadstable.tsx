import styled from "styled-components";

export default function LeadsTable({ leads }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name↓</th>
          <th>Submitted↓</th>
          <th>Status↓</th>
          <th>Country↓</th>
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
    </Table>
  );
}

const Table = styled.table`
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey);
`;
