import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Messages from './components/Messages';
import News from './components/News';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper container">
      <Header/>
      <Sidebar/>
      <main className={`content main`}>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
