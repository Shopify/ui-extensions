import type { BaseButtonProps } from '@shopify/ui-extensions';
import { IconProps } from '../Icon';
declare type RequiredTitleOrIcon = {
    /** Button label text */
    title: string;
    icon?: IconProps;
} | {
    /** Button label text */
    title?: string;
    icon: IconProps;
};
export declare type ButtonProps = RequiredTitleOrIcon & BaseButtonProps;
/**
 * Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.
 */
export declare const Button: import("@remote-ui/core").RemoteComponentType<"Button", ButtonProps, true>;
export {};
//# sourceMappingURL=Button.d.ts.map