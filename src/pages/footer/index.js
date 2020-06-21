import React from 'react';
import './styles.css';

export default function Footer() {
    return(
        <div className='box-footer'>
            <span>Copyright © 2020 | José Augusto</span>
            <div>
                <a href='https://github.com/augusto9260' target='black'>
                    <img src='https://www.flaticon.com/premium-icon/icons/svg/2504/2504911.svg' alt='Github' />
                </a>
                <a href='https://api.whatsapp.com/send?text=Casos da covid-19 aumenta no Brasil https://covid-19-333ec.web.app' target='black'>
                    <img src='https://www.flaticon.com/premium-icon/icons/svg/2504/2504957.svg' alt='Whatsapp' />
                </a>
            </div>
        </div>
    );
}