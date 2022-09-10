import React from 'react';

/**
 * Компонент подписи под поисковой строкой с примером запроса
 */
const Slogan = ({ slogan, example, link }) => {
    return (
        <div className='slogan'>
            {slogan}
            <a href={link}>
                {example}
            </a>
        </div>
    );
}

export default Slogan;