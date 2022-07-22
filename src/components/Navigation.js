import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import logo from '../img/planet.png';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My profile',
    },
  ];

  return (
    <nav className={classes.navBar}>
      <div className={classes.mainHeader}>
        <img alt="website logo" src={logo} />
        <h1>Space Travaler&apos;s Hub</h1>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
