import React from 'react';
import {Stack, Icon, DisplayText, Button} from '@shopify/polaris';
import {ChevronLeftMinor} from '@shopify/polaris-icons';

import './styles.css';

interface Props {
  name?: string;
  icon?: string;
  title: string;
  onBackAction?: () => void;
}

const defaultIcon =
  'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22%23212B36%22%20d%3D%22M9%2012v4c0%20.55-.45%201-1%201H4c-.55%200-1-.45-1-1v-4c0-.55.45-1%201-1h4c.55%200%201%20.45%201%201zm8%200v4c0%20.55-.45%201-1%201h-4c-.55%200-1-.45-1-1v-4c0-.55.45-1%201-1h4c.55%200%201%20.45%201%201zM9%204v4c0%20.55-.45%201-1%201H4c-.55%200-1-.45-1-1V4c0-.55.45-1%201-1h4c.55%200%201%20.45%201%201zm10-2v5c0%20.55-.45%201-1%201s-1-.45-1-1V4.42l-4.29%204.29c-.2.19-.45.29-.71.29-.26%200-.51-.1-.71-.29-.39-.39-.39-1.03%200-1.42L15.58%203H13c-.55%200-1-.45-1-1s.45-1%201-1h5c.08%200%20.17.01.25.04.05%200%20.09.02.14.04.12.05.23.12.32.21s.16.2.21.32c.02.05.04.09.04.14.03.08.04.17.04.25z%22%2F%3E%3C%2Fsvg%3E%0A';

export function ArgoHeader({name, icon, title, onBackAction}: Props) {
  const appName = name ? (
    <>
      <span>by</span>
      <img className="ArgoHeader-app-icon" alt="App Icon" src={icon ?? defaultIcon} />
      <span>{`${name} app`}</span>
    </>
  ) : (
    <span>&nbsp;</span>
  );
  return (
    <div className="ArgoModal-header">
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
          <Stack vertical spacing="none">
            <DisplayText>{title}</DisplayText>
            <div className="ArgoHeader-app-ownership">
              <Stack spacing="none">{appName}</Stack>
            </div>
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  );
}
