import {createRemoteComponent} from '@remote-ui/core';

export interface InternalMetaobjectFieldProps {
  /**
   * The id of the metaobject.
   */
  id: string;

  /**
   * The definition type of the metaobject.
   */
  definitionType: string;

  /**
   * The key of the metaobject field.
   */
  fieldKey: string;
}

export const InternalMetaobjectField = createRemoteComponent<
  'InternalMetaobjectField',
  InternalMetaobjectFieldProps
>('InternalMetaobjectField');
