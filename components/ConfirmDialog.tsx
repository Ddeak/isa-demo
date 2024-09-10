import { intToCurrency } from '@/helpers/format';
import { Investment, ISA } from '@/types';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

type ConfirmDialogProps = {
  showDialog: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  amount: number;
  isa?: ISA;
};

const ConfirmDialog = ({
  showDialog,
  onConfirm,
  onCancel,
  amount,
  isa,
}: ConfirmDialogProps) => {
  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={onCancel}>
        <Dialog.Title>Confirm Investment</Dialog.Title>
        <Dialog.Content>
          <Text variant='bodyMedium'>
            Are you sure you wish to invest {intToCurrency(amount)} into{' '}
            {isa?.name}?
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>Cancel</Button>
        </Dialog.Actions>
        <Dialog.Actions>
          <Button onPress={onConfirm}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConfirmDialog;
