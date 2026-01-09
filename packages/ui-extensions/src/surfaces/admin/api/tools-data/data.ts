export interface SearchResult {
  id: string;
  type: string;
  url: string;
  title: string;
}

export interface ToolsDataOutput {
  results: SearchResult[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
}
