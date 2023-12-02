import { Container } from './styles'
import { Link } from 'react-router-dom'

export function ButtonBack({icon:Icon, title, to, ...rest}) {
return (
    <Container {...rest}>
        {Icon && <Icon size={20}/>}
        {title}
    </Container>
)
}