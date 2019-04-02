import React from 'react';
import { NavLink } from 'react-router-dom';
import Welcome from './welcome';
import Macarons from './our_macarons';
import Gifts from './gifts_parties';
import Contact from './contact';
import './nav.css';


export default props => (
    <div>
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link" component={Welcome} activeClassName="active selected">Welcome</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/our-macarons" className="nav-link" component={Macarons} activeClassName="active selected">Our Macarons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/gifts-parties" className="nav-link" component={Gifts} activeClassName="active selected">Gifts and Parties</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link" component={Contact} activeClassName="active selected">Contact</NavLink>
            </li>
        </ul>
    </div>
)