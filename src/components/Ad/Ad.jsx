import React from 'react';

/**
 * Компонент с рекламным блоком
 */
const Ad = ({ data }) => {
    const {img, title, link, description} = data;

    return (
        <div className='ad'>
            <a href={link} title={title}>
                <img src={img} alt={title} />
                <h5>{title}</h5>
                <span>{description}</span>
            </a>
        </div>
    );
}

export default Ad;