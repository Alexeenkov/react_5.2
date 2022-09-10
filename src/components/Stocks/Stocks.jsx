import React from 'react';
import Item from './Item';

/**
 * Компонент блока с курсом активов
 */
const Stocks = ({ data }) => {
    return (
        <div className='stocks-wrapper'>
            <ul className='stocks-list'>
                {data.map(item => {
                    return <Item key={item.id}
                                name={item.name}
                                market={item.market}
                                cost={item.cost}
                                difference={item.difference}
                                link={item.link} />
                })}
            </ul>
            <button>...</button>
        </div>
    );
}

export default Stocks;