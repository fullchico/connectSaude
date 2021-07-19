import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${({theme}) => theme.marginSpace.m};
  justify-content: center;
  align-items: center;
`;

export const TextLayout = styled.Text`
margin-top: ${({theme}) => theme.marginSpace.pp};
font-family: ${({theme})=>theme.fonts.bold};
color: ${({theme})=>theme.colors.secondary};
font-size: ${({theme})=>theme.marginSpace.p};

`