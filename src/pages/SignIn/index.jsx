import { FiMail, FiLock} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonBack } from '../../components/ButtonBack'

import { Link } from 'react-router-dom'


import { Container, Background } from './styles'

export function SignIn() { 
  return(
    <Container>
      <main>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Faça seu login</h2>

      <Input icon={FiMail} type="email" placeholder="Email"/>
      <Input icon={FiLock} type="password" placeholder="Senha"/>

      <Button title="Entrar"/>

      <Link to="/register" href="#">Criar conta</Link>
      </main>

      <Background/>
    </Container>
  )
}