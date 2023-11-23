import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { Navbar, Footer, Header } from './components';
import {
  Home,
  Error,
  Products,
  SingleProduct,
  About,
  AuthPage,
  Favorites,
} from './pages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  return (
    <UserProvider>
      <BrowserRouter>
        <Header
          isLoggedIn={isLoggedIn}
          username={username}
          onLogout={handleLogin}
        />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/auth' element={<AuthPage onLogin={handleLogin} />} />
          <Route path='/favorites' element={<Favorites />} />

          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
