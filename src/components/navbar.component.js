import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'reactstrap'

export default function NavbarComponent() {
    return (
        <div>
            <Navbar> 
            <Link to="/">  Exercise Tracker </Link>
            </Navbar>
        </div>
    )
}
