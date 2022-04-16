import {useState, useEffect} from 'react'

function Slider(props){
    const {pictures, title} = props

    const [activeIndex, setActiveIndex] = useState(0);

    let img = []
    pictures.map((myPicture, index)=>(
        img.push(<img src={myPicture} alt={title} key={index} />)
    ))

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    function skiderNavigation(){
        return(
            props.pictures.length === 1 ?
            'invisible' :
            ''
        )
    }

    return(
        <section className="container slider"> 
            <div className="row">
                <div className="col-12 slider-cont">

                    <button className={`slide-btn slide-btn--right ${skiderNavigation()}`}
                        onClick={()=>(
                            setActiveIndex((current) => {
                                const res = current === img.length - 1 ? 0 : current + 1
                                return res
                            })
                        )}>
                    </button>

                    <button className={`slide-btn slide-btn--left ${skiderNavigation()}`}
                        onClick={()=>(
                            setActiveIndex((current) => {
                                const res = current === 0 ? img.length - 1 : current - 1
                                return res
                            })
                        )}>
                    </button>

                    <div className='slide-number'>{`${activeIndex + 1} / ${img.length}` }</div>

                    <div className="slider-img slider-img-prev"
                            key={prevImgIndex}>
                        {img[prevImgIndex]}
                    </div>
                    <div className="slider-img"
                            key={activeIndex}>
                        {img[activeIndex]}
                    </div>
                    <div className="slider-img slider-img-next"
                            key={nextImgIndex}>
                        {img[nextImgIndex]}
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Slider