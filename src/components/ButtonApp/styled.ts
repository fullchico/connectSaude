import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const StyledIcon = styled.View`

  

`
export const ButtonNavigate = styled.TouchableOpacity`
  background-color: ${({theme})=>theme.colors.primary};

  width: ${RFPercentage(17)}px;
  height: ${RFPercentage(17)}px;  border-radius: ${RFValue(15)}px;
  align-items:center;

  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;

  justify-content: space-between;

  elevation:24;
`
export const TextDescription = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme})=>theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`