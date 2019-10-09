import { FormLayout } from "@shopify/polaris";
import React from "react";
import { ComponentNode } from "../component-tree";
import { EditorActions } from "../reducer";
import PropListBuilder from "./prop-list-builder";

export type Callback<T> = (payload: T) => void;

interface PropListProps {
  componentNode?: ComponentNode;
  dispatch: Callback<EditorActions>;
}

export default function PropList({componentNode, dispatch}: PropListProps) {
  if (!componentNode) { return <p>No component selected.</p>; }

  return <FormLayout>
    {PropListBuilder.build(componentNode, dispatch)}
  </FormLayout>;
}
