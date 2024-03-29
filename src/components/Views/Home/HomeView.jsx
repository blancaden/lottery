
import React from 'react'
import { Link } from 'react-router-dom';
import '../Home/HomeView.css'
import { Button, Carousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import LoginModal from '../../LoginModal/LoginModal';

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
                    <div className="title-image"><img src="img/title-main.png" alt="santa-tecla" /></div>
                    <div className="margaret-quote"><img src="img/margaret-hamilton.png" alt="margaret-hamilton" />
                        <div class="quote"><h3>«No tengas miedo de correr riesgos y probar cosas nuevas, así es como se logra avanzar.»</h3>
                            <p>Margaret Hamilton</p>
                        </div>
                    </div>
                </section>

                <section className="college" >
                    <img src="img/image 4.svg" alt="college-photo" />
                </section>

                <LoginModal />

            </section >

        </>
    )
}

export default HomeView