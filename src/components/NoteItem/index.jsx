import { Container, ContainerNew } from "./styles"
import { FiPlus, FiX } from 'react-icons/fi'

export function Root({ value, onClick, readOnly = true, ...rest }) {
  return (
    <Container>
      <input
        style={{maxWidth: `${value.length}ch`}}
        type="text"
        value={value}
        readOnly
        {...rest}
      />

      <button
        onClick={onClick}
        type="button">
        <FiX />
      </button>
    </Container>
  )
}

export function New({ onClick, ...rest }) {
  return (
    <ContainerNew>
      <input type="text" 
      placeholder="Novo Marcador"
      {...rest}
      />

      <button
        onClick={onClick}
      >
        <FiPlus />
      </button>
    </ContainerNew>
  )
}
