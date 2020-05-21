import {RemoteRoot, RemoteComponentType} from '@remote-ui/core';

interface RenderResult<Input> {
  update?(input: Partial<Input>): void;
}

export interface RenderExtension<
  Input,
  AllowedComponents extends RemoteComponentType<string, any, any>
> {
  (root: RemoteRoot<AllowedComponents, true>, input: Input): RenderResult<
    Input
  >;
}
