import { Container, Button } from './styles'
import { Link } from 'react-router-dom';

export function PageTitle({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}

export function IconButton({ text, icon: Icon, to, ...rest }) {
  return (
    <Link to={to}>
      <Button {...rest}>
        {Icon && <Icon size={20} />}
        {text}
      </Button>
    </Link>
  )
}