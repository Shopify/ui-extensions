import type {StandardApi} from '../standard/standard';

export interface ApplySettingsChangeResult {
  type: 'success' | 'error';
}

export interface ApplySettingsChangeInput {
  key: string;
  value: string | number | boolean | null;
}

export interface Settings {
  value: Record<string, unknown>;
  subscribe(
    callback: (settings: Settings) => void,
    options?: {signal?: AbortSignal},
  ): Promise<Settings>;
}

export interface CheckoutEditorRenderSettingsApi
  extends StandardApi<'Admin::CheckoutEditor::RenderSettings'> {
  settings: Settings;
  applySettingsChange(
    input: ApplySettingsChangeInput,
  ): Promise<ApplySettingsChangeResult>;
}
