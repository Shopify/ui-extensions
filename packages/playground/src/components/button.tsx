import { Button as PolarisButton } from "@shopify/polaris";
import React from "react";

export default function Button({onClick, label, plain = false}: any) {
  return <PolarisButton onClick={onClick} plain={plain}>{label}</PolarisButton>;
}
