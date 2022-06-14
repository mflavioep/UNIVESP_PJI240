import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/sobre' activeStyle>
                        Sobre
                    </NavLink>
                    <NavLink to='/contato' activeStyle>
                        Contato
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <img src="imagem/Barnavlogo.png"></img>
                <NavBtn>
                    <NavBtnLink to='/cadastro'>Cadastro/Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;