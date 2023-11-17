import { Container, Button } from './styles'

export function Title({title, text, icon: Icon, to, ...rest}) {
    return( 
      <Container {...rest}>
            {title} 

      {text && (
        <Button to={to}>
            {Icon && <Icon size={16} />}
            {text}
        </Button>
      )}
      </Container>
    )
}