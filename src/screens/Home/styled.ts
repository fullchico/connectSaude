import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* margin-top: ${RFPercentage(8)}px; */
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background};

  flex: 1;
`;

export const Content = styled.View`
  
  width: ${RFPercentage(65)}px;

  padding-left: ${RFPercentage(6)}px;
  padding-right: ${RFPercentage(6)}px;;
  margin-top: ${RFPercentage(4)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  
`

export const ContentProfile = styled.View`
  
  margin-top: ${RFPercentage(4)}px;

  justify-content: center;
  align-items: center;

  
`


export const TextInfo = styled.Text`

  font-family: ${({theme})=>theme.fonts.bold};
  font-size: ${RFValue(16)}px;

`

export const Text = styled.Text`

  font-family: ${({theme})=>theme.fonts.medium};
  font-size: ${RFValue(16)}px;

`

