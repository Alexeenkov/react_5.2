import React from 'react';

/**
 * Компонент пункта списка блока "Телепрограмма"
 */
const Item = ({ time, title, link, channel }) => {
    return (
        <li>
            <a href={link}>
                <span>{time}</span>
                <span>{title}</span>
                <span>{channel}</span>
            </a>
        </li>
    );
}

export default Item;