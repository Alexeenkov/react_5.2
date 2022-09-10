import React from 'react';
import Item from './Item';

/**
 * Компонент с блоком "Эфир"
 */
const Ether = ({ data }) => {

    return (
        <div className='ether'>
            <h3>Эфир</h3>
            <ul>
                {data.map(item => <Item key={item.id} title={item.title} name={item.name} link={item.link} />)}
            </ul>
        </div>
    );
}

export default Ether;