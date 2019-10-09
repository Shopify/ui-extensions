// import { useState } from "react";

export interface DataSourceEntry {
  id?: string;
  key: string;
  value: any;
}

export interface DataSource {
  value: DataSourceEntry[];
  onChange: (value: DataSourceEntry[]) => void;
}

export default function useDataSource(initialEntries: any[]): DataSource {
  if (!isDataSourceEntries(initialEntries)) { throw new Error("Unsupported entry"); }

  let entries = initialEntries;
  const setEntries = (newEntries) => {
    entries = newEntries;
  };

  // const [entries, setEntries] = useState(initialEntries);

  return {
    value: entries,
    onChange: setEntries,
  };
}

export function isDataSourceEntries(entries: any[]): entries is DataSourceEntry[] {
  return entries.every((e) => isDataSourceEntry(e));
}

export function isDataSourceEntry(entry: any): entry is DataSourceEntry {
  return entry && typeof entry.id === 'string' && typeof entry.key === 'string' && entry.value !== undefined;
}
