import { Container } from './styles'

export function Input({icon: Icon, value, ...rest}) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20}/>}
      <input {...rest} value={value}/>
    </Container>
  )
}