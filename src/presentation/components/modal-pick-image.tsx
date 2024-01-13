import { Alert, Modal, StyleSheet, Text, View } from 'react-native';
import Button from './button';

interface Props {
  openGallery: () => void;
  openCamera: () => void;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPickImage = ({ openGallery, openCamera, setModalVisible, modalVisible }: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={styles.modalText}
            >
              Select an option
            </Text>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
                openGallery();
              }}
            >
              <Text style={styles.textButton}>
                Open Gallery
              </Text>
            </Button>

            <Button
              onPress={() => openCamera()}
            >
              <Text style={styles.textButton}>
                Open Camera
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    gap: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1.5
  }
});

export default ModalPickImage