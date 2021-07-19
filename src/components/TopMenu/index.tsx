import React, { ReactElement, ReactNode } from 'react';

import {Container, TextInfo, Content} from './styled';


interface TopMenuProps{
  children: ReactNode;
}

export function TopMenu({children}: TopMenuProps){
  return(
    <Container>
     {children}
    </Container>
  )
}