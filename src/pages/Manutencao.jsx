import telaManutencao from '../assets/img/telamanutencao.png'

export default function Manutencao() {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat"
      style={{
        height: '100vh',
        backgroundImage: `url(${telaManutencao})`,
      }}
    />
  )
}
