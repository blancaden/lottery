
import React from 'react'
import { Link } from 'react-router-dom';
import '../Home/HomeView.css'

const HomeView = ({ setIsLogoutVisible }) => {
    // Cuando se monta la vista Home, oculta el botón de logout
    React.useEffect(() => {
        setIsLogoutVisible(false);
        // Asegúrate de mostrar el botón de logout cuando se desmonte la vista Home
        return () => setIsLogoutVisible(true);
    }, [setIsLogoutVisible]);

    return (
        <>

            <section className="main">

                <section className="school-name-main" >
                    <div className="title-image" ><img src="img/title-main.png" alt="santa-tecla" /></div>
                    <div className="person-list"><img src="img/person-list.svg" alt="person-list" />
                        <p>Administrador de listas para docentes</p>
                    </div>
                </section>

                <section class="college" >
                    <img src="img/image 4.svg" alt="college-photo" />
                </section>

                <section className="login" >

                    <strong>
                        <Link to= "/PageAdmin" className="button-login" >Login</Link>
                    </strong>

                </section>

            </section >

        </>
    )
}

export default HomeView