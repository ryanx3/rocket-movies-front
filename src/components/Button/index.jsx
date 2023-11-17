import { Container } from './styles'

export function Button({title, backgroundColor, titleColor, ...rest}) {
    return(
        <Container {...rest} style={{backgroundColor, color: titleColor }}>
            {title}
        </Container>
    )
}