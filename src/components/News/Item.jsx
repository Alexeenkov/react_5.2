import React from 'react';


/**
 * Компонент пункта списка блока "Новости" в верхней части сайта
 */
const Item = ({ icon, title, link }) => {
    return (
        <li>
            <a href={link} title={title}>
                <img src={icon} alt={title} />
                <span>{ title }</span>
            </a>
        </li>
    );
}

export default Item;