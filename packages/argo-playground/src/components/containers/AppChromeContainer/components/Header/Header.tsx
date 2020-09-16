import React, {useState, useMemo, useCallback} from 'react';
import {
  ActionList,
  Button as PolarisButton,
  DisplayText,
  Form,
  FormLayout,
  Icon,
  Modal,
  Popover,
  Stack,
  TextField,
  Truncate,
} from '@shopify/polaris';
import {AppExtensionMinor, ChevronLeftMinor, HorizontalDotsMinor} from '@shopify/polaris-icons';

import ShopifyLogoMono from './shopify-logo-mono.svg';
import {Button} from './Button';
import styles from './Header.scss';

export interface Props {
  appId: string;
  icon?: string;
  launchUrl: string;
  title: string;
  onClose?: () => void;
}

export default function Header({launchUrl, icon, onClose = () => {}, title}: Props) {
  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = useCallback(() => {
    setPopoverActive((popoverActive) => !popoverActive);
  }, []);

  const [supportModalActive, setSupportModalActive] = useState(false);
  const toggleSupportModalActive = useCallback(() => {
    setSupportModalActive((supportModalActive) => !supportModalActive);
  }, []);

  const activatorMarkup = (
    <Button onPress={togglePopoverActive} accessibilityLabel="Shows additional actions">
      <Icon source={HorizontalDotsMinor} color="indigoDark" />
    </Button>
  );

  const iconMarkup = icon ? <img src={icon} alt={title} /> : <Icon source={AppExtensionMinor} />;

  const appNameAndIconMarkup = useMemo(
    () => (
      <span className={styles.AppOwnership}>
        {iconMarkup}
        <Truncate>{title}</Truncate>
      </span>
    ),
    [iconMarkup, title],
  );

  const getSupportLink = {
    content: 'Get support',
    onAction: () => {
      setSupportModalActive(true);
      togglePopoverActive();
    },
  };

  const manageAppLink = {
    content: 'Manage app',
    url: launchUrl,
    external: false,
  };

  return (
    <div className={styles.Header}>
      <Stack alignment="center" wrap={false}>
        <Button
          icon={<Icon source={ChevronLeftMinor} color="indigoDark" />}
          onPress={onClose}
          accessibilityLabel="Close App Extension"
        >
          <ShopifyLogoMono />
        </Button>

        <Stack.Item fill>
          <Stack vertical alignment="center" spacing="none">
            <DisplayText size="small">{appNameAndIconMarkup}</DisplayText>
          </Stack>
        </Stack.Item>

        <div className={styles.ActionPopover}>
          <Popover
            activator={activatorMarkup}
            active={popoverActive}
            onClose={togglePopoverActive}
            ariaHaspopup="menu"
          >
            <ActionList items={[manageAppLink, getSupportLink]} />
          </Popover>
        </div>
      </Stack>

      <Modal
        open={supportModalActive}
        onClose={toggleSupportModalActive}
        title="Get support"
        activator={getSupportLink}
      >
        <Modal.Section>
          <Form onSubmit={() => {}}>
            <FormLayout>
              <TextField
                onChange={() => {}}
                label="Message"
                type="text"
                helpText={<span>Use this form to email the app developer.</span>}
              />

              <PolarisButton submit>Submit</PolarisButton>
            </FormLayout>
          </Form>
        </Modal.Section>
      </Modal>
    </div>
  );
}
