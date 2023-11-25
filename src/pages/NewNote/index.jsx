import { FiArrowLeft } from 'react-icons/fi'

import { Container, InputSection, Footer } from './styles'

import { ButtonBack } from '../../components/ButtonBack'
import { Textarea } from '../../components/Textarea'

import * as NoteItem from '../../components/NoteItem/index.jsx'

import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Scroll } from '../../components/Scroll'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { Content } from "../../components/Content"

export function NewNote() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Scroll top="53px" />

          <ButtonBack to="/" title="Voltar" icon={FiArrowLeft} />

          <Title title="Novo filme" />

          <InputSection>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </InputSection>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">

            <div className="backgroundNoteItem">
              <NoteItem.Root value="React" readOnly/>
              <NoteItem.New placeholder="Novo Marcador"/>
            </div>


          </Section>

          <Footer>
            <Button title="Excluir filme" backgroundColor="#0D0C0F" titleColor="#FF859B" />
            <Button title="Salvar alterações" />
          </Footer>

        </Content>

      </main>
    </Container>
  )
}