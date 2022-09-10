import React from 'react';

/**
 * Компонент пункта списка блока "Курс активов"
 */
const Item = ({ name, market, cost, difference, link }) => {
    return (
        <li>
            <a href={link} title={name}>
                <span>{name}</span>
                <span>{market}</span>
                <span>{cost}</span>
                <span>{difference}</span>
            </a>
        </li>
    );
}

export default Item;