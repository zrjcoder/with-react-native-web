import { TextInput as BaseTextInput } from 'react-native-web'

export const TextInput = ({
  value,
  inputMode = 'text',
  readOnly = false,
  placeholderTextColor = '#999999',
  disabled = false,
  secureTextEntry = false,
  placeholder = '请输入',
  onChange,
  ...props
}) => {
  return (
    <BaseTextInput
      defaultValue={value}
      placeholder={placeholder}
      inputMode={inputMode}
      readOnly={readOnly}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  )
}

export const TextAreaInput = ({
  value,
  readOnly = false,
  placeholder = '请输入',
  onChange,
  fontSize = 14,
  rows = 5,
  style,
  ...props
}) => {
  return (
    <textarea
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      style={{
        fontSize: fontSize,
        ...style,
      }}
      {...props}
    />
  )
}
