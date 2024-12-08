import logoFinal from '../assets/logo-final.svg';
//navegar route
import { useNavigate } from 'react-router-dom';
function LoginScreen() {
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    navigate('/home');
  }
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gradient-to-t from-[#5C9A76] to-[#DBE9D8] overflow-hidden">
      <div className="w-full max-w-sm p-6  rounded-lg" >
        <div className="flex flex-col items-center mb-8">
          <div className="w-40 h-40 mb-4">
            <img src={logoFinal} alt="" />
          </div>
          <h1 className="text-5xl font-bold text-green-700">ReThink</h1>
        </div>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Usuário
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              placeholder="Usuário"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
              placeholder="Senha"
            />
          </div>

          <div className="flex justify-between text-sm mb-6">
            <a href="#" className="text-green-700 hover:underline">
              Esqueceu a senha?
            </a>
            <a href="#" className="text-green-700 hover:underline">
              Criar conta
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400"
            onClick={(e) => handleLogin(e)}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
