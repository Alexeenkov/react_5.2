import React from 'react';

/**
 * Компонент пункта списка блока "Посещаемое"
 */
const Item = ({ title, description, link }) => {
    return (
        <li>
            <a href={link}>
                <span>{title} — </span> {description}
            </a>
        </li>
    );
}

export default Item;