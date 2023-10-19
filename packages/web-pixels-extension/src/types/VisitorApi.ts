export interface VisitorParams {
  phone?: string;
  email?: string;
}

export interface VisitorOptions {
  appId?: string;
}
export interface VisitorApi {
  visitor(params: VisitorParams, options?: VisitorOptions): boolean;
}
