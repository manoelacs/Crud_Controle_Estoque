import React from 'react';
import {Navbar} from 'react-bootstrap';
class Nav extends React.Component{
    render(){
        return(
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='/'>Home</Navbar.Brand>

            </Navbar>
        );
    }

}; export default Nav;