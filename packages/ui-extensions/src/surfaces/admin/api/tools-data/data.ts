export interface ToolResult {
  id: string;
  type: string;
  url: string;
  title: string;
}

export interface ToolsDataOutput {
  results: ToolResult[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
}
