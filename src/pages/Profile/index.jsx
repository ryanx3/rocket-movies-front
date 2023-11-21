import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Avatar } from './styles'

import { ButtonBack } from '../../components/ButtonBack'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { user, updatedProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  
  function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    updatedProfile({ user })
  }

  return (
    <Container>

      <header>
        <ButtonBack to="/" title="Voltar" icon={FiArrowLeft} />
      </header>

      <main>

        <Avatar>
          <img src={user.avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id='avatar' />

          </label>
        </Avatar>

        <Input icon={FiUser}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
          value={name}
        />


        <Input icon={FiMail}
          type="email" placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={user.email}
        />

        <Input icon={FiLock}
          type="password"
          placeholder="Senha atual"
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input icon={FiLock}
          type="password"
          placeholder="Nova senha"
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar alterações" onClick={handleUpdate}/>
      </main>
    </Container>
  )
}