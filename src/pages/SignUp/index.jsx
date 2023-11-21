import { useState } from 'react'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

import { api } from "../../services/api"

import { Container, Background } from './styles'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos para criar um usuário!")
    };
    
    api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!"),
        navigate("/")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Erro ao cadastrar este usuário!")
        }
      }) 

  }

  return (
    <Container>
      <Background />

      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser}
          type="text"
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
        />
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

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/" href="#">Voltar para o login</Link>
      </main>
    </Container>
  )
}