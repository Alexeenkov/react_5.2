import { v4 as uuidv4 } from 'uuid';

const data = {
    'news': [
        {
            'icon': 'https://i.ytimg.com/vi/stz1ZyE9JMo/mqdefault.jpg',
            'title': 'Путин упростил получение автомобильных номеров',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'icon': 'https://w7.pngwing.com/pngs/1020/199/png-transparent-round-green-illustration-computer-icons-green-circle-icon-leaf-grass-sphere-thumbnail.png',
            'title': 'Какие-то странные эти новости',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'icon': 'https://i.ytimg.com/vi/stz1ZyE9JMo/mqdefault.jpg',
            'title': 'Плюшевые кролики сбежали от начальника',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'icon': 'https://w7.pngwing.com/pngs/1020/199/png-transparent-round-green-illustration-computer-icons-green-circle-icon-leaf-grass-sphere-thumbnail.png',
            'title': 'Я календарь переверну и снова третье сентября',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'icon': 'https://i.ytimg.com/vi/stz1ZyE9JMo/mqdefault.jpg',
            'title': 'Биткоин падает. Кто не падает, тот не взлетает',
            'link': '#0',
            'id': uuidv4(),
        },
    ],
    'stocks': [
        {
            'name': 'USD',
            'market': 'MOEX',
            'cost': '63,52',
            'difference': '+0,09',
            'id': uuidv4(),
            'link': '#0',
        },
        {
            'name': 'EUR',
            'market': 'MOEX',
            'cost': '70,86',
            'difference': '+0,14',
            'id': uuidv4(),
            'link': '#0',
        },
        {
            'name': 'НЕФТЬ',
            'market': 'MOEX',
            'cost': '63,90',
            'difference': '+1,63%',
            'id': uuidv4(),
            'link': '#0',
        },
    ],
    'ad': {
        'img': 'https://avatanplus.com/files/resources/original/5b37b74f82f3416451a40eb0.png',
        'title': 'Это космос!',
        'description': 'Смотрите на Яндексе и запоминайте',
        'link': '#0',
    },
    'menu': [
        {
            'title': 'Видео',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Картинки',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Новости',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Карты',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Маркет',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Переводчик',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Эфир',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'ещё',
            'link': '#0',
            'id': uuidv4(),
        },
    ],
    'logo': 'https://academy.kz/media/k2/items/cache/e1e1ad60f07c4aa3ccbcb2973e9d7007_S.jpg',
    'search': {
        'slogan': 'Найдется всё. Например,',
        'example': 'фаза луны сегодня',
        'link': '#0',
    },
    'banner': {
        'link': '#0',
        'img': 'http://www.rgi-ltd.com/images/banner-locate-rgi.jpg',
    },
    'weather': {
        'icon': 'https://static.torontovka.com/icons/weather/299.svg',
        'value': '+17°',
        'morning': '+17',
        'day': '+20',
        'link': '#0',
    },
    'visited': [
        {
            'title': 'Недвижимость',
            'description': 'о сталинках',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Маркет',
            'description': 'люстры и светильники',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Авто.ру',
            'description': 'привод 4х4 до 500 000',
            'link': '#0',
            'id': uuidv4(),
        },
    ],
    'visitedLink': '#0',
    'map': {
        'title': 'Карта Германии',
        'link': '#0',
        'item': 'Расписания',
    },
    'teleprogram': [
        {
            'time': '02:00',
            'title': 'ТНТ. Best',
            'link': '#0',
            'channel': 'ТНТ International',
            'id': uuidv4(),
        },
        {
            'time': '02:15',
            'title': 'Джинглики',
            'link': '#0',
            'channel': 'Карусель INT',
            'id': uuidv4(),
        },
        {
            'time': '02:25',
            'title': 'Наедине со всеми',
            'link': '#0',
            'channel': 'Первый',
            'id': uuidv4(),
        },
    ],
    'ether': [
        {
            'title': 'Управление как искусство',
            'name': 'Успех',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Ночь. Мир в это время',
            'name': 'earthTV',
            'link': '#0',
            'id': uuidv4(),
        },
        {
            'title': 'Андрей Воздержанский',
            'name': 'Совершенно секретно',
            'link': '#0',
            'id': uuidv4(),
        },
    ],
};

export default data;