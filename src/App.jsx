// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  return (
    
    <div className="font-sans min-h-screen bg-gray-100">
      <Header/>
      <Home/>
    </div>
  );
}

export default App
