import React from 'react';
import LogoPP from '../../svg/LogoPP.svg';
import {Container, TextLayout} from './styled';

interface LogoProps {
  layout?: boolean;
}

export function Logo(props: LogoProps){
  return(
    <Container>
      <LogoPP/>
      {props.layout &&  
      <TextLayout>
        ConnectSaúde+
      </TextLayout> }
    </Container>
  ) 
}