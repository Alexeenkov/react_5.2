import React from 'react';
import Item from './Item';

/**
 * Компонент меню над поисковой строкой
 */
const Menu = ({ data }) => {

    return (
        <ul className='menu'>
            {data.map(item => <Item title={item.title} link={item.link} key={item.id} />)}
        </ul>
    );
}

export default Menu;