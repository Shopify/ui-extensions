import React from 'react';
import {Stack, Icon, DisplayText, Button} from '@shopify/polaris';
import {ChevronLeftMinor} from '@shopify/polaris-icons';

interface Props {
  appName: string;
  appIcon?: string;
  title: string;
  onBackAction?: () => void;
}
export function ArgoHeader({appName, appIcon, title, onBackAction}: Props) {
  return (
    <>
      <Stack alignment="center">
        {onBackAction && (
          <Button
            size="large"
            plain
            onClick={() => onBackAction()}
            icon={<Icon source={ChevronLeftMinor} />}
          />
        )}
        <Stack.Item fill>
          <Stack vertical spacing="tight">
            <DisplayText>{title}</DisplayText>
            <div>by {appName} app</div>
          </Stack>
        </Stack.Item>
      </Stack>
    </>
  );
}
