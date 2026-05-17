import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Obat from './pages/Obat'
import Konsultasi from './pages/Konsultasi'
import Pengantaran from './pages/Pengantaran'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'obat':
        return <Obat />
      case 'konsultasi':
        return <Konsultasi />
      case 'pengantaran':
        return <Pengantaran />
      default:
        return <Home />
    }
  }

  return (
    <div className="app-container">
      <Navbar setActivePage={setActivePage} />
      <div className="main-content">{renderPage()}</div>
    </div>
  )
}

export default App