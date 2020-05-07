import React from 'react';
import {Modal, Stack, TextContainer, DisplayText, Button} from '@shopify/polaris';
import {ArgoHeader} from '../../components/containers/shared/Header';

const {default: ErrorMonitorImage} = require('../../assets/images/error-monitor.png');

export function RenderErrorModal({open, onClose}: {open: boolean; onClose: () => void}) {
  return (
    <Modal
      large
      open={open}
      onClose={onClose}
      title={<ArgoHeader appName="my" title="Create subscription plan" />}
    >
      <Modal.Section>
        <Stack distribution="center" alignment="center">
          <Stack.Item>
            <TextContainer>
              <DisplayText>
                There's a problem loading
                <br />
                this app
              </DisplayText>

              <Button outline>Get Support</Button>
            </TextContainer>
          </Stack.Item>
          <Stack.Item>
            <img src={ErrorMonitorImage} alt="Error Monitor" />
          </Stack.Item>
        </Stack>
      </Modal.Section>
    </Modal>
  );
}
