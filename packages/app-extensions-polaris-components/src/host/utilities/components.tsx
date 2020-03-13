import React from 'react';

// Checks whether `element` is a React element of type `Component` (or one of
// the passed components, if `Component` is an array of React components).
export function isElementOfType<P>(
  element: React.ReactNode | null | undefined,
  Component: React.ComponentType<P> | React.ComponentType<P>[],
): boolean {
  if (element == null || !React.isValidElement(element) || typeof element.type === 'string') {
    return false;
  }

  const {type} = ((element.props || {}) as any).component || {};
  const Components = Array.isArray(Component) ? Component : [Component];

  return Components.some(AComponent => type === AComponent.name);
}

// Returns props of element specificially for Remote UI component. It might not work with regular React element.
export function getElementProps(element: React.ReactNode | null | undefined) {
  const {props} = (((element || {}) as any).props || {}).component || {};
  return props || {};
}

// Returns all children that are valid elements as an array. Can optionally be
// filtered by passing `predicate`.
export function elementChildren<T extends React.ReactElement<{}>>(
  children: React.ReactNode,
  predicate: (element: T) => boolean = () => true,
): T[] {
  return React.Children.toArray(children).filter(
    child => React.isValidElement(child) && predicate(child as T),
  ) as T[];
}
