import mapaLixo from "../assets/mapa-lixo.svg";
import iconLocal from "../assets/icon-local.svg";
import int from "../assets/int.svg";
import { useState } from "react";
import Modal from "react-modal";


export default function Testes() {
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
      {/* Existing code */}
      <button type="button" className="mr-2 text-sm p-2 bg-[#1A440E] rounded-xl mt-5 ml-2" onClick={openModal}>
        Veja aqui os horários
      </button>
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
  );
}