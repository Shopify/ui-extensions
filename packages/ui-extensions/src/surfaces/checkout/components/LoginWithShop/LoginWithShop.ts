import {createRemoteComponent} from '@remote-ui/core';

export interface LoginWithShopProps {
  checked: boolean;
  modalTitle?: string;
  modalDescription?: string;
  modalLogoSrc?: string;
  apiKey?: string;
  onComplete?(): void | Promise<void>;
  onClosed?(): void;
}

export const LoginWithShop = createRemoteComponent<
  'LoginWithShop',
  LoginWithShopProps
>('LoginWithShop');
