import React from 'react';

/**
 * Компонент с блоком "Погода" в нижней части сайта
 */
const Weather = ({ data }) => {
    const { icon, value, morning, day, link } = data;

    return (
        <a className='weather' href={link}>
            <h3>Погода</h3>
            <div className='weather__info'>
                <div className='weather__icon'>
                    <img src={icon} alt="" />
                </div>
                <div className='weather__now'>{value}</div>
                <div className='weather__container'>
                    <div className='weather__morning'>
                        <span>Утром</span>
                        {morning},
                    </div>
                    <div className='weather__day'>
                        <span>Утром</span>
                        {day}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Weather;