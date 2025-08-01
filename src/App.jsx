import React from 'react'
import './App.css'
import Background from './components/Background'

function App() {
  return (
    <div className='bg-zinc-800 w-full h-screen relative'>
      <Background/>
      <div className='fixed top-0 left-0 z-[3] w-full h-full'></div>
    </div>
  )
}

export default App