
import { StarColor } from "../../assets/starColor"
import { StarNoColor } from "../../assets/starNoColor"

import { Tag } from '../Tag'
import { Container } from './styles'

export function Note({ data, icon: Icon, ...rest }) {

  const ratingStars = () => {
    const stars = []
    const totalStars = 5

    for (let i = 1; i <= totalStars; i++)
      if (i <= data.rating) {
        stars.push(<StarColor />)
      } else {
        stars.push(<StarNoColor />)
      }
    return stars
  };

  return (
    <Container {...rest}>

      <h1>{data.title}{Icon && <Icon size="20" />}</h1>
      <div>{ratingStars()}</div>
      <p>{data.description}</p>

      {
        data.movie_tags &&
        <footer>
          {
            data.movie_tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
        </footer>
      }
    </Container>
  )
}