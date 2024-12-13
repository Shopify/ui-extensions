import {BlockExtensionApi} from '../block/block';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import {ActionExtensionApi} from '../action/action';

import {ApplyMetafieldsChange} from './metafields';

export interface MetaobjectDetailsBlockApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends BlockExtensionApi<ExtensionTarget> {
  applyMetafieldsChange: ApplyMetafieldsChange;
  data: {
    selected: {
      id: string;
      definitionType: string;
    }[];
  };
}

export interface MetaobjectDetailsActionApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends ActionExtensionApi<ExtensionTarget> {
  applyMetafieldsChange: ApplyMetafieldsChange;
  data: {
    selected: {
      id: string;
      definitionType: string;
    }[];
  };
}
