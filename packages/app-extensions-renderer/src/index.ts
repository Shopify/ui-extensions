export {
  Renderer,
  RendererWithJSONParser,
  RendererWithLispParser,
  RendererProps,
  RendererWithParserProps,
} from './rendering';

export {buildComponentLibrary, buildStandardLibrary} from './runtime';

export interface DataSource {
  get: (key: string) => any;
  set: (key: string) => (value: any) => void;
}
