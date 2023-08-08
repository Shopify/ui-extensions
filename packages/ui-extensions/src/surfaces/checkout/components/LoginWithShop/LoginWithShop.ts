import {createRemoteComponent} from '@remote-ui/core';

export interface LoginWithShopProps {
  checked: boolean;
  onComplete?(): void | Promise<void>;
  onClosed?(): void;
}

export const LoginWithShop = createRemoteComponent<
  'LoginWithShop',
  LoginWithShopProps
>('LoginWithShop');
