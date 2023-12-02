import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { ButtonBack } from '../../components/ButtonBack'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

import { Tag } from "../../components/Tag"

import { StarColor } from "../../assets/starColor"
import { StarNoColor } from "../../assets/starNoColor"

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Profile } from './styles'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export function Details() {
  const { user } = useAuth()
  const avatarURL = `${api.defaults.baseURL}/files/${user.avatar}`

  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  const starShow = () => {
    const stars = []
    const totalStars = 5

    for (let i = 1; i <= totalStars; i++)
      if (i <= data.note.rating) {
        stars.push(<StarColor />)
      } else {
        stars.push(<StarNoColor />)
      }

    return stars
  };

  function handleBack() {
    navigate(-1)
  }

  async function handleOpenDetails(id) {
    navigate(`/noteupdate/${id}`)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir a sua nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])


  return (
    <Container>
      <Header />

      {
        data &&
        <main>

          <div className="buttons">
            <ButtonBack onClick={handleBack} title="Voltar" icon={FiArrowLeft} />
            <ButtonBack onClick={handleRemove} title="Excluir nota" />
          </div>

          <Section>
            <h1>{data.note.title} <span>{starShow()}</span></h1>

            <Profile>
              <img src={avatarURL} alt="Foto do usuário" />
              <p>Por {user.name}</p>
              <span><FiClock /> {data.note.created_at}</span>
            </Profile>

            {
              data.tags &&
              <div className="TagDetails">
                {
                  data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
              </div>
            }
          </Section>

          <Section>
            <p>
              {data.note.description}
            </p>
          </Section>

          <footer>
            <Button
              title="Editar Nota"
              onClick={() => handleOpenDetails(data.note.id)}
            />
          </footer>

        </main>
      }

    </Container>
  )
}