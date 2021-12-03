"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
const mount_1 = require("./mount");
describe('useExtensionApi', () => {
    it('returns api', async () => {
        const extensionApi = {
            extensionPoint: 'Checkout::Feature::Render',
        };
        const { value } = mount_1.mount.hook(() => api_1.useExtensionApi(), { extensionApi });
        expect(value).toMatchObject(extensionApi);
    });
    it('throws when not run inside a UI extension', async () => {
        const runner = async () => {
            return mount_1.mount.hook(() => api_1.useExtensionApi());
        };
        await expect(runner).rejects.toThrow('You can only call this hook when running as a UI extension.');
    });
});
