import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='justify-center flex items-center h-screen text-amber-50'>
        <h1 className='m-50 p-10 bg-teal-900 border-red-100'>Vite + React</h1>
      </div>
    </>
  )
}

export default App
