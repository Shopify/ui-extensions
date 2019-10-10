import React, { useState } from "react";

interface ComponentWrapperProps {
  selected?: boolean;
  id: string;
  children: any;
  onClick: () => void;
}

export default function ComponentWrapper({ selected = false, children, onClick, id }: ComponentWrapperProps) {
  const [dragging, setDragging] = useState(false);
  const classNames = [
    "Stage",
    selected ? "selected" : null,
    dragging ? "dragging" : null,
  ].join(" ");

  const onDragStart = (e: any) => {
    e.dataTransfer.setData("action", "reorder");
    e.dataTransfer.setData("componentId", id);
    setTimeout(() => setDragging(true), 10);
  };

  return <div
    className={classNames}
    onDragStart={onDragStart}
    onDragEnd={() => setDragging(false)}
    drag-id={id}
    draggable
  >
    <div onClick={(evt) => {
      evt.stopPropagation();
      onClick();
    }}>{children}</div>
  </div>;
}
