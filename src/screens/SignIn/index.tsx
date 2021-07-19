import React, { useState } from 'react';
import {Logo} from '../../components/Logo';
import {Input} from '../../components/Input'

import { Container, Content,Text } from './styled';
import { Button} from '../../components/Button';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Footer } from '../../components/Footer';


export function SignIn(){
  const [ hidePass, srtHidePass] = useState(true)

  return(
    <>
      <Logo layout/>
        <Container >
            <Input label="Login" placeholder="Digite seu CPF"/>
          
            <Input 
            label="Senha" placeholder="Digite sua senha"
            secureTextEntry={hidePass}
            />
        </Container>
        
        <Content>  
          <Button/>
        </Content>

        <Content>
         <AntDesign
           name="adduser"
           color="#5697BF"
           size={20}
         />

          <Text>
            Cadastre-se
          </Text>
        </Content>

        <Content>
          <Text>
            Esqueceu a senha?
          </Text>
        </Content>
            
        <Content>
          <Footer/>
        </Content>
    </>
  )
}