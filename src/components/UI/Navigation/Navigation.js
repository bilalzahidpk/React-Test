import React from 'react';
import classes from './Navigation.module.css';
import { NavLink as Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={classes['navigation']}>
            <ul className={classes['navigation__items']}>
                <li className={classes['navigation__item']}> <Link to='/' className={classes['link']}>Pic Some</Link> </li>
                <li className={classes['navigation__item']}> <Link to='/cart' className={classes['link']}>Cart</Link> </li>
            </ul>
        </nav>
    )
}

export default Navigation;
