import type {SegmentationApi, SegmentationApiResult} from './api';

export interface ExtensionPoints {
  'Admin::SegmentationTemplateApps::Render': (
    api: SegmentationApi,
  ) => SegmentationApiResult;
}

export type ExtensionPoint = keyof ExtensionPoints;
