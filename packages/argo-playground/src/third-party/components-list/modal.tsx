import React, {useState, useMemo} from 'react';
import {Card, Stack, Checkbox, Button, Modal, TextField} from '@shopify/argo-admin-react';

export function ModalExample() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalShowPrimayAction, setModalShowPrimayAction] = useState(false);
  const [modalShowSecondaryAction, setModalShowSecondaryAction] = useState(false);
  const [modalShowSecondaryActions, setModalShowSecondaryActions] = useState(false);
  const modalPrimaryAction = useMemo(() => {
    return modalShowPrimayAction
      ? {
          content: 'Done',
          onAction: () => setModalOpen(false),
        }
      : undefined;
  }, [modalShowPrimayAction]);
  const modalSecondaryActions = useMemo(() => {
    const actions = [
      {
        content: 'Cancel',
        onAction: () => setModalOpen(false),
      },
    ];
    if (modalShowSecondaryActions) {
      actions.push({
        content: 'Foo',
        onAction: () => setModalOpen(false),
      });
      return actions;
    }
    if (modalShowSecondaryAction) {
      return actions;
    }
    return undefined;
  }, [modalShowSecondaryAction, modalShowSecondaryActions]);

  return (
    <Card sectioned title="Modal component">
      <Stack vertical>
        <Checkbox checked={modalShowPrimayAction} onChange={setModalShowPrimayAction}>
          Show primary action
        </Checkbox>
        <Checkbox checked={modalShowSecondaryAction} onChange={setModalShowSecondaryAction}>
          Show Secondary Action
        </Checkbox>
        <Checkbox checked={modalShowSecondaryActions} onChange={setModalShowSecondaryActions}>
          Show secondary actions
        </Checkbox>
        <Button title="Open modal" onPress={() => setModalOpen(true)} />
      </Stack>
      <Modal
        title="Edit subscription plan"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        primaryAction={modalPrimaryAction}
        secondaryActions={modalSecondaryActions}
      >
        <TextField label="Custom plan title" />
      </Modal>
    </Card>
  );
}
