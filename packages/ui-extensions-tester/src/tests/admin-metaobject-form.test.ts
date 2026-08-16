import type {
  BlockExtensionApi,
  Intents,
  MetaobjectFormApi,
  MetaobjectFormSaveHandler,
  MetaobjectFormSetFieldValueErrorCode,
  MetaobjectFormSetFieldValueInput,
  MetaobjectFormSetFieldValueResult,
  MetaobjectFormSnapshot,
  MetaobjectFormSnapshotField,
  StandardApi,
} from '@shopify/ui-extensions/admin';
import type {
  MetaobjectFieldJSXProps,
  MetaobjectFieldProps,
} from '@shopify/ui-extensions/admin/components/MetaobjectField';
import type MetaobjectFormComponents from '@shopify/ui-extensions/admin/components/MetaobjectFormComponents';
import type {MetaobjectFormComponents as NamedMetaobjectFormComponents} from '@shopify/ui-extensions/admin/components/MetaobjectFormComponents';
// eslint-disable-next-line import/extensions
import type {Api as TargetApi} from '@shopify/ui-extensions/admin.metaobject-details.form.render';
import {createMockAdminTargetApi} from '../admin/factories';
import {assertType, type Equals} from './type-assertions';

type Target = 'admin.metaobject-details.form.render';
type Api = MetaobjectFormApi<Target>;

interface ExpectedReadonlySnapshot {
  readonly value: MetaobjectFormSnapshot;
  subscribe(fn: (value: MetaobjectFormSnapshot) => void): () => void;
}

assertType<Equals<TargetApi, Api>>();
assertType<
  Equals<
    MetaobjectFormComponents,
    | 'Grid'
    | 'GridItem'
    | 'Heading'
    | 'Section'
    | 'Text'
    | 'TextField'
    | 'MetaobjectField'
  >
>();
assertType<Equals<NamedMetaobjectFormComponents, MetaobjectFormComponents>>();
assertType<Equals<keyof MetaobjectFieldProps, 'fieldKey'>>();
assertType<
  Equals<keyof MetaobjectFieldJSXProps, 'fieldKey' | 'key' | 'ref' | 'slot'>
>();
assertType<Equals<MetaobjectFieldJSXProps['fieldKey'], string>>();
assertType<
  Equals<
    keyof Api,
    | 'extension'
    | 'intents'
    | 'navigation'
    | 'snapshot'
    | 'setFieldValue'
    | 'setSaveHandler'
  >
>();
assertType<Equals<Api['extension'], StandardApi<Target>['extension']>>();
assertType<Equals<Api['intents'], Intents>>();
assertType<
  Equals<Api['navigation'], BlockExtensionApi<Target>['navigation']>
>();
assertType<Equals<Api['snapshot'], ExpectedReadonlySnapshot>>();
assertType<
  Equals<
    keyof MetaobjectFormSnapshotField,
    'key' | 'type' | 'value' | 'editable' | 'errors'
  >
>();
assertType<
  Equals<MetaobjectFormSnapshot['fields'], MetaobjectFormSnapshotField[]>
>();
assertType<
  Equals<
    MetaobjectFormSetFieldValueResult,
    | {status: 'SUCCESS'}
    | {status: 'ERROR'; code: MetaobjectFormSetFieldValueErrorCode}
  >
>();
assertType<
  Equals<
    Api['setFieldValue'],
    (
      input: MetaobjectFormSetFieldValueInput,
    ) => Promise<MetaobjectFormSetFieldValueResult>
  >
>();
assertType<
  Equals<
    Api['setSaveHandler'],
    (handler: MetaobjectFormSaveHandler | null) => void
  >
>();
assertType<
  Equals<
    MetaobjectFormSetFieldValueErrorCode,
    | 'UNKNOWN_FIELD'
    | 'READ_ONLY'
    | 'COMPUTED'
    | 'UNSUPPORTED_FIELD_TYPE'
    | 'INVALID_VALUE'
    | 'VALUE_TOO_LARGE'
    | 'NOT_ACTIVE'
  >
>();

describe('metaobject form admin factory', () => {
  it('creates the narrow runtime API with form defaults', async () => {
    const api = createMockAdminTargetApi(
      'admin.metaobject-details.form.render',
    );

    expect(Object.keys(api).sort()).toStrictEqual([
      'extension',
      'intents',
      'navigation',
      'setFieldValue',
      'setSaveHandler',
      'snapshot',
    ]);
    expect(api.extension.target).toBe('admin.metaobject-details.form.render');
    expect(api).not.toHaveProperty('data');
    expect(api.intents).toStrictEqual({launchUrl: undefined});
    expect(Object.keys(api.intents)).toStrictEqual(['launchUrl']);
    expect(api.intents).not.toHaveProperty('invoke');
    expect(api.snapshot.value).toStrictEqual({fields: []});
    expect(Object.keys(api.snapshot).sort()).toStrictEqual([
      'subscribe',
      'value',
    ]);
    expect(api.snapshot).not.toHaveProperty('peek');
    expect(typeof api.snapshot.subscribe).toBe('function');
    expect(
      await api.setFieldValue({key: 'title', value: 'Updated title'}),
    ).toStrictEqual({status: 'SUCCESS'});
    expect(() => api.setSaveHandler(async () => {})).not.toThrow();
    expect(() => api.setSaveHandler(null)).not.toThrow();
  });
});
