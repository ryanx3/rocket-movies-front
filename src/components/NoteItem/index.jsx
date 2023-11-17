import { Container } from "./styles"
import { FiPlus, FiX } from 'react-icons/fi'

export function NoteItem({ $isNew, value, onClick, ...rest }) {
   
return(
  <Container $isNew={$isNew}>
    <input
    style={{width: `${value.length}ch`}}
    type="text"
    defaultValue={value}
    readOnly={!$isNew}
    {...rest}
    />

    <button 
    onClick={onClick}
    type="button">
      {$isNew ? <FiX/> : <FiPlus/>}
    </button>
  </Container>
)}