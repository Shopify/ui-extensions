"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const app_metafields_1 = require("../app-metafields");
const mount_1 = require("./mount");
describe('useAppMetafields', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    function createMetafield(props = {}) {
        return Object.assign({ key: `key-${faker_1.default.random.uuid()}`, namespace: 'example-namespace', value: 'example-value', valueType: 'string' }, props);
    }
    const productEntry = {
        target: { id: faker_1.default.random.uuid(), type: 'product' },
        metafield: createMetafield(),
    };
    const variantEntry = {
        target: { id: faker_1.default.random.uuid(), type: 'variant' },
        metafield: createMetafield(),
    };
    it('returns all app metafield entries', () => {
        const appMetaFieldEntries = [productEntry, variantEntry];
        const extensionApi = {
            appMetafields: mount_1.createMockStatefulRemoteSubscribable(appMetaFieldEntries),
        };
        const { value } = mount_1.mount.hook(() => app_metafields_1.useAppMetafields(), { extensionApi });
        expect(value).toMatchObject(appMetaFieldEntries);
    });
    it('returns filtered app metafield entries based on type', () => {
        const appMetaFieldEntries = [productEntry, variantEntry];
        const extensionApi = {
            appMetafields: mount_1.createMockStatefulRemoteSubscribable(appMetaFieldEntries),
        };
        const { value } = mount_1.mount.hook(() => app_metafields_1.useAppMetafields({ type: 'product' }), {
            extensionApi,
        });
        expect(value).toMatchObject([productEntry]);
    });
    it('returns filtered app metafield entry based on id', () => {
        const testId = faker_1.default.random.uuid();
        const newEntry = {
            target: { id: testId, type: 'product' },
            metafield: createMetafield(),
        };
        const appMetaFieldEntries = [newEntry, variantEntry];
        const extensionApi = {
            appMetafields: mount_1.createMockStatefulRemoteSubscribable(appMetaFieldEntries),
        };
        const { value } = mount_1.mount.hook(() => app_metafields_1.useAppMetafields({ id: testId }), {
            extensionApi,
        });
        expect(value).toMatchObject([newEntry]);
    });
    it('returns filtered app metafield entries based on namespace', () => {
        const testNamespace = 'test_namespace';
        const newEntry = {
            target: { id: faker_1.default.random.uuid(), type: 'product' },
            metafield: createMetafield({ namespace: testNamespace }),
        };
        const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
        const extensionApi = {
            appMetafields: mount_1.createMockStatefulRemoteSubscribable(appMetaFieldEntries),
        };
        const { value } = mount_1.mount.hook(() => app_metafields_1.useAppMetafields({ namespace: testNamespace }), { extensionApi });
        expect(value).toMatchObject([newEntry]);
    });
    it('returns filtered app metafield entries based on namespace & key', () => {
        const testNamespace = 'test_namespace';
        const testKey = 'test_key';
        const newEntry = {
            target: { id: faker_1.default.random.uuid(), type: 'product' },
            metafield: createMetafield({ namespace: testNamespace, key: testKey }),
        };
        const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
        const extensionApi = {
            appMetafields: mount_1.createMockStatefulRemoteSubscribable(appMetaFieldEntries),
        };
        const { value } = mount_1.mount.hook(() => app_metafields_1.useAppMetafields({ namespace: testNamespace, key: testKey }), { extensionApi });
        expect(value).toMatchObject([newEntry]);
    });
    it('throws an error if no namespace is provided with key', () => {
        jest.spyOn(console, 'error').mockImplementation();
        const appMetaFieldEntries = [productEntry, variantEntry];
        const extensionApi = {
            appMetafields: mount_1.createMockStatefulRemoteSubscribable(appMetaFieldEntries),
        };
        expect(() => mount_1.mount.hook(() => app_metafields_1.useAppMetafields({ key: 'test_key' }), {
            extensionApi,
        })).toThrow('You must pass in a namespace with a key');
    });
    it('returns filtered app metafield entries based on all searchable fields', () => {
        const testNamespace = 'test_namespace';
        const testKey = 'test_key';
        const testId = faker_1.default.random.uuid();
        const newEntry = {
            target: { id: testId, type: 'product' },
            metafield: createMetafield({ namespace: testNamespace, key: testKey }),
        };
        const appMetaFieldEntries = [newEntry, productEntry, variantEntry];
        const extensionApi = {
            appMetafields: mount_1.createMockStatefulRemoteSubscribable(appMetaFieldEntries),
        };
        const { value } = mount_1.mount.hook(() => app_metafields_1.useAppMetafields({
            namespace: testNamespace,
            key: testKey,
            id: testId,
            type: 'product',
        }), { extensionApi });
        expect(value).toMatchObject([newEntry]);
    });
});
