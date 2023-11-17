import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título'/>
      <Profile>

        <div>

          <Link to="profile">
          <p>Ryan Gabriel</p>
          </Link>

          <Link to="/">
          <span>Sair</span>
          </Link>

        </div>

        <Link to="profile">
          <img src="https://github.com/ryanx3.png" alt="Foto do usuário" />
        </Link>

      </Profile>
    </Container>
  )
}