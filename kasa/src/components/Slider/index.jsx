import {useState} from 'react'

function Slider(props){
    const {pictures, title} = props
    const [picture, changePicture] = useState(props.pictures[0])

    function nextIndex() {
        return(
            props.pictures.indexOf(picture) === props.pictures.length -1 ? 
            0 :
            props.pictures.indexOf(picture)+1
        )
    }

    function prevIndex() {
        return(
            props.pictures.indexOf(picture) === 0 ? 
            props.pictures.length - 1 :
            props.pictures.indexOf(picture)-1
        )
    }

    return(
        <section className="container mySlider"> 
            <div className="row">
                <div className="col-12">
                    <button className='slide-btn slide-btn--left'
                        onClick={()=>changePicture(props.pictures[prevIndex()])}>
                    </button>

                    <button className='slide-btn slide-btn--right'
                        onClick={()=>changePicture(props.pictures[nextIndex()])}>
                    </button>

                    <div className='slide-number'>{`${props.pictures.indexOf(picture) + 1} / ${props.pictures.length}` }</div>

                    <img src={picture} alt={title} className='slider-picture' />

                </div>
            </div>
        </section>
    )
}

export default Slider