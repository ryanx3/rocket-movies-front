import { FiMail, FiLock, FiUser} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'


import { Container, Background } from './styles'

export function SignUp() { 
  return(
    <Container>
      <Background/>

      <main>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Crie sua conta</h2>

      <Input icon={FiUser} type="text" placeholder="Nome"/>
      <Input icon={FiMail} type="email" placeholder="Email"/>
      <Input icon={FiLock} type="password" placeholder="Senha"/>
     
      <Button title="Cadastrar"/>

      <Link to="/" href="#">Voltar para o login</Link>
      </main>
    </Container>
  )
}