import {useMemo} from 'preact/hooks';

import type {PickupLocationOption} from '../api/standard/standard';
import type {RenderMode} from '../api/shared';

import {ExtensionHasNoTargetError} from './errors';
import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the pickup location option the extension is attached to. This hook can only be used by extensions in the following
 * extension target:
 * - `purchase.checkout.pickup-location-option-item.render-after`
 */
export function usePickupLocationOptionTarget(): {
  pickupLocationOptionTarget: PickupLocationOption;
  isTargetSelected: boolean;
  renderMode: RenderMode;
} {
  const api =
    useApi<'purchase.checkout.pickup-location-option-item.render-after'>();
  if (!api.target || api.isTargetSelected === undefined) {
    throw new ExtensionHasNoTargetError(
      'usePickupLocationOptionTarget',
      api.extension.target,
    );
  }

  const pickupLocationOptionTarget = useSubscription(api.target);
  const isTargetSelected = useSubscription(api.isTargetSelected);
  const renderMode = api.renderMode;

  const pickupLocationOption = useMemo(() => {
    return {
      pickupLocationOptionTarget,
      isTargetSelected,
      renderMode,
    };
  }, [pickupLocationOptionTarget, isTargetSelected, renderMode]);

  return pickupLocationOption;
}
