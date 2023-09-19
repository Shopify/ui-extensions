export interface VisitorParams {
  phone?: string;
  email?: string;
}

export interface VisitorOptions {
  apiClientId?: string;
}
export interface VisitorApi {
  visitor(params: VisitorParams, options?: VisitorOptions): boolean;
}
