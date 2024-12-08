import { useNavigate } from 'react-router-dom';

import endereco from '../assets/endereco.svg';
import ajuda from '../assets/duvida.svg';
import livro from '../assets/livro.svg';
import reciclar from '../assets/reciclar.svg';
import menuIconFinal from '../assets/menu-icon.svg';

export default function MenuLateral(props) {
    const navigate = useNavigate();
    function handleNav(where) {
        props.setOpen(false);
        navigate(where);
    }
    return(
        <div className="w-full h-screen absolute z-50 flex text-white p-10 pl-0 pt-0 overflow-hidden pr-0">
            <img src={menuIconFinal} className='w-16 cursor-pointer absolute p-2' onClick={() => props.setOpen(false)}/>
            <div className="flex w-[80vh] bg-gradient-to-b from-[#1A440E] to-[#41AA23] h-screen flex-col items-start p-10 pt-20 rounded-lg">
                
                <div className='flex'> 
                    <img src={endereco} className="w-12 cursor-pointer"/>
                    <span className="p-6 cursor-pointer" onClick={() => handleNav('/locais')}>Ver Locais de Coleta</span>
                </div>
                <div className='flex'>
                    <img src={ajuda} className="w-12 cursor-pointer"/>
                    <span className="p-6 cursor-pointer" onClick={() => handleNav('/home')}>Onde eu descarto meu lixo?</span>
                </div>
                <div className='flex'>
                    <img src={livro} className="w-12 cursor-pointer"/>
                    <span className="p-6 cursor-pointer" onClick={() => handleNav('/game')}>Aprenda a separar seu lixo</span>
                </div>
                {/* <div className='flex'>
                    <img src={reciclar} className="w-12 cursor-pointer"/>
                    <span className="p-6 cursor-pointer" onClick={() => handleNav('/home')}>Quero Reciclar</span>
                </div> */}
            </div>
            <div className="w-[20vh] h-screen blur-sm bg-white/80">
            </div >
        </div>
    )
}