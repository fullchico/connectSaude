import React from 'react';

import {Container,TextDate,TextDetails, Content,StatusContent } from './styled';
export function SchedulingTable(){
  return(
    <Container>
      <Content>
        <TextDate>
        Status
        </TextDate>

        <TextDate>
          Confirmado
        </TextDate>
        <StatusContent/>
      </Content>

      <Content>
        <TextDetails>
        Checape geral 
        </TextDetails>
      </Content>

      <Content>
        <TextDate>
          Local: Hospital metropolitano de Santa Rita
        </TextDate>
     </Content>

      <Content>      
        <TextDate>
           Data: 22 de julho de 2021
        </TextDate>
      </Content>

      <Content>
        <TextDate>
           N:000321
        </TextDate>

        <TextDate>
          Detalhes
        </TextDate>
      </Content>

    </Container>
  )
}