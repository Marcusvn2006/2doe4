import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SaudeBrotas from './pages/SaudeBrotas'
import EquoterapiaBoituva from './pages/EquoterapiaBoituva'
import EsporteJau from './pages/EsporteJau'
import MeioAmbienteBocaina from './pages/MeioAmbienteBocaina'
import Manutencao from './pages/Manutencao'
import './App.css'

function Layout() {
  const { pathname } = useLocation()
  const isManutencao = pathname === '/'

  return (
    <>
      {!isManutencao && <Header />}
      <main className="overflow-x-clip">
        <Routes>
          <Route path="/" element={<Manutencao />} />
          <Route path="/home" element={<Home />} />
          <Route path="/saude-brotas" element={<SaudeBrotas />} />
          <Route path="/equoterapia-boituva" element={<EquoterapiaBoituva />} />
          <Route path="/esporte-jau" element={<EsporteJau />} />
          <Route path="/meio-ambiente-bocaina" element={<MeioAmbienteBocaina />} />
        </Routes>
      </main>
      {!isManutencao && <Footer />}
      <Toaster position="bottom-right" richColors closeButton />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
