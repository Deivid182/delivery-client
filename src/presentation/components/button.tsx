import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../theme/app-theme'

interface ButtonProps {
  onPress: () => void
  children: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ onPress, children, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.6}
      onPress={() => onPress()}
      style={styles.button}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})

export default Button