import './App.css'
import{ useState , useEffect, use } from 'react'

function App() {

  return (
    <>
      <div className='nav-container vh-100'>
        <nav className='bg-teal-900 p-4'>
          <ul className='flex space-x-4 justify-center items-center'>
            <li><a href="#" className='text-white'>Home</a></li>
            <li><a href="#" className='text-white'>About</a></li>
            <li><a href="#" className='text-white'>Contact</a></li>
          </ul>
        </nav>
        <h1 className='text-2xl font-bold text-center mt-4'>Welcome to MicroLearnTracker</h1>
      </div>
    </>
  )
}

export default App
