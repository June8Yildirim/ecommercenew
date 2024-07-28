import * as React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

const CustomModal = ({ onApprove, onCancel, setVisible }) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={true}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={() => setVisible(true)}>
        Show
      </Button>
    </PaperProvider>
  );
};

export default CustomModal;
// {isOpenModal && (
//   <CustomModal
//     onApprove={ondeleteItemHandler}
//     onCancel={onCancelHandler}
//     setVisible={setIsOpenModal}
//   />
// )}
