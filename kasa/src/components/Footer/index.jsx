import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/images/kasa_logo_footer.svg'

function Footer() {
    let now = new Date();
    const copyrightText = `© ${now.getFullYear()} Kasa. All rights reserved`
    return(
        <footer className='container-fluid'>
            <div className='row'>
                <div className='col-12 copyright_container'>
                    <Link to='/'>
                        <img src={LogoFooter} alt='Kasa footer logo' className='logo_footer' />
                    </Link>
                    <span>
                        {copyrightText}
                    </span>
                </div>
            </div>
        </footer>
    )
   

}
export default Footer