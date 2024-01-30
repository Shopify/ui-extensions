export interface ValidationData {
  validation?: {
    /**
     * the validation's gid when active in a shop
     */
    id: string;
  };
  shopifyFunction: {
    /**
     * the validation's unique identifier
     */
    uuid: string;
  };
}
