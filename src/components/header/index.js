import React, { Component } from  'react';
import './style.css';

export default class Header extends Component {
    render(){
        return(
            <div className='box-header'>
                <h1>Dados da covid-19 município</h1>
                <span>
                    Fonte: Secretarias de Saúde das Unidades Federativas,
                    dados tratados por Álvaro Justen e colaboradores/<a href='https://blog.brasil.io/' target='black' >Brasil.IO</a> 
                </span>
            </div>
        );
    }
}