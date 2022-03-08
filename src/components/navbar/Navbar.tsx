import React from 'react'
import './navbar.styles.scss';
import PageButton from './pageButton/PageButton';
import UserButton from './userButton/UserButton';
import { pages } from '../../data/pages';

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <UserButton/>
            {pages.map((page)=>{
                return (
                    <PageButton pageLink={page.link} pageTitle={page.title} pageIcon={page.icon}/>
                )
            })}
            
        </nav>
    )
}

export default Navbar;