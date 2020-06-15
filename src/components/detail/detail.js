import React, { useEffect, useState } from 'react';
import apicidades from '../../services/apicidades';
import './style.css';

export default function Detail() {
    const [City, setCity] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load(){
            const response = await apicidades.get(`?format=json&is_last=True&city=${search}&page=${page}`);
            setCity(response.data.results);

            setLoading(false);
        }
        load();
    }, [search, page]);
    function next(action){
        setPage(action === 'next' ? page + 1 : page - 1);
    }
    if(loading){
        return(
            <div className='loading'>
                <h1>Plase wait loading...</h1>
                <img src='https://image.flaticon.com/icons/svg/2718/2718069.svg' alt='loading' />
            </div>
        )
    }
    return(
        <div>
            <div className='box-city'>
                <div className='box-search'>
                    <label>Cidade</label>
                    <input type='text' placeholder='Ex: São Paulo' onChange={(event) => setSearch(event.target.value)} />
                </div>
                {City.map(item => (
                    <li >
                        <strong>Cidade: {item.city} </strong>
                        <strong>Confirmados: {item.confirmed} </strong>
                        <strong>Data: {item.date} </strong>
                        <strong>Índice de mortalidade: {item.death_rate} </strong>
                        <strong>Mortes: {item.deaths} </strong>
                        <strong>Estado: {item.state} </strong>
                    </li>
                ))}
                <div className='box-button'>
                    <button onClick={() => next('back')} >back</button>
                    <button onClick={() => next('next')} >Next</button>
                </div>
            </div>
        </div>
    );
}