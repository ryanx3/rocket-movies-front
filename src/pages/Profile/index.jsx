import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Avatar } from './styles'

import { ButtonBack } from '../../components/ButtonBack'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Scroll } from '../../components/Scroll'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { Main } from "../../components/Main"

export function Profile() { 
return(
  <Container>

    <header>
      <ButtonBack to="/" title="Voltar" icon={FiArrowLeft}/>
    </header>

    <main>

      <Avatar>
      <img src="https://github.com/ryanx3.png" alt="Foto do usuário" />

      <label htmlFor="avatar">
        <FiCamera/>
      <input type="file" id='avatar'/>

      </label>
      </Avatar>

      <Input icon={FiUser} type="text" placeholder="Nome"/>
      <Input icon={FiMail} type="email" placeholder="Email"/>
      <Input icon={FiLock} type="password" placeholder="Senha atual"/>
      <Input icon={FiLock} type="password" placeholder="Nova senha"/>


    </main>
  </Container>
)
}