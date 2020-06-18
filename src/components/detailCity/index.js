import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function DetailCity() {
    const { id } = useParams('')
    const [search, setSearch] = useState(id);
    const [searchCity, setSearchCity] = useState('');
    const [loading, setLoading] = useState(true);
    const convert = Object.values(search);

    useEffect(() => {
        async function load(){
            const response = await api.get(`?format=json&is_last=True&state=${search}&city=${searchCity}`)

            setSearch(response.data.results);
            setLoading(false);
        }
        load();
    }, [searchCity]);
    if(loading){
        return(
            <div className='loading-city'>
                <h1>Plase wait loading...</h1>
                <img src='https://image.flaticon.com/icons/svg/2718/2718069.svg' alt='Carregando' />
            </div>
        )
    }
    return(
        <div>
            <div className='box-city'>
                <h1>Cidades {id} </h1>
                <div className='box-searchCity'>
                    <label>Pesquisar</label>
                    <input type='text' placeholder='Cidade'
                    onChange={(event) => setSearchCity(event.target.value)} />
                </div>
                {convert.map(item => (
                    <li key={Math.random()} >
                        <strong>Cidade: {item.city} </strong>
                        <strong>Confirmados: {item.confirmed} </strong>
                        <strong>Data: {item.date} </strong>
                        <strong>Índice de mortalidade: {item.death_rate} </strong>
                        <strong>Mortes: {item.deaths} </strong>
                        <strong>Estado: {item.state} </strong>
                    </li>
                ))}
            </div>
        </div>
    );
}