import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  value
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingBottom: 4,
        marginBottom: 25,
        alingSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: "70%",
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
        />
      ) : 
      inputType == 'Comment' ? (
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      ):
      inputType == 'Rate' ? (
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={label}
          keyboardType='numeric'
          style={{ flex: 1, paddingVertical: 0}}
        />
      ):
      (
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
