import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Messages from './components/Messages';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper container">
      <Header/>
      <Sidebar/>
      <main className={`content main`}>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
