import { Tag } from '../Tag'

import { StarColor } from "../../assets/starColor"
import { StarNoColor } from "../../assets/starNoColor"
 
import { Container } from './styles'

export function Note({data, icon: Icon,  ...rest}) {
return(
    <Container {...rest}>
    
     <h1>{data.title}
     {Icon && <Icon size="20"/>}
     <div>
     <StarColor/>
     <StarColor/>
     <StarColor/>
     <StarColor/>
     <StarNoColor/>
     </div>
     </h1>
    

     <p>{data.p}</p>
    {
        data.tags && 
        <footer> {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/> )
        }
        </footer>    
    }
    </Container>
)
}