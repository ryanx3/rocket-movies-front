import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header"
import { Title } from "../../components/Title"
import { Note } from "../../components/Note"

import { Container, MainTags } from "./styles";
import { useEffect, useState } from 'react'

import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  async function handleOpenDetails(id) {
    navigate(`details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)

      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header
        onInputChange={(e) => setSearch(e.target.value)}
      />

      <main>

        <Title to="/newnote" title="Meus filmes" text="Adicionar filme" icon={FiPlus} />

        <MainTags>
        <div className="scrollColor"></div>

        {
          notes &&
          notes.map(note => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleOpenDetails(note.id)}
            />
          ))
        }
        </MainTags>

      </main>

    </Container>
  )
}