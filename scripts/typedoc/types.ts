export interface Packages {
  [key: string]: string;
}

export interface Paths {
  inputRoot: string;
  outputRoot: string;
  packages: Packages;
  shopifyDevUrl: string;
  shopifyDevAssets?: string;
}

export interface Tag {
  name: string;
  content: string;
}
