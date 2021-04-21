import {ExtensionApi, ExtensionPoint, ToastApi} from '@shopify/argo-admin';
import {Toast as PolarisToast} from '@shopify/polaris';

export interface ExtensionInfo {
  extensionVersionUuid: string;
  script: URL | string;
  app: {
    id: string;
    title: string;
    developerName: string;
    applicationUrl: string;
    installation: {
      launchUrl: string;
    };
    icon: {
      transformedSrc: string;
    };
  };
  appId: string;
}

interface ContainerProps<T extends ExtensionPoint> extends ExtensionInfo {
  api: ExtensionApi[T];
  liveReloadingEnabled?: boolean;
}

interface ArgoModalProps<T extends ExtensionPoint> extends ContainerProps<T> {
  onClose: () => void;
  onDone: () => void;
  open: boolean;
  defaultTitle: string;
  loading?: boolean;
}

interface AppOverlayProps<T extends ExtensionPoint> extends ContainerProps<T> {
  onClose: () => void;
  onDone: () => void;
  open: boolean;
  loading?: boolean;
}

declare global {
  interface Window {
    argoAdminHost: {
      ArgoAppOverlay: React.JSXElementConstructor<
        AppOverlayProps<ExtensionPoint>
      >;
      ArgoModal: React.JSXElementConstructor<ArgoModalProps<ExtensionPoint>>;
      PlaygroundContext: React.JSXElementConstructor<
        React.PropsWithChildren<Record<string, any>>
      >;
      useToastApi: (
        ToastComponent: typeof PolarisToast,
      ) => [React.FunctionComponent<Record<string, any>>, ToastApi];
    };
  }
}

export interface HostProps extends ExtensionInfo {
  extensionPoint: ExtensionPoint;
}
