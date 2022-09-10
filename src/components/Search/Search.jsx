import React from 'react';
import Slogan from './Slogan';

/**
 * Компонент блока поисковой сроки с логотипом
 */
const Search = ({ data }) => {
    return (
        <div className='container'>
            <form action='#0'>
                <input type='text' />
                <button type='buttom'>Найти</button>
            </form>
            <Slogan slogan={data.slogan} example={data.example} link={data.link} />
        </div>
    );
}

export default Search;