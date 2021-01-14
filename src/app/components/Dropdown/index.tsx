import React from "react";
import { Select } from "../../../styles/Dropdown";

interface Props {
  name?: string;
  data?: any;
  emptySelect?: boolean;
}

const Option = (props: Props) => {
  return props.data.map((key, i) => (
    <option key={i} value={key.key}>
      {key.value}
    </option>
  ));
};

export default function Dropdown(props) {
  let emptySelect = props.emptySelect ? "<option val=''>Select</option>" : null;
  return (
    <Select name={props.name}>
      {emptySelect}
      <Option data={props.data} />
    </Select>
  );
}
