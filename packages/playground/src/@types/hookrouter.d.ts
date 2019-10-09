declare module "hookrouter" {
  interface Routes {
    [name: string]: any;
  }

  export function useRedirect(from: string, to: string): void;
  export function useRoutes(routes: Routes): any;
  export function useQueryParams(): [any, (params: any) => void];
  export function useTitle(title: string): void;

  interface AProps {
    href: string;
    children: any;
  }

  export function A(props: AProps): any;

  export function navigate(path: string): void;
}
