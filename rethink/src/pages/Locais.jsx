import mapaLixo from "../assets/mapa-lixo.svg";
import iconLocal from "../assets/icon-local.svg";
import int from "../assets/int.svg";
import { useState } from "react";
import Modal from "react-modal";

export default function Locais() {
  const [legenda, setLegenda] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleInfo() {
    setLegenda(!legenda);
  }
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div
      className="
        w-full
        h-screen
        flex
        flex-col
        bg-gradient-to-t
        from-[#14AE5C]
        via-[#DBE9D8]
        items-center
      "
    >
      <img
        src={mapaLixo}
        alt="Mapa de locais de descarte"
        className="w-full h-64 object-cover"
      />
      <div className="flex justify-between items-start w-96 text-[#88AC88] mt-2">
        <div className="flex m-2">
          <span className="p-2 w-6 h-6 bg-black rounded-sm mr-2"></span>
          <p>Informais</p>
        </div>
        <div className="flex m-2">
          <span className="p-2 w-6 h-6 bg-red-700 rounded-sm mr-2"></span>
          <p>Formais</p>
        </div>
      </div>
      {legenda && (
        <div>
          <div id="detalhes-da-inf" className="flex flex-col bg-[#88AC88]/50 m-10 rounded-2xl p-4">
            <div className="flex flex-col m-2 justify-center">
              <div className="flex justify-start mb-4 w-full">
                <span className="p-2 w-6 h-6 bg-black rounded-sm mr-2"></span>
                <p>Informais</p>
                <h4 className="ml-64 cursor-pointer" onClick={handleInfo}>X</h4>
              </div>
              <p>Pontos onde o caminhão de coleta se desloca para o
                recolhimento dos lixos. </p>
            </div>
            <div className="flex flex-col m-2">
              <div className="flex justify-start mb-4">
                <span className="p-2 w-6 h-6 bg-[#EB3223] rounded-sm mr-2"></span>
                <p className="mr-2">Formais</p>
              </div>
              <p>Pontos onde pessoas ambulantes se deslocam para o
                recolhimento dos lixos de forma autônoma. </p>
            </div>
          </div>
          <div className="p-5  m-5 rounded-3xl text-white bg-[#1A440E]">
            <p>Locais atuais que possuem este tipo de coleta.</p>
          </div>
        </div>
      )}
      <div>
        <div className="flex">
          <div className="bg-[#88AC88] rounded-3xl text-white p-2 mt-4">
            <div className="flex p-2 pb-0 m-2 justify-center">
              <img src={iconLocal} />
              <h1 className="font-bold ml-2 w-full">Brasil Park Shopping </h1>
              <span className=" ml-2 p-2 w-6 h-6 bg-black rounded-sm justify-self-end"></span>
            </div>
            <p className="p-0 m-0 text-sm mr-2 ml-2">Av. Brasil Norte, 505 - Centro, Anápolis - GO, 75113-570</p>
            <p className="text-sm mr-2 ml-2"><span className="font-bold">Tipos: </span>Plástico, Metal e Papel</p>
            <button type="button" className="mr-2 text-sm p-2 bg-[#1A440E] rounded-xl mt-5 ml-2" onClick={openModal}>Veja aqui os horários</button>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#88AC88] rounded-3xl text-white p-2 mt-4">
            <div className="flex p-2 pb-0 m-2 justify-center">
              <img src={iconLocal} />
              <h1 className="font-bold ml-2 w-full">Brasil Park Shopping </h1>
              <span className="p-2 w-6 h-6 bg-red-700 rounded-sm"></span>
            </div>
            <p className="p-0 m-0 text-sm mr-2 ml-2">Av. Brasil Norte, 505 - Centro, Anápolis - GO, 75113-570</p>
            <p className="text-sm mr-2 ml-2"><span className="font-bold">Tipos: </span>Plástico, Metal e Papel</p>
            <button type="button" className="mr-2 text-sm p-2 bg-[#1A440E] rounded-xl mt-5 ml-2" onClick={openModal}>Veja aqui os horários</button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex m-2 p-2 items-center mt-6 cursor-pointer" onClick={handleInfo}>
          <img src={int} alt="" className="mr-2" />
          <p className="font-bold text-[#1A440E]">Ver informações da Legenda</p>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Horários de Funcionamento"
        className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mt-20"
      >
        <h2 className="text-xl font-bold mb-4">Horários de Funcionamento</h2>
        <ul>
          <li>Segunda-feira: 08:00 - 18:00</li>
          <li>Terça-feira: 08:00 - 18:00</li>
          <li>Quarta-feira: 08:00 - 18:00</li>
          <li>Quinta-feira: 08:00 - 18:00</li>
          <li>Sexta-feira: 08:00 - 18:00</li>
          <li>Sábado: 08:00 - 12:00</li>
          <li>Domingo: Fechado</li>
        </ul>
        <button onClick={closeModal} className="mt-4 bg-[#1A440E] text-white p-2 rounded">
          Fechar
        </button>
      </Modal>
    </div>
  )
}