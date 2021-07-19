
import React from 'react';

import { ButtonApp } from '../../components/ButtonApp/index';

import Agendamento from '../../svg/Agendamento.svg'

import Vacina from '../../svg/Vacina.svg'
import Cartao from '../../svg/Cartao.svg'
import Exames from '../../svg/Exames.svg'
import Historico from '../../svg/Historico.svg'

import Telemedicina from '../../svg/Telemedicina.svg'
import { TopMenu } from '../../components/TopMenu';

import { AntDesign,Feather } from '@expo/vector-icons'; 

import {Container, Content, TextInfo, Text, ContentProfile} from './styled';
import { CardProfile } from '../../components/CardProfile';

export function Home(){
  return (
    <>
   <TopMenu>
     <Feather name="menu" size={35} color="#2b65c8"/>

     <TextInfo>
       Inicio
     </TextInfo>

     <AntDesign name="bells" size={35} color="#2b65c8"/>

   </TopMenu>

    <ContentProfile>
      <CardProfile/>
    </ContentProfile>

   <Container>

     <Content>
        <ButtonApp description="Agendamentos">
          <Agendamento height="50px"/>
        </ButtonApp>

        <ButtonApp description="Vacinas">
          <Vacina height="50px"/>
        </ButtonApp>

        <ButtonApp description="Cartão SUS">
          <Cartao height="50px"/>
        </ButtonApp>
     </Content>

     <Content>
      <ButtonApp description="Exames">
        <Exames height="50px"/>
      </ButtonApp>

      <ButtonApp  description="Meu Histórico">
        <Historico height="50px"/>
      </ButtonApp>
      
      <ButtonApp description="Telemedicina">
        <Telemedicina height="50px"/>
      </ButtonApp>
     </Content>
  
   </Container>
   </>
  )
}