import React from 'react';

import Date from './Date';
import Tabs from './Tabs';
import Item from './Item';

/**
 * Компонент блока "Новости" в верхней части сайта
 */
const News = ({ data }) => {
    return (
        <>
            <div className='news-top'>
                <Tabs>
                    <ul className='news-tabs'>
                        <li>
                            <a href="#0">Сейчас в СМИ</a>
                        </li>
                        <li>
                            <a href="#0">В Германии</a>
                        </li>
                        <li>
                            <a href="#0">Рекомендуем</a>
                        </li>
                    </ul>
                </Tabs>
                <Date />
            </div>
            <ul className='news-list'>
                {data.map(item => <Item key={item.id} icon={item.icon} title={item.title} link={item.link} />)}
            </ul>
        </>
    );
}

export default News;