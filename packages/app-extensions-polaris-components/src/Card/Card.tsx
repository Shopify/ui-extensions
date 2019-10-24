import { Card as PolarisCard, CardProps, FormLayout } from "@shopify/polaris";
import React from "react";

type ScarletCardProps = {
  label: string;
}

type CombindeProps = ScarletCardProps & CardProps;

export default function Card({label, children}: CombindeProps) {
  return <PolarisCard title={label}>
    <PolarisCard.Section>
      <FormLayout>
        {children}
      </FormLayout>
    </PolarisCard.Section>
  </PolarisCard>;
}
