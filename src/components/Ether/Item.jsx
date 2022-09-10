import React from 'react';

/**
 * Компонент пункта списка блока "Эфир"
 */
const Item = ({ title, link, name }) => {
    return (
        <li>
            <a href={link}>
                <span>{title}</span>
                <span>{name}</span>
            </a>
        </li>
    );
}

export default Item;