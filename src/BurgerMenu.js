import React , {useState}from 'react';
import './style.scss';

const BurgerMenu=()=>{
    const[status,setStatus] = useState('close');
    return(
        <nav>
            <div className="Burger" role="button" onClick={()=>setStatus(status ==='open'?'close':'open')}>
                <i className={status}></i>
                <i className={status}></i>
                <i className={status}></i>
            </div>
        </nav>
    );
}

export default BurgerMenu;