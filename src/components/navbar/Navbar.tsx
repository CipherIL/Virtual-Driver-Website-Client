import React from 'react'
import './navbar.styles.scss';
import PageButton from './pageButton/PageButton';
import UserButton from './userButton/UserButton';
import { pages } from '../../data/pages';

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__user-button'>
                <UserButton/>
            </div>
            <div className='navbar__pages'>
                {pages.map((page,i)=>{
                    return (
                        <PageButton 
                            pageLink={page.link} 
                            pageTitle={page.title} 
                            pageIcon={page.icon}
                            key={i}/>
                    )
                })}
            </div>            
        </nav>
    )
}

export default Navbar;