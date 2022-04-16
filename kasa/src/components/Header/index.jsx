import { Link } from 'react-router-dom'
import Logo from '../../assets/images/kasa_logo.svg'

function Header() {

    const menu = [
        {
            title: 'Accueil',
            link: '/'
        }, 
        {
            title: 'A Propos',
            link: '/a-propos'
        }
    ]

    return(
        <header className="container">
            <div className="row header">
                <div className="col-4">
                    <Link to="/">
                        <img className='logo' src={Logo} alt='Kasa logo' />
                    </Link>
                </div>
                <div className="col-8">
                    <nav>
                    <ul>
                        {menu.map((item, index) => (
                            <li key={`${index}`}>
                                <Link to={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                        )}
                    </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header