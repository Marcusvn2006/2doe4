import telaManutencao from '../assets/img/telamanutencao.png'
import telaManutencaoMobile from '../assets/img/telamanutencaomobile.png'

export default function Manutencao() {
  return (
    <>
      <div
        className="w-full bg-center bg-cover bg-no-repeat block sm:hidden"
        style={{ height: '100vh', backgroundImage: `url(${telaManutencaoMobile})` }}
      />
      <div
        className="w-full bg-center bg-cover bg-no-repeat hidden sm:block"
        style={{ height: '100vh', backgroundImage: `url(${telaManutencao})` }}
      />
    </>
  )
}
