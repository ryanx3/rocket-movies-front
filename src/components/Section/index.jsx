import { Container } from './styles'

export function Section({children, title, ...rest}) {
    return(
        <Container {...rest}>
            {title}
            {children}
        </Container>
    )
}