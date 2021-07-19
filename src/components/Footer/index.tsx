import React from 'react';

import { Container} from './styled';

import LogoSUS from '../../svg/LogoSUS.svg';
import LogoPre from '../../svg/LogoPre.svg';
import LogoPB from '../../svg/LogoPB.svg';

export function Footer(){
  return(
    <Container>
      <LogoSUS/>
      <LogoPB/>
      <LogoPre/>
    </Container>
  )
}