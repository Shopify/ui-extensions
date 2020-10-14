import React, {useState, useMemo, useCallback} from 'react';
import {
  ActionList,
  Backdrop,
  Button as PolarisButton,
  Form,
  FormLayout,
  Icon,
  Modal,
  Popover,
  Stack,
  TextField,
  Toast,
  Truncate,
} from '@shopify/polaris';
import {AppExtensionMinor, CancelSmallMinor, DropdownMinor} from '@shopify/polaris-icons';

import {Button} from './Button';
import styles from './Header.module.scss';

export interface Props {
  appId: string;
  developerName: string;
  icon?: string;
  launchUrl: string;
  title: string;
  onClose?: () => void;
}

export default function Header({launchUrl, icon, onClose = () => {}, title, developerName}: Props) {
  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = useCallback(() => {
    setPopoverActive((popoverActive) => !popoverActive);
  }, []);

  const [supportModalActive, setSupportModalActive] = useState(false);
  const toggleSupportModalActive = useCallback(() => {
    setSupportModalActive((supportModalActive) => !supportModalActive);
  }, []);

  const [toastActive, setToastActive] = useState(false);
  const toggleToastActive = useCallback(() => setToastActive((active) => !active), []);
  const toastMarkup = toastActive ? (
    <Toast
      content={`This links to the app in admin/apps i.e. ${launchUrl}`}
      onDismiss={toggleToastActive}
      duration={5000}
    />
  ) : null;

  const activatorMarkup = (
    <Button onClick={togglePopoverActive} accessibilityLabel="Shows additional actions">
      <div className={styles.DeveloperInfo}>
        <span>by</span>
        <span>&nbsp;</span>
        {developerName}
      </div>
      <Icon source={DropdownMinor} color="indigoDark" />
    </Button>
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
    onAction: () => {
      toggleToastActive();
    },
  };

  const popOverMarkup = (
    <Popover
      activator={activatorMarkup}
      active={popoverActive}
      onClose={togglePopoverActive}
      ariaHaspopup="menu"
    >
      <ActionList items={[manageAppLink, getSupportLink]} />
    </Popover>
  );

  const iconMarkup = icon ? <img src={icon} alt={title} /> : <Icon source={AppExtensionMinor} />;

  const appNameAndIconMarkup = useMemo(
    () => (
      <div className={styles.AppOwnership}>
        <span className={styles.Icon}>{iconMarkup}</span>
        <div className={styles.AppOwnershipDetails}>
          <div className={styles.AppName}>
            <Truncate>{title}</Truncate>
          </div>
          {popOverMarkup}
        </div>
      </div>
    ),
    [iconMarkup, popOverMarkup, title],
  );

  const backdrop = useMemo(() => (supportModalActive ? <Backdrop /> : null), [supportModalActive]);

  return (
    <div className={styles.Header}>
      <Stack alignment="center" wrap={false}>
        <Stack.Item fill>
          <Stack vertical alignment="leading">
            {appNameAndIconMarkup}
          </Stack>
        </Stack.Item>

        <div className={styles.CloseButton}>
          <Button
            icon={<Icon source={CancelSmallMinor} color="inkLighter" />}
            onClick={onClose}
            accessibilityLabel="Close App Extension"
          />
        </div>
      </Stack>

      <>
        <Modal open={supportModalActive} onClose={toggleSupportModalActive} title="Get support">
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
        {backdrop}
      </>

      {toastMarkup}
    </div>
  );
}
