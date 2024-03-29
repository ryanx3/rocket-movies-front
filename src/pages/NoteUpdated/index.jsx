import { FiArrowLeft } from 'react-icons/fi'

import { Container, InputSection, Footer } from './styles'

import { ButtonBack } from '../../components/ButtonBack'
import { Textarea } from '../../components/Textarea'

import * as NoteItem from '../../components/NoteItem/index.jsx'
import * as Title from '../../components/Title'

import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Content } from "../../components/Content"

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from "../../services/api.js"

export function NoteUpdated() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsExists, setTagsExists] = useState([]);
  const [data, setData] = useState([]);
  const [newTag, setNewTags] = useState("");

  const params = useParams()

  function handleBack() {
    navigate("/")
  }

  function handleAddTag() {
    if (tags.length === 0 && !newTag.trim()) {
      return alert(`O campo "Novo Marcador" não pode estar vazio.`);
    }
  
  
    setTags(prevState => [...prevState, newTag]);
    setNewTags("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  } 

  async function updateNote() {

    const ratingNumber = Number(rating);

    if (!title) {
      return alert("Digite o título da nota")
    }

    if (newTag) {
      return alert("Por favor, adicione uma tag ou deixe o campo em branco para continuar.")
    }

    if (isNaN(ratingNumber) || ratingNumber < 1 || ratingNumber > 5) {
      return alert("Digite uma nota de 1 a 5.");
    }
      await api.put(`/notes/${params.id}`, {
        title,
        description,
        tags,
        rating
      })

    await api.put(`/notes/${params.id}`, {
      title,
      description,
      tags,
      rating
    })

    alert("Nota atualizada com sucesso!")
    navigate("/")
  }


  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setTitle(response.data.note.title)
      setRating(response.data.note.rating)
      setDescription(response.data.note.description)
      setTagsExists(response.data.tags)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonBack onClick={handleBack} title="Voltar" icon={FiArrowLeft} />

          <Title.PageTitle title="Novo filme" />

          <InputSection>
            <Input
              placeholder={"Título"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 1 a 5)"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </InputSection>

          <Textarea
            placeholder="Observações"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="Tags">

              {
                tags.map((tag, index) => (
                  <NoteItem.Root
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              {
                tagsExists.map((tag, index) => (
                  <NoteItem.Root
                    key={String(index)}
                    value={tag.name}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem.New
                onChange={e => setNewTags(e.target.value)}
                onClick={handleAddTag}
                value={newTag}
              />
            </div>

          </Section>

          <Footer>
            <Button title="Excluir nota"
              backgroundColor="#1C1B1E"
              titleColor="#750310"
              onClick={handleRemoveNote}
            />
            <Button
              title="Salvar alterações"
              onClick={updateNote}
            />
          </Footer>

        </Content>

      </main>
    </Container>
  )
}