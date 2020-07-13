import React from 'react';

import style from './Header.module.css';

import { Container, Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container className={style.header}>
            <Navbar
                alignLinks="right"
                brand={<Link to="/">BLOG</Link>}
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}

                options={{
                    draggable: true,
                    edge: 'right',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <Link to='/createnew'> <NavItem>
                    Create New
                </NavItem> </Link>
                <Link to='/'> <NavItem>
                    Home
                </NavItem> </Link>
                <Link to='/authors'> <NavItem>
                    Authors
                </NavItem> </Link>
                <Link to='/about'> <NavItem>
                    About
                </NavItem> </Link>
            </Navbar>
        </Container>
    );
}

export { Header };