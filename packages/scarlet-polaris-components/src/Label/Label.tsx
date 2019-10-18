import React from "react";

interface LabelProps {
  caption: string;
}

export default function Label({caption}: LabelProps) {
  return <span style={{display: "inline-block"}}>{caption}</span>;
}
