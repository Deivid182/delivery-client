import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  image: any;
  property: string;
  onChange: (property: string, value: any) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  keyboardType,
  secureTextEntry = false,
  image,
  property,
  onChange,
  value
}) => {
  return (
    <View style={styles.formInput}>
      <Image
        style={styles.formIcon}
        source={image}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.formTextInput}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={text => onChange(property, text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    gap: 15,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  formIcon: {
    width: 25,
    height: 25,
  },
});

export default Input;
