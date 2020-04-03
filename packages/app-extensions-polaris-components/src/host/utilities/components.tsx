import React, {useMemo} from 'react';

import {Action} from '../../client/core/types';

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

// This is a hook wrapping all Proxy callbacks to prevent maximum stack size issue.
// Ref https://github.com/Shopify/app-extension-libs/issues/254
function wrapAction(action: Action): Action {
  return {
    ...action,
    onAction: () => action.onAction?.(),
  };
}

export function useWrapAction(action: Action | undefined): Action | undefined {
  return useMemo(() => {
    return action && wrapAction(action);
  }, [action]);
}

export function useWrapActions(actions: Action[] | undefined): Action[] | undefined {
  return useMemo(() => {
    return actions?.map(wrapAction);
  }, [actions]);
}
