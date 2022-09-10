import React from 'react';

/**
 * Компонент табов (кнопок переключения) блока "Новости" в верхней части сайта
 */
const Tabs = ({ children }) => {
    return (
        <ul className='news-tabs'>
            {children}
        </ul>
    );
}

export default Tabs;