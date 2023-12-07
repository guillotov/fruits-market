import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  height: 32px;
  width: 200px;
`;

const ClearButton = styled.button`
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <Input
      id="search"
      type="text"
      placeholder="Search fruits..."
      value={filterText}
      onChange={onFilter}
      className="px-3.5 py-2 border border-[#bdbdbd] rounded focus:border-[#17C815] focus:outline-none focus:ring-1 focus:ring-[#17C815]"
    />
    <ClearButton
      onClick={onClear}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded ml-1"
    >
      X
    </ClearButton>
  </>
);

export default FilterComponent;
