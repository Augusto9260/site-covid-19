import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function State() {
    const [State, setState] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load(){
            const response = await api.get(`?format=json&is_last=True&place_type=state`);
            setState(response.data.results);
            setLoading(false);
        }
        load();
    }, []);
    if(loading){
        return(
            <div className='loading'>
                <h1>Plase wait loading...</h1>
                <img src='https://image.flaticon.com/icons/svg/2718/2718069.svg' alt='Carregando' />
            </div>
        )
    }
    return(
        <div>
            <div className='box-state'>
                <h1>Estados</h1>
                {State.map(item => (
                    <li key={Math.random()} >
                        <strong>Confirmados: {item.confirmed} </strong>
                        <strong>Data: {item.date} </strong>
                        <strong>Índice de mortalidade: {item.death_rate} </strong>
                        <strong>Mortes: {item.deaths} </strong>
                        <strong>Estado: {item.state} </strong>
                        <Link to={`/municipio/${item.state}`}>Detalhes</Link>
                    </li>
                ))}
            </div>
        </div>
    );
}