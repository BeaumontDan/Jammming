import React from 'react';
import styles from './Header.module.css';
import logo from './jammming-logo.png';

const Header = () => {

  return (
    <div className={styles.Header}>
        <img className={styles.logo} src={logo} alt='logo'/>
        <h1>Ja<span className={styles.mmm}>mmm</span>ing</h1>
    </div>
  );

};

export default Header;
