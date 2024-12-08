import sinho from '../assets/Doorbell.svg';
import PropTypes from 'prop-types';
import menuIconFinal from '../assets/menu-icon.svg';
import logoMini from '../assets/logo-mini.svg';
import { useState } from 'react';
export default function Menu({ setOpenMenu }) {
    const [showNotification, setShowNotification] = useState(false);

    function handleNotification() {
        setShowNotification(!showNotification);
    }

    return (
        <div className="w-full bg-[#1A440E] flex justify-between p-5">
            <img src={menuIconFinal} className="w-16 cursor-pointer" onClick={() => setOpenMenu(true)} />
            <img src={logoMini} className="w-16" />
            <img src={sinho} className="w-8 cursor-pointer" onClick={handleNotification} />
            {showNotification && (
                <div className="bg-white p-4 rounded-lg shadow-lg mt-2 absolute right-0 flex flex-col">
                    <div className='flex justify-between'>
                        <h2 className="font-bold">Notificações</h2>
                        <p onClick={handleNotification} className='cursor-pointer'>X</p>
                    </div>

                    <p>Você não tem novas notificações.</p>
                </div>
            )}
        </div>
    );
}

Menu.propTypes = {
    setOpenMenu: PropTypes.func,
};
