import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`

  height: ${RFPercentage(45)}px;
  width: ${RFPercentage(45)}px;
  background-color: ${({theme})=>theme.colors.shape};

  border-radius: ${RFPercentage(2)}px;
  elevation: 12;

  padding:${RFPercentage(2)}px;

  justify-content:space-between;
`
export const Content = styled.View`

  width: 100%;

  flex-direction: row;
  
  justify-content:space-between;
  align-items: center;
 

`

export const StatusContent = styled.View`
  height: ${RFValue(25)}px;
  width: ${RFValue(25)}px;
  background-color: ${({theme})=>theme.colors.confirm};

  border-radius: ${RFValue(8)}px;

`

export const TextDate = styled.Text`

  font-family: ${({theme})=>theme.fonts.regular};

`

export const TextDetails = styled.Text`

  font-family: ${({theme})=>theme.fonts.medium};

  font-size: ${RFValue(25)}px;

`

