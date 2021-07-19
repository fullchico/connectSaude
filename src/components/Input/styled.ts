import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
  
`
export const InputText = styled.TextInput`
  font-family: ${({theme})=>theme.fonts.medium};
  
  height:${RFPercentage(7)}px;
  width: ${RFPercentage(45)}px;
  padding-left: ${({theme})=>theme.marginSpace.pp};

  border-radius: ${RFPercentage(2)}px;
  border: ${RFValue(2)}px solid ${({theme})=>theme.colors.primary};
  color: ${({theme})=>theme.colors.title};
  
`
export const Label = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  font-size: ${({theme})=>theme.fontSize.title};
  color: ${({theme})=>theme.colors.secondary};
  
`