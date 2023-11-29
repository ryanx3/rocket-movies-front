import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header"
import { Title } from "../../components/Title"
import { Note } from "../../components/Note"
import { Content } from "../../components/Content"

import { Container, MainTags } from "./styles";
import { useEffect, useState } from 'react'

export function Home() {

  const [ notes, setNotes ] = useState([])
  const [ tags, setTags ] = useState([])

  useEffect(() => {
    async function fetchNotes() {
     const response =  await api.get(`/notes`)
     setNotes(response.data)
    }
    fetchNotes()
  }, [])
  
  return(
    <Container>
      <Header/>

      <Content> 

        <Title to="/newnote" title="Meus filmes" text="Adicionar filme" icon={FiPlus}/>
      
        <MainTags>

          <div className="scrollColor"></div>

          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
              />
            ))
          }
        </MainTags>
        
      </Content>
    </Container>
  )
}