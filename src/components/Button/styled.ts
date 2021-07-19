import { ReactElement, ReactNode } from 'react';
import { ButtonProps, Pressable } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const ContentButton = styled.TouchableOpacity`
  height: ${RFPercentage(7)}px;
  width: ${RFPercentage(45)}px;
  background-color: ${({theme})=> theme.colors.primary};
  border-radius:${RFPercentage(2)}px;
  justify-content: center;
  align-items: center;

  elevation:5;

`

export const TextButton = styled.Text`

  color: ${({theme})=> theme.colors.shape};
  font-family: ${({theme})=>theme.fonts.bold};

  font-size:${RFValue(20)}px;

`
