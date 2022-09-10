import React from 'react';

/**
 * Компонент пункта списка блока "Меню"
 */
const Menu = ({ title, link }) => {

    return (
        <li>
            <a href={link}>
                {title}
            </a>
        </li>
    );
}

export default Menu;