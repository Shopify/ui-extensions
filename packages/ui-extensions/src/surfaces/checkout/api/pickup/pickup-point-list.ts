import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

/** @publicDocs */
export interface PickupPointListApi {
  /**
   * Reflects which view was active when the extension loaded. When the
   * buyer moves to the next view, the extension restarts with the
   * current value rather than updating in place.
   */
  isLocationFormVisible: StatefulRemoteSubscribable<boolean>;
}
