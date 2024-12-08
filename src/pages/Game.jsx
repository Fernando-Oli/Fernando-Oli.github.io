import { useEffect, useState } from "react";
import lixos from '../utils/game.mock.json';
const GamificacaoColetaSeletiva = () => {
  const [score, setScore] = useState(0);
  const [allLixos, setAllLixos] = useState([]);
  const [lixoExibido, setExLixo] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [win, setWin] = useState(false);

  const randomizeAndSelectedOne = () => {
    const randomIndex = Math.floor(Math.random() * allLixos.length);
    setExLixo(lixos[randomIndex]);
  };
  console.log(allLixos[1]);
  useEffect(() => {
    setAllLixos(lixos);
    randomizeAndSelectedOne();
  }, []);
  // Lixos e tipos correspondentes

  useEffect(() => {
    if (score == 100) {
      alert("Parabéns! Você concluiu o jogo!");
      setFeedback("");
      setScore(0);
      setWin(true);
    }
  }, [score]);
  const bins = [
    { type: "Papel", color: "bg-blue-500", label: "Papel e Papelão", cor: "Azul", colorText: "white" },
    { type: "Plástico", color: "bg-red-500", label: "Plástico", cor: "Vermelho", colorText: "white" },
    { type: "Vidro", color: "bg-green-500", label: "Vidro" , cor: "Verde", colorText: "white"   },
    { type: "Metal", color: "bg-yellow-500", label: "Metal", cor: "Amarelo", colorText: "white"   },
    { type: "Orgânico", color: "bg-amber-950", label: "Orgânico", cor: "Marrom", colorText: "white"   },
    { type: "Ambulatorial", color: "bg-swhite", label: "Resíduos de Saúde", cor: "Branco", colorText: "slate"   },
    { type: "Madeira", color: "bg-black", label: "Madeira", cor: "Preto", colorText: "white"   },
    { type: "Resíduos Perigosos", color: "bg-orange-500", label: "Resíduos Perigosos", cor: "Laranja", colorText: "white"   },
    { type: "Lixo radioativo", color: "bg-purple-500", label: "Lixo radioativo", cor: "Roxo", colorText: "white"   },
    { type: "Lixo não reciclável", color: "bg-slate-500", label: "Lixo não reciclável", cor: "Cinza", colorText: "white"   },
  ];

  const handleClassify = (selectedBin) => {
    if (lixoExibido.local === selectedBin) {
      setScore(score + 10);
      setFeedback("✅ Parabéns! Classificação correta.");
      randomizeAndSelectedOne();
    } else {
      setFeedback("❌ Ops! Classificação incorreta.");
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#14AE5C] via-[#DBE9D8] flex flex-col items-center py-10 px-4 ">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-6 text-green-600">
        Jogo de Coleta Seletiva
      </h1>

      {/* Barra de Progresso */}
      <div className="w-full max-w-lg bg-gray-300 rounded-full h-6 mb-6">
        <div
          className="bg-green-500 h-6 rounded-full text-white text-center"
          style={{ width: `${score}%` }}
        >
          {score}%
        </div>
      </div>
      <div className="flex m-10 justify-center w-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold mr-20">Joque no lixo: </h1>
          </div>
      <div
            className={`p-4 rounded-lg text-black font-semibold shadow-lg border-4`}
          >
            {lixoExibido.item}
          </div>
      </div>

      {/* Coletores de Lixo */}
      <div className="flex flex-wrap gap-4 justify-center">
        {bins.map((bin) => (
          <button
            key={bin.type}
            onClick={() => handleClassify(bin.cor)}
            className={`w-32 h-32 flex flex-col items-center justify-center rounded-lg shadow-2xl font-semibold ${bin.color}`}
          >
            <span className={`drop-shadow-xl font-light text-${bin.colorText}`}>{bin.label}</span>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {feedback && (
        <div
          className={`mt-4 text-lg font-semibold ${feedback.includes("Parabéns") ? "text-green-600" : "text-red-500"
            }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default GamificacaoColetaSeletiva;
