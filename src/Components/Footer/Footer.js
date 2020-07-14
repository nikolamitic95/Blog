import React from 'react';
import styles from './Footer.module.css';

import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className={`${styles.footer} justify-content-center`} >
            <Navbar.Brand className={styles.name}>
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
         Copyright &copy; 2020, by Nikola Mitić
      </Navbar.Brand>
        </Navbar>
    )
}

export { Footer }