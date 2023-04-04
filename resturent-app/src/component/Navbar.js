import React from 'react'
import "./style.css";
const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    {menuList.map((elem) => {
                        return <button className='btn-group__item' onClick={() => filterItem(elem)}>{elem}</button>
                    })}
                    {/* <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
