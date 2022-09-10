import React from 'react';

/**
 * Компонент с блоком "Карта Германии"
 */
const Germany = ({ data }) => {
    const { title, link, item } = data;
    return (
        <div className='germany'>
            <a href={link}>
                <h3>{title}</h3>
                <span>{item}</span>
            </a>
        </div>
    );
}

export default Germany;