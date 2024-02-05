import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../theme/app-theme'

interface ButtonProps {
  onPress: () => void
  children: React.ReactNode
  disabled?: boolean,
  color?: string,
  fullWidth?: boolean
  rounded?: boolean
}

const Button: React.FC<ButtonProps> = ({ onPress, children, disabled, color, fullWidth, rounded }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.6}
      onPress={() => onPress()}
      style={[styles.button, { backgroundColor: color ? color : COLORS.primary }, { width: fullWidth ? '100%' : 'auto' }, { borderRadius: rounded ? 100 : 10 }]}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})

export default Button