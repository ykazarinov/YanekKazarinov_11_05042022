
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const CardImg = styled.div`

    background-image: ${({ picture }) => (`url('${picture}')`)};

`

function Card(props) {

const id = props.id
const title = props.title
const cover = props.cover

    return (

        <CardImg  picture={cover} className='col-lg-4 col-12 my-card' key={id}>
            <Link to='/'>
                <div className='title'>{title}</div>
            </Link>
    
        </CardImg>
    )
}

    export default Card