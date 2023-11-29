import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header"
import { Title } from "../../components/Title"
import { Note } from "../../components/Note"
import { Content } from "../../components/Content"

import { Container, MainTags } from "./styles";

export function Home() {
  return(
    <Container>
      <Header/>

      <Content> 

        <h1>TE AMO PATO DA VIDA, meu amor! </h1>
        
      </Content>
    </Container>
  )
}