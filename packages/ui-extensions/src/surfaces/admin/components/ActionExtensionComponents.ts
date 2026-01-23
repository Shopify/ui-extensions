import {StandardComponents} from './StandardComponents';

/**
 * The components available for building action extensions. Includes all standard components plus the `AdminAction` component required for action extension setup.
 */
export type ActionExtensionComponents = StandardComponents | 'AdminAction';

export default ActionExtensionComponents;
