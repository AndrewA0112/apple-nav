import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'

import Home from './components/Home'
import Mac from './components/MacPages/Mac'
import IPad from './components/iPadPages/IPad'
import IPhone from './components/iPhonePages/IPhone'
import Watch from './components/WatchPages/Watch'
import TV from './components/TvPages/TV'
import Music from './components/MusicPages/Music'
import Support from './components/Support'
import MacBookAir from './components/MacPages/MacBookAir'
import MacBookPro from './components/MacPages/MacBookPro'
import IMac from './components/MacPages/IMac'
import IMacPro from './components/MacPages/IMacPro'

import './App.scss';

function App() {
  return (
    <div className="App">
        <div className='navBar'>
          <NavLink exact className='navLink' activeClassName='activeLink' to='/'>Home</NavLink>
          <NavLink className='navLink' activeClassName='activeLink' to='/mac'>Mac</NavLink>
          <NavLink className='navLink' activeClassName='activeLink' to='/ipad'>iPad</NavLink>
          <NavLink className='navLink' activeClassName='activeLink' to='/iphone'>iPhone</NavLink>
          <NavLink className='navLink' activeClassName='activeLink' to='/watch'>Watch</NavLink>
          <NavLink className='navLink' activeClassName='activeLink' to='/tv'>TV</NavLink>
          <NavLink className='navLink' activeClassName='activeLink' to='/music'>Music</NavLink>
          <NavLink className='navLink' activeClassName='activeLink' to='/support'>Support</NavLink>
        </div>

          <Route exact path='/' component={Home} />
          <Route path='/mac' component={Mac} />
          <Route path='/ipad' component={IPad} />
          <Route path='/iphone' component={IPhone} />
          <Route path='/watch' component={Watch} />
          <Route path='/tv' component={TV} />
          <Route path='/music' component={Music} />
          <Route path='/support' component={Support} />
    </div>
  );
}

export default App;
