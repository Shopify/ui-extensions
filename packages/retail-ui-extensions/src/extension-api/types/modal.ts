export interface Modal {
  /**
   * Path should be used to determine which Screen or Navigator to return for the Modal extension point.
   */
  path: string;
  /**
   * Params can be used when presenting a modal to pass any initial parameters or attach callbacks.
   */
  params?: any;
}
