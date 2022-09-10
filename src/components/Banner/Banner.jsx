import React from 'react';

/**
 * Компонент с баннером
 */
const Banner = ({ data }) => {
    const { img, link } = data;

    return (
        <div className='banner'>
            <a href={ link }>
                <img src={ img } alt="Баннер" />
            </a>
        </div>
    );
}

export default Banner;