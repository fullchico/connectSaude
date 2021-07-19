import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`

  height: ${RFPercentage(25)}px;
  width: ${RFPercentage(50)}px;
  background-color: ${({theme})=>theme.colors.shape};

  border-radius: ${RFPercentage(2)}px;
  elevation: 12;

  padding:${RFPercentage(2)}px;

  justify-content:space-between;
`