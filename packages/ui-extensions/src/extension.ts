export interface RenderExtension<Api, ComponentsSet extends string> {
  api: Api;
  components: ComponentsSet;
  output: void | Promise<void>;
}

export interface RunnableExtension<Api, Output> {
  api: Api;
  output: Output | Promise<Output>;
}
