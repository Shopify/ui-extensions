import * as React from 'react';
import {
  DefaultSource,
  StyleSource,
  ScriptSource,
  ImageSource,
  SpecialSource,
  WorkerSource,
  ChildSource,
} from '@shopify/react-network';

export default function ContentSecurityPolicy() {
  const developmentAssetSources =
    process.env.NODE_ENV === 'production' ? [] : ['localhost:8080', 'http://localhost:8080'];

  return (
    <>
      <DefaultSource sources={[SpecialSource.Self, 'https://*', ...developmentAssetSources]} />
      <ChildSource
        sources={[
          SpecialSource.Self,
          // Safari needed this to be OK with constructing worker from blob, at least
          // when inside the anonymous iframe
          SpecialSource.Blob,
          'https://*',
          ...developmentAssetSources,
        ]}
      />
      <ScriptSource
        sources={[
          SpecialSource.Self,
          // Need eval in dev for React Hot Loader
          SpecialSource.UnsafeEval,
          SpecialSource.UnsafeInline,
          'https://*',
          ...developmentAssetSources,
        ]}
      />
      <WorkerSource
        sources={[
          SpecialSource.Self,
          // Need eval in dev for React Hot Loader
          SpecialSource.UnsafeEval,
          SpecialSource.Blob,
          'https://*',
          ...developmentAssetSources,
        ]}
      />
      <ImageSource
        sources={[SpecialSource.Self, SpecialSource.Data, 'https://*', ...developmentAssetSources]}
      />
      <StyleSource
        sources={[SpecialSource.UnsafeInline, SpecialSource.Blob, ...developmentAssetSources]}
      />
    </>
  );
}
