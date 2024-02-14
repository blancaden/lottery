import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserList from '../UserList/UserList';
import HomeView from '../Views/Home/HomeView';
import PageAdmin from '../Views/PageAdmin/PageAdmin';
import Menu from '../Views/Menu/Menu';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import Lottery from '../Views/Lottery/Lottery';


const App = () => {

  // Usamos un estado para controlar que el botón de logout esté deshabilitado, o no
  const [isLogoutVisible, setIsLogoutVisible] = React.useState(true);
  const location = useLocation();
  const esVistaLottery = location.pathname === '/Lottery';
  return (
    <>
      <Header  isLogoutVisible={isLogoutVisible}/>
      
      <Routes>
         <Route path="/" element={<HomeView setIsLogoutVisible={setIsLogoutVisible} />} />
         <Route path="/PageAdmin" element={<PageAdmin />} />
         <Route path="/Menu" element={<Menu />} />
         <Route path="/LoginModal" element={<LoginModal />} />
         <Route path="/Lottery" element={<Lottery />} />
      </Routes>

      {!esVistaLottery && <Footer />}
    </>
  )
}

export default App;