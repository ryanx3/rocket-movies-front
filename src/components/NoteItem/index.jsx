import { Container, ContainerNew } from "./styles"
import { FiPlus, FiX } from 'react-icons/fi'

export function Root({ value, onClick, readOnly = true, ...rest }) {
  return (
    <Container>
      <input
        style={{width: `${value.length}ch`}}
        type="text"
        defaultValue={value}
        readOnly
        {...rest}
      />

      <button
        onClick={onClick}
        type="button">
        <FiPlus />
      </button>
    </Container>
  )
}

export function New({ onClick, ...rest }) {
  return (
    <ContainerNew>
      <input type="text" 
      placeholder="Novo Marcador"/>

      <button
        onClick={onClick}
      >
        <FiX />
      </button>
    </ContainerNew>
  )
}

export function Icon({}) {
  return(
    <span></span>
  )
}