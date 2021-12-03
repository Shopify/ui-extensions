import { RemoteRoot } from '@remote-ui/core';
import { AllComponentsSchema } from '../../containers';
import { RenderableExtensionCallback, StandardApi, ToastApi, ContextualSaveBarApi } from '../types';
export declare type DiscountsExtensionPoint = 'Admin::Discounts::Create' | 'Admin::Discounts::Edit';
export interface DiscountsExtensionContainerApi {
    container: {
        setTitle(title: string): void;
        save: () => void;
        discard: () => void;
    };
}
export declare type DiscountsStandardApi<T extends DiscountsExtensionPoint> = StandardApi<T> & ToastApi & ContextualSaveBarApi;
export declare type DiscountsCreateApi = DiscountsStandardApi<'Admin::Discounts::Create'> & {
    container: DiscountsExtensionContainerApi;
};
export declare type DiscountsEditApi = DiscountsStandardApi<'Admin::Discounts::Edit'> & {
    container: DiscountsExtensionContainerApi;
    data: {
        discountId: string;
    };
};
export interface DiscountsExtensionApi {
    'Admin::Discounts::Create': DiscountsCreateApi;
    'Admin::Discounts::Edit': DiscountsEditApi;
}
export interface DiscountsExtensionPointCallback {
    'Admin::Discounts::Create': RenderableExtensionCallback<DiscountsExtensionApi['Admin::Discounts::Create'], RemoteRoot<AllComponentsSchema>>;
    'Admin::Discounts::Edit': RenderableExtensionCallback<DiscountsExtensionApi['Admin::Discounts::Edit'], RemoteRoot<AllComponentsSchema>>;
}
//# sourceMappingURL=discounts.d.ts.map