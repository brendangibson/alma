import Image from "next/image";
import styled from "styled-components";

export default function LeadsFilters() {
  return (
    <Filters>
      <input type="search" />
      <select>
        <option>Pending</option>
      </select>
    </Filters>
  );
}

const Filters = styled.nav`
  display: flex;
`;
