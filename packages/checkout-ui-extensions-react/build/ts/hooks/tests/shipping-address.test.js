"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shipping_address_1 = require("../shipping-address");
const mount_1 = require("./mount");
describe('useShippingAddress', () => {
    it('returns latest shipping address', async () => {
        const address = { countryCode: 'CA' };
        const extensionApi = {
            shippingAddress: mount_1.createMockStatefulRemoteSubscribable(address),
        };
        const { value } = mount_1.mount.hook(() => shipping_address_1.useShippingAddress(), { extensionApi });
        expect(value).toMatchObject(address);
    });
});
