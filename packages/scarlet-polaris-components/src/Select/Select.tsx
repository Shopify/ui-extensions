import React, {useState} from "react";
import { Select as PolarisSelect, SelectProps } from "@shopify/polaris";

export default function Select({onChange, value, ...props}: SelectProps) {
  const [selected, setSelected] = useState(value);

  return <PolarisSelect
    {...props}
    value={selected}
    onChange={(value, id) => {
      setSelected(value)
      // @ts-ignore
      onChange(value, id)
    }}
  />;
}
