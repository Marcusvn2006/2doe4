import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import Header from './components/Header'
import Footer from './components/Footer'
import CouponBar from './components/CouponBar'
import Home from './pages/Home'
import SaudeBrotas from './pages/SaudeBrotas'
import EquoterapiaBoituva from './pages/EquoterapiaBoituva'
import EsporteJau from './pages/EsporteJau'
import MeioAmbienteBocaina from './pages/MeioAmbienteBocaina'
import Aulas from './pages/Aulas'
import Manutencao from './pages/Manutencao'
import './App.css'

function Layout() {
  const { pathname } = useLocation()
  const isManutencao = pathname === '/manutencao'

  return (
    <>
      {!isManutencao && <Header />}
      {!isManutencao && <CouponBar />}
      <main className="overflow-x-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/saude" element={<SaudeBrotas />} />
          <Route path="/equoterapia" element={<EquoterapiaBoituva />} />
          <Route path="/esporte" element={<EsporteJau />} />
          <Route path="/meio-ambiente" element={<MeioAmbienteBocaina />} />
          <Route path="/aulas" element={<Aulas />} />
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
