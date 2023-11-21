import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Background } from './styles'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  async function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail}
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
 
        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <Button onClick={handleSignIn} title="Entrar" />

        <Link to="/register" href="#">Criar conta</Link>
      </main>

      <Background />
    </Container>
  )
}