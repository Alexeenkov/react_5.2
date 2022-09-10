import React from 'react';
import './App.css';
import data from './data/data'
import News from './components/News/News'
import Stocks from './components/Stocks/Stocks'
import Ad from './components/Ad/Ad'
import Menu from './components/Menu/Menu'
import Search from './components/Search/Search'
import Banner from './components/Banner/Banner'
import Weather from './components/Weather/Weather'
import Visited from './components/Visited/Visited'
import Germany from './components/Germany/Germany'
import Teleprogram from './components/Teleprogram/Teleprogram'
import Ether from './components/Ether/Ether'

function App() {
  return (
    <div className='wrapper'>
      <div className='top-container'>
        <div>
          <News data={data.news} />
          <Stocks data={data.stocks} />
        </div>
        <Ad data={data.ad} />
      </div>
      <Menu data={data.menu} />
      <div className='search-container'>
        <div className='search'>
          <a href='#0' className='logo'>
            <img src={data.logo} alt="Яндекс логотип" />
          </a>
          <Search data={data.search} />
        </div>
      </div>
      <Banner data={data.banner} />
      <div className='bottom-container'>
        <div>
          <Weather data={data.weather} />
          <Visited data={data.visited} link={data.visitedLink}/>
        </div>
        <div>
          <Germany data={data.map} />
          <Teleprogram data={data.teleprogram} />
        </div>
        <div>
          <Ether data={data.ether}/>
        </div>
      </div>
    </div>
  );
}

export default App;
