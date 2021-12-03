"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const __1 = require("..");
const mount_1 = require("./mount");
describe('useMetafields', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    function createMetafield(props = {}) {
        return Object.assign({ key: `key-${faker_1.default.random.uuid()}`, namespace: `namespace-${faker_1.default.random.word}`, value: `value-${faker_1.default.random.word}`, valueType: 'string' }, props);
    }
    function createMetafields(count = 5) {
        return [...Array(count)].map(() => createMetafield());
    }
    it('returns all metafields', () => {
        const metafieldCount = 10;
        const { value } = mount_1.mount.hook(() => __1.useMetafields(), {
            extensionApi: {
                metafields: mount_1.createMockStatefulRemoteSubscribable(createMetafields(metafieldCount)),
            },
        });
        expect(value).toHaveLength(metafieldCount);
    });
    it('returns an array of filtered metafields by namespace', () => {
        const namespace = 'test_namespace';
        const key = 'test_key';
        const newNamespace = createMetafield({ namespace, key });
        const key2 = 'test_key2';
        const newNamespace2 = createMetafield({ namespace, key: key2 });
        const metafields = [newNamespace, newNamespace2, ...createMetafields()];
        const { value } = mount_1.mount.hook(() => __1.useMetafields({ namespace }), {
            extensionApi: {
                metafields: mount_1.createMockStatefulRemoteSubscribable(metafields),
            },
        });
        expect(value).toHaveLength(2);
        expect(value[0].namespace).toStrictEqual(namespace);
        expect(value[1].namespace).toStrictEqual(namespace);
        expect(value[0].key).toStrictEqual(key);
        expect(value[1].key).toStrictEqual(key2);
    });
    it('returns an array of filtered metafields by namespace and key', () => {
        const namespace = 'test_namespace';
        const key = 'test_key';
        const newNamespace = createMetafield({ namespace, key });
        const metafields = [newNamespace, ...createMetafields()];
        const { value } = mount_1.mount.hook(() => __1.useMetafields({ namespace, key }), {
            extensionApi: {
                metafields: mount_1.createMockStatefulRemoteSubscribable(metafields),
            },
        });
        expect(value).toHaveLength(1);
        expect(value[0].namespace).toStrictEqual(namespace);
        expect(value[0].key).toStrictEqual(key);
    });
    it('returns an empty array if no matches are found', () => {
        const namespace = 'test_namespace';
        const key = 'test_key';
        const metafields = createMetafields();
        const extensionApi = {
            metafields: mount_1.createMockStatefulRemoteSubscribable(metafields),
        };
        const namespaceSearch = mount_1.mount.hook(() => __1.useMetafields({ namespace }), {
            extensionApi,
        });
        const keySearch = mount_1.mount.hook(() => __1.useMetafields({ namespace, key }), {
            extensionApi,
        });
        expect(namespaceSearch.value).toHaveLength(0);
        expect(keySearch.value).toHaveLength(0);
    });
    it('throws an error if no namespace is provided with key', () => {
        jest.spyOn(console, 'error').mockImplementation();
        const extensionApi = {
            metafields: mount_1.createMockStatefulRemoteSubscribable(createMetafields()),
        };
        const namespace = undefined;
        expect(() => mount_1.mount.hook(() => __1.useMetafields({ namespace, key: 'test_key' }), {
            extensionApi,
        })).toThrow('You must pass in a namespace with a key');
    });
});
