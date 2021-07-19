import React from 'react';
import { TopMenu } from '../../components/TopMenu';

import { AntDesign,Feather } from '@expo/vector-icons'; 

import {SchedulingTable} from '../../components/SchedulingTable';
import {TextInfo,Container,Text, Content,ContentScroll} from './styled';


export function Scheduling(){

  return(
    <>
    <TopMenu>
      <Feather name="menu" size={35} color="#2b65c8"/>
        <TextInfo>
          Agendamentos
        </TextInfo>
      <AntDesign name="bells" size={35} color="#2b65c8"/>
    </TopMenu>

    <Content>
      <Text>
        Meus Agendamentos
      </Text>
    </Content>

      <ContentScroll>

        <Container> 
            <SchedulingTable/>
        </Container>
      
      </ContentScroll>


   </>
  )
}