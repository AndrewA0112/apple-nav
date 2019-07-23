import React from 'react'

import { Route, NavLink } from 'react-router-dom'

import MacBookAir from './MacBookAir'
import MacBookPro from './MacBookPro'
import IMac from './IMac'
import IMacPro from './IMacPro'

export default function Mac() {
    return (
        <div>
            <div className='subNav'>
                <NavLink to='/macbook-air' className='navLink'>MacBook Air</NavLink>
                <NavLink to='/macbook-pro' className='navLink'>MacBook Pro</NavLink>
                <NavLink to='/imac' className='navLink'>iMac</NavLink>
                <NavLink to='/imac-pro' className='navLink'>iMac Pro</NavLink>
                <NavLink to='/mac-pro' className='navLink'>Mac Pro</NavLink>
                <NavLink to='/mac-mini' className='navLink'>Mac Mini</NavLink>
                <NavLink to='/compare' className='navLink'>Compare</NavLink>
                <NavLink to='/pro-display-xdr' className='navLink'>Pro Display XDR</NavLink>
                <NavLink to='/mac-accessories' className='navLink'>Accessories</NavLink>
                <NavLink to='/mojave' className='navLink'>Mojave</NavLink>
                
            </div>

            <Route path='/macbook-air' component={MacBookAir} />
            <Route path='/macbook-pro' component={MacBookPro} />
            <Route path='/imac' component={IMac} />
            <Route path='/imac-pro' component={IMacPro} />
        </div>
    )
}