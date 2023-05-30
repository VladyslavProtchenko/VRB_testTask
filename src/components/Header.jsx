import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className={box}>
            <nav className={container}>
                <NavLink to='/'  className={logo}>
                    <span className='sm:hidden'> articles</span> VRB <span className='sm:hidden' >Tech</span>  
                </NavLink>

                <ul className={menu}>
                    <NavLink to='/' className={menuItem} >
                        Posts#1
                    </NavLink>
                    <NavLink to='/news' className={menuItem} >
                        Posts#2
                    </NavLink>
                    <NavLink to='/' className={menuItem} >
                        help
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

const box = 'flex w-screen justify-center items-center bg-white'
const container = 'max-w-[940px] px-10 w-full flex justify-between h-auto items-center'
const menu = 'flex'
const menuItem = 'hover:underline px-[22px] sm:px-1'
const logo = 'text-[32px] px-[34px] py-[16px] sm:text-base md:text-[24px]'