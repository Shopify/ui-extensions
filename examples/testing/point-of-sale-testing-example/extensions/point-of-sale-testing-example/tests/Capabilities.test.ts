import {render} from 'preact';
import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import {waitFor} from '@testing-library/preact';
import {getExtension} from '@shopify/ui-extensions-tester';

function showsSetupInstructions() {
  return (
    document.body.querySelector('s-tile')?.getAttribute('subheading') ===
      'Checkout setup needed' ||
    document.body.textContent?.includes('Allow app to block checkout') === true
  );
}

describe.each(['pos.home.tile.render', 'pos.home.modal.render'] as const)(
  'Merchant capability onboarding in %s',
  (target) => {
    const extension = getExtension(target);

    beforeEach(() => extension.setUp());
    afterEach(() => {
      render(null, document.body);
      extension.tearDown();
    });

    test('does not prompt to enable an unknown setting', async () => {
      await extension.render();
      expect(showsSetupInstructions()).toBe(false);
    });

    test('does not prompt to enable an unsupported API', async () => {
      Reflect.deleteProperty(extension.shopify, 'capabilities');
      await extension.render();
      expect(showsSetupInstructions()).toBe(false);
    });

    test('shows setup for a disabled or never-configured grant', async () => {
      extension.shopify.capabilities.value = [];
      await extension.render();
      expect(showsSetupInstructions()).toBe(true);
    });

    test('does not show setup when the merchant has granted blocking', async () => {
      extension.shopify.capabilities.value = ['block_progress'];
      await extension.render();
      expect(showsSetupInstructions()).toBe(false);
    });

    test('updates after hydration, enable, disable, and re-enable', async () => {
      await extension.render();
      extension.shopify.capabilities.value = [];
      await waitFor(() => expect(showsSetupInstructions()).toBe(true));

      extension.shopify.capabilities.value = ['block_progress'];
      await waitFor(() => expect(showsSetupInstructions()).toBe(false));

      extension.shopify.capabilities.value = [];
      await waitFor(() => expect(showsSetupInstructions()).toBe(true));

      extension.shopify.capabilities.value = ['block_progress'];
      await waitFor(() => expect(showsSetupInstructions()).toBe(false));

      extension.shopify.capabilities.value = undefined;
      await waitFor(() => expect(showsSetupInstructions()).toBe(false));
    });

    test('releases the subscription when the extension unmounts', async () => {
      const unsubscribe = vi.fn();
      const subscribe = vi.fn(() => unsubscribe);
      extension.shopify.capabilities.subscribe = subscribe;
      await extension.render();
      await waitFor(() => expect(subscribe).toHaveBeenCalled());

      render(null, document.body);
      expect(unsubscribe).toHaveBeenCalled();
    });
  },
);
