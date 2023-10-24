import {createRemoteComponent} from '@remote-ui/core';

export interface LoginWithShopProps {
  open: boolean;
  modalTitle: string;
  modalDescription: string;
  modalLogoSrc: string;
  modalCancelText: string;
  onComplete?(): void | Promise<void>;
  onClosed?(): void;
  onStatusChange?(status: 'shop_pay' | 'guest' | 'shop_pay_skipped'): void;
}

export const LoginWithShop = createRemoteComponent<
  'LoginWithShop',
  LoginWithShopProps
>('LoginWithShop');
