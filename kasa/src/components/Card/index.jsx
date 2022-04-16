
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const CardImg = styled.div`

    background-image: ${({ picture }) => (`url('${picture}')`)};

`

function Card(props) {


const {id, title, cover} = props

    return (

        <CardImg  picture={cover} className='col-lg-4 col-sm-12 my-card' key={id}>
            <Link to={`/logement/${id}`}>
                <div className='title'>{title}</div>
            </Link>
    
        </CardImg>
    )
}

    export default Card