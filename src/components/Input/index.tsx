import React from 'react';
import {Container, InputText, Label } from './styled'

import { Ionicons } from '@expo/vector-icons';


interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  secureTextEntry?:boolean;
  hidePass?: string;

  
}

export function Input({label, placeholder, secureTextEntry}: InputProps ){
  return(

    <Container>
      <Label>
        {label}
      </Label>

      <InputText 
      placeholder={placeholder} 
      secureTextEntry={secureTextEntry}
      />
    </Container>


  )
}