import React from 'react';
import Item from './Item';
import Button from './Button';

/**
 * Компонент блока "Телепрограмма" в нижней части сайта
 */
const Teleprogram = ({ data }) => {
    return (
        <div className='teleprogram'>
            <div>
                <h3>Телепрограмма</h3>
                <Button />
            </div>
            <ul>
                {data.map(item => <Item key={item.id}
                                        time={item.time}
                                        title={item.title}
                                        link={item.link}
                                        channel={item.channel}/>
                )}
            </ul>
        </div>
    );
}

export default Teleprogram;