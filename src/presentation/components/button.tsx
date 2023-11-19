import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../theme/app-theme'

interface ButtonProps {
  text: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.button}
    >
      <Text
        style={styles.textButton}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1.5
  }
})

export default Button