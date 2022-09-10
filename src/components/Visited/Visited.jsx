import React from 'react';
import Item from './Item';

/**
 * Компонент пункта списка блока "Посещаемое"
 */
const Visited = ({ data, link }) => {
    return (
        <div className='visited'>
            <h3>
                <a href={link}>
                    Посещаемое
                </a>
            </h3>
            <ul>
                {data.map(item => <Item key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        link={item.link}/>)}
            </ul>
        </div>
    );
}

export default Visited;