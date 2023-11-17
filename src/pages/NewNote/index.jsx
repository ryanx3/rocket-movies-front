import { FiArrowLeft } from 'react-icons/fi'

import { Container, InputSection, Footer } from './styles'

import { ButtonBack } from '../../components/ButtonBack'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Scroll } from '../../components/Scroll'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { Main } from "../../components/Main"

export function NewNote() {
  return(
    <Container>
      <Header/>
        
      <Main>
        <Scroll top="53px"/>

        <ButtonBack to="/" title="Voltar" icon={FiArrowLeft}/>

        <Title title="Novo filme"/>

        <InputSection>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
        </InputSection>

            <Textarea placeholder="Observações"/>

        <Section title="Marcadores">
            <div className="backgroundNoteItem">
            <NoteItem value="React" readOnly $isNew={true}/>
            <NoteItem value="Novo marcador" $isNew={false}/>
            </div>
        </Section>

        <Footer>
            <Button title="Excluir filme" backgroundColor="#0D0C0F" titleColor="#FF859B"/>
            <Button title="Salvar alterações"/>
        </Footer>

      </Main>
    </Container>
    )
}