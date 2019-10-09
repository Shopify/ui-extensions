import React, { useRef } from "react";
import { ComponentNode } from "../component-tree";

interface ComponentDropZoneProps {
  component: ComponentNode;
  children: any;
  onComponentAdded: (parent: ComponentNode, componentName: string) => void;
  onComponentMoved: (oldIndex: number, newIndex: number) => void;
}

export default function ComponentDropZone({
    component,
    children,
    onComponentAdded,
    onComponentMoved,
  }: ComponentDropZoneProps) {
  const container = useRef();

  function onDrop(e: React.DragEvent<HTMLElement>) {
    const action = e.dataTransfer.getData("action");
    const components = component.children;

    if (!isDragAction(action)) { throw new Error("Unknown drag action"); }

    switch (action) {
      case "reorder":
        const compId = e.dataTransfer.getData("componentId");
        const oldIndex = components.findIndex((c) => c.id === compId);

        let componentIdOfComponentAtNewPosition: string;
        components.forEach((c) => {
          const element = document.querySelector(`div[drag-id="${c.id}"]`);
          if (!element) {
            return;
          }
          const bounds = element.getBoundingClientRect();
          if (bounds && bounds.top < e.pageY) {
            componentIdOfComponentAtNewPosition = c.id;
          }
        });

        const newIndex = components.findIndex((c) => c.id === componentIdOfComponentAtNewPosition);

        onComponentMoved(oldIndex, newIndex);
        break;
      case "add":
        onComponentAdded(component, e.dataTransfer.getData("component"));
        e.stopPropagation();
        break;
    }
  }

  return <div ref={container.current}
    onDrop={onDrop}
    onDragOver={(event) => {
      event.stopPropagation();
      event.preventDefault();
    }}
  >
    {children}
  </div>;
}

type DragAction = "add" | "reorder";
function isDragAction(action: string): action is DragAction {
  return ["add", "reorder"].includes(action);
}
