import React from 'react'
import { Link } from 'react-router-dom'
function Error() {

    return(
        <section className='container error_page'>
            <div className='row'>
                <div className='col-12 center-page'>
                    <h1 className='error-404'>404</h1>
                    <div className='error-text'>Oups! La page que vous demandez n'existe pas.</div>
                    <Link to='/' className='error-link'>Retourner sur la page d'accueil</Link>
                </div>
            </div>
            
        </section>
    )
}
export default Error