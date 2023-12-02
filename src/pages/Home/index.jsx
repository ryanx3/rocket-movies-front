import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header"

import { Note } from "../../components/Note"

import * as Title from '../../components/Title'

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
      
      <div className="titleLayout">
        <Title.PageTitle title="Meus filmes" icon={FiPlus} />
        <Title.IconButton icon={FiPlus} text={"Adicionar filme"} to="/newnote"/>
      </div>

        {
          notes && 
          <MainTags>
            {
            notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleOpenDetails(note.id)}
              />
            ))
            }
          </MainTags>
        }

      </main>

    </Container>
  )
}