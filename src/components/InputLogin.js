import React from 'react'
import {TextInput} from 'react-native'

const InputLogin = (props) => {
    const { params } = props;
  return (
    <TextInput
      placeholder={params.placeholder}
      value={params.value}
      onChangeText={params.onChangeText}
      style={{ backgroundColor: "white", padding: 10, margin: 10 }}
    ></TextInput>
  );
};

export default InputLogin;

