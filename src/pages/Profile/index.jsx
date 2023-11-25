import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Avatar } from './styles'

import { ButtonBack } from '../../components/ButtonBack'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { useNavigate
 } from 'react-router-dom'
import { api } from '../../services/api'
import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
  const { user, updatedProfile } = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder

  const [ avatar, setAvatar ] = useState(avatarURL)
  const [ avatarFile, setAvatarFile] = useState(null)

 function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
  
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }


  function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const updatedUser = Object.assign(user, updated)
    
    updatedProfile({ user: updatedUser, avatarFile })
  }

  return (
    <Container>

      <header>
        <ButtonBack onClick={handleBack} title="Voltar" icon={FiArrowLeft} />
      </header>

      <main>

        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id='avatar' onChange={handleChangeAvatar} />

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
          value={email}
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