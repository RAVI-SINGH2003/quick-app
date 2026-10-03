import { useEffect, useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch(`${API_URL}/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to reach backend'))
  }, [])

  return (
    <section id="center">
      <h1>Ravi's Backend says:</h1>
      <p>{message}</p>
    </section>
  )
}

export default App
