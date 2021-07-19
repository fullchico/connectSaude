import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export const Container = styled.View`
  height:${({theme}) => theme.marginSpace.g};
  justify-content: space-around;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background};
  margin-top:${({theme}) => theme.marginSpace.p};
`;

export const Content = styled.View`
  margin-top:${({theme}) => theme.marginSpace.p};

  align-items: center;

  flex-direction:row;
  justify-content: center;

`
export const Text = styled.Text`

  color: ${({theme})=>theme.colors.secondary};
  font-family: ${({theme})=>theme.fonts.medium};

`
