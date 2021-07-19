import React, { ReactNode } from 'react';

import { TextDescription, ButtonNavigate, StyledIcon} from './styled';

interface IconProps {
  children?: ReactNode;
  description?: string;
}

export function ButtonApp(props: IconProps){
  return(
    
      <ButtonNavigate>
          <StyledIcon>
            {props.children}
          </StyledIcon>
        <TextDescription>
          {props.description}
        </TextDescription>
      </ButtonNavigate>
  )
}