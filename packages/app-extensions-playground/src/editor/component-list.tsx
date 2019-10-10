import React, {useState} from "react";
import { Card, Subheading, TextContainer, Popover, Icon, Stack} from "@shopify/polaris";
import {CircleInformationMajorMonotone} from '@shopify/polaris-icons'
import ComponentDefinition from "./component-definition";

interface ComponentListProps {
  componentDefinitions: ComponentDefinition[];
  setIsDragging: (dragging: boolean) => void;
}

export default function ComponentList({componentDefinitions, setIsDragging}: ComponentListProps) {
  const componentListItems = componentDefinitions.map(
    (definition) => (
      <ComponentListItem componentDefinition={definition} key={definition.name} setIsDragging={setIsDragging} />
    ),
  );

  return <>
    {componentListItems}
  </>;
}

interface ComponentListItemProps {
  componentDefinition: ComponentDefinition;
  setIsDragging: (dragging: boolean) => void;
}

interface DragEvent {
  dataTransfer: {
    setData: (key: string, value: any) => void,
  };
}

function ComponentListItem({componentDefinition, setIsDragging}: ComponentListItemProps) {
  const onDragStartHandler = (e: DragEvent) => {
    setIsDragging(true);
    e.dataTransfer.setData("action", "add");
    e.dataTransfer.setData("component", componentDefinition.componentName);
    const exampleElement = document.getElementById(`${componentDefinition.componentName}-ID`);
    // @ts-ignore
    e.dataTransfer.setDragImage(exampleElement.firstChild, 0, 0);
  };

  const [popoverActive, setPopoverActive] = useState(false);


  const onDragEndHandler = (_: DragEvent) => setIsDragging(false);

  const infoIcon = (
    <div onClick={() => setPopoverActive(!popoverActive)} style={{height: '12px'}}>
      <Icon source={CircleInformationMajorMonotone} color="inkLighter" />
    </div>
  );

  return (
    <Card.Section>
      <div style={{cursor: "pointer"}} draggable onDragEnd={onDragEndHandler} onDragStart={onDragStartHandler}>
        <Stack>
          <Subheading>{componentDefinition.name}</Subheading>
          <Popover active={popoverActive} activator={infoIcon} onClose={() => {setPopoverActive(false)}}>
            <div style={{padding: "5px 10px"}}>
              <TextContainer>{componentDefinition.description}</TextContainer>
            </div>
          </Popover>
        </Stack>
        <div style={{marginTop: '20px'}}>
          {componentDefinition.example}
        </div>
      </div>
    </Card.Section>
  );
}
