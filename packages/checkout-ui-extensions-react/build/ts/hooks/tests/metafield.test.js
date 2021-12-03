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
    it('returns undefined metafield', () => {
        const metafieldCount = 10;
        const extensionApi = {
            metafields: mount_1.createMockStatefulRemoteSubscribable(createMetafields(metafieldCount)),
        };
        const namespace = 'test_namespace';
        const key = 'test_key';
        const { value } = mount_1.mount.hook(() => __1.useMetafield({ namespace, key }), {
            extensionApi,
        });
        expect(value).toBeUndefined();
    });
    it('returns a filtered metafield', () => {
        const namespace = 'test_namespace';
        const key = 'test_key';
        const newNamespace = createMetafield({ namespace, key });
        const metafields = [newNamespace, ...createMetafields()];
        const { value } = mount_1.mount.hook(() => __1.useMetafield({ namespace, key }), {
            extensionApi: {
                metafields: mount_1.createMockStatefulRemoteSubscribable(metafields),
            },
        });
        expect(value === null || value === void 0 ? void 0 : value.namespace).toStrictEqual(namespace);
        expect(value === null || value === void 0 ? void 0 : value.key).toStrictEqual(key);
    });
    it('throws an error if no namespace is provided with key', () => {
        jest.spyOn(console, 'error').mockImplementation();
        const extensionApi = {
            metafields: mount_1.createMockStatefulRemoteSubscribable(createMetafields()),
        };
        expect(() => mount_1.mount.hook(() => __1.useMetafield({
            // @ts-expect-error
            namespace: undefined,
            key: 'test_key',
        }), {
            extensionApi,
        })).toThrow('You must pass in both a namespace and key');
    });
    it('throws an error if no key is provided with namespace', () => {
        jest.spyOn(console, 'error').mockImplementation();
        const extensionApi = {
            metafields: mount_1.createMockStatefulRemoteSubscribable(createMetafields()),
        };
        const key = undefined;
        expect(() => mount_1.mount.hook(() => __1.useMetafield({ namespace: 'test_namespace', key }), {
            extensionApi,
        })).toThrow('You must pass in both a namespace and key');
    });
});
