import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFPercentage(2)}px;

  margin-top: ${RFPercentage(6)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme})=> theme.colors.title};

`

export const Content = styled.View`

  justify-content:center;
  align-items: center;

`

export const TextInfo = styled.Text`

  font-family: ${({theme})=>theme.fonts.bold};


`