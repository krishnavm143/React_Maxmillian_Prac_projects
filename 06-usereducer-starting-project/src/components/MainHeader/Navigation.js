import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
  const data=useContext(AuthContext)
  console.log(data.isLoggedIn)
  return (
    <nav className={classes.nav}>
      <ul>
        {data.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {data.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {data.isLoggedIn && (
          <li>
            <button onClick={data.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
