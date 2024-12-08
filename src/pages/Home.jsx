import blueLixo from "../assets/azul-lixo.svg";
import blackLixo from "../assets/preto-lixo.svg";
import greenLixo from "../assets/verde-lixo.svg";
import yellowLixo from "../assets/amarelo-lixo.svg";
import brownLixo from "../assets/marrom-lixo.svg";
import redLixo from "../assets/vermelho-lixo.svg";

function Home() {
  const categorias = [
    {
      id: 1,
      image: blueLixo,
      description: "Plásticos, papéis, vidros, e metais.",
    },
    {
      id: 2,
      image: blackLixo,
      description: "Papel higiênico, fraldas descartáveis, resíduos de varrição.",
    },
    {
      id: 3,
      image: greenLixo,
      description: "Garrafas, potes, frascos de vidro.",
    },
    {
      id: 4,
      image: yellowLixo,
      description: "Latas de alumínio, latas de aço, peças metálicas.",
    },
    {
      id: 5,
      image: brownLixo,
      description: "Restos de comida, cascas de frutas e vegetais.",
    },
    {
      id: 6,
      image: redLixo,
      description: "Pilhas, baterias, medicamentos vencidos, produtos químicos.",
    },
  ];

  return (
    <div className='flex justify-center items-center flex-col bg-gradient-to-t from-[#14AE5C] via-[#DBE9D8] h-screen'>
      <div className='flex justify-center items-center flex-col p-2 mt-6'>
        <div>
          <h1 className='text-[#88AC88] text-4xl p-2 text-center font-bold'>Descubra onde descartar corretamente o seu lixo</h1>
        </div>
      </div>
      <div className="w-4/5 mt-4 mb-6 flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Digite o lixo que deseja descartar aqui"
          className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 text-gray-600 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="w-4/5 space-y-4">
        {categorias.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-300 shadow cursor-pointer"
          >
            <img
              src={item.image}
              alt="Ícone de descarte"
              className="w-10 h-10 mr-4"
            />
            <p className="text-gray-700 font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

