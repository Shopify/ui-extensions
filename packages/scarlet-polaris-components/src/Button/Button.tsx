import { Button as PolarisButton } from "@shopify/polaris";
import React from "react";

export default function Button({onClick, label, plain = false, ...args}: any) {
  // @ts-ignore
  return <PolarisButton onClick={onClick} plain={plain} {...args}>{label}</PolarisButton>;
}
