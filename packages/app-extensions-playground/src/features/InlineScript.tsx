import React, {useEffect, useState} from 'react';
import {Page} from '@shopify/polaris';
import {usePerformanceMark} from '@shopify/react-performance';
import {ExtensionPoint} from '@shopify/app-extensions-renderer';
import {host} from '@shopify/app-extensions-polaris-components';
import {AppExtension} from '../components';

export function InlineScript() {
  const [inlineScript, setInlineScript] = useState<string | undefined>();

  useEffect(() => {
    async function getDefaultScript() {
      const results = await fetch('../../../inline-script.txt').then(response => {
        return response.text();
      });
      setInlineScript(results);
    }
    getDefaultScript();
  }, []);

  usePerformanceMark('complete', 'Inline Script');

  return (
    <Page title="Inline Script">
      {inlineScript && (
        <AppExtension
          script={inlineScript}
          extensionPoint={ExtensionPoint.AppLink}
          components={{...host}}
        />
      )}
    </Page>
  );
}
