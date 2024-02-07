import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeView from '../Views/Home/HomeView';
import PageAdmin from '../Views/PageAdmin/PageAdmin';
import menuView from '../Views/menuView/menuView';
import { Routes, Route } from 'react-router-dom';


const App = () => {

  // Usamos un estado para controlar que el botón de logout esté deshabilitado, o no
  const [isLogoutVisible, setIsLogoutVisible] = React.useState(true);

  return (
    <>
      <Header  isLogoutVisible={isLogoutVisible}/>
      
      <Routes>
         <Route path="/" element={<HomeView setIsLogoutVisible={setIsLogoutVisible} />} />
         <Route path="/PageAdmin" element={<PageAdmin />} />
         <Route path="/menuView" element={<menuView />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;