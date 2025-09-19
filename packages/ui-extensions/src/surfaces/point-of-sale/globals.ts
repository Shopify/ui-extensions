import {Navigation} from './api/navigation-api/navigation-api';

declare global {
  // @ts-expect-error - Intentionally overriding navigation type for POS context
  const navigation: Navigation;
}
