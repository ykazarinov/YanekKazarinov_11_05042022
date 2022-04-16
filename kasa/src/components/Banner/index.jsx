import styled from 'styled-components'

    const BannerImg = styled.div`
        background-image: ${({ picture }) => (`url('${picture}')`)};
    `

function Banner({title, picture}) {

    return(
        <section className="container">
            <div className="row banner_row">
                <BannerImg picture={picture} className="col-12 banner">
                    <div className='filter'>
                        {title !== '' ? <span className='bannetTitle'>{title}</span> : ''}
                    </div>
                </BannerImg>
            </div>

        </section>
    )
    
}

export default Banner