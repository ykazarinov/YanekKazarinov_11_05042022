import RedStar from '../../assets/images/red_star.svg'
import GreyStar from '../../assets/images/grey_star.svg'

function Rating(props){
    const{rating} = props

    let content = [];
    if(props.rating < 5){
        for (let i = 0; i < props.rating; i++) {
            content.push(<img key={`key${i}`} src={RedStar} alt='star'/>);
        }
        for (let i = props.rating; i < 5 ; i++) {
            content.push(<img key={`key${i}`} src={GreyStar} alt='star'/>);
        }

    }else{
        for (let i = 0; i < props.rating; i++) {
            content.push(<img key={`key${i}`} src={RedStar} alt='star'/>);
        }
    }

    return(
        <div className="rating">
            {content}
        </div>
    )
}

export default Rating