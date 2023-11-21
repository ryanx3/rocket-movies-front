import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

import AvatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
export function Header() {

  const { signUp, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signUp()
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder


  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título' />

      <Profile>
        <div>
          <Link to="profile">
            <p>{user.name}</p>
          </Link>

          <span onClick={handleSignOut}>Sair</span>
        </div>

        <Link to="profile">
          <img src={avatarURL} alt="Foto do usuário" />
        </Link>
      </Profile>

    </Container>
  )
}