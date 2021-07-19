import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`

  justify-content: space-between;
  align-items: center;

  padding: ${RFPercentage(2)}px;

  margin-top: ${RFPercentage(2)}px;
 
`

export const Content = styled.View`

  justify-content:center;
  align-items: center;
  margin-top: ${RFPercentage(5)}px;

`

export const TextInfo = styled.Text`

  font-family: ${({theme})=>theme.fonts.bold};

  font-size: ${RFValue(16)}px;
`

export const Text = styled.Text`

  font-family: ${({theme})=>theme.fonts.bold};

  font-size: ${RFValue(25)}px;

`

export const ContentScroll = styled.ScrollView`

 flex: 1;
 

`
