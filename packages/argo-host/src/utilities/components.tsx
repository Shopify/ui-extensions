import React, {useMemo} from 'react';

import {Action} from '@shopify/argo/types';

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
