import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { ButtonBack } from '../../components/ButtonBack'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Scroll } from '../../components/Scroll'
import { Content } from "../../components/Content"
import { Tag } from "../../components/Tag"

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Profile } from './styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Details() {
  const { user } = useAuth()
  const avatarURL = `${api.defaults.baseURL}/files/${user.avatar}`

  const [data, setData] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [params.id])


  return (
    <Container>
      <Header />


      {
        data &&
        <main>
          <Content>
            <Scroll top="62px" />

            <ButtonBack to="/" title="Voltar" icon={FiArrowLeft} />

            <Section>
              <h1>{data.title} {data.rating}</h1>

              <Profile>
                <img src={avatarURL} alt="Foto do usuário" />
                <p>Por {user.name}</p>
                <span><FiClock /> {Date()} às 14h30</span>
              </Profile>

              <div className="TagDetails">
                <Tag title="Ficção científica" />
                <Tag title="Drama" />
                <Tag title="Família" />
              </div>

            </Section>

            <Section>
              <p>
                {data.description}
              </p>
            </Section>
          </Content>
        </main>}

    </Container>
  )
}