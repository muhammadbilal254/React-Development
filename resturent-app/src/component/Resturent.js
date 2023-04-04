import React, { useState } from 'react';
import './style.css';
import Menu from './MenuAPi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const Resturent = () => {

    // use State hooks
    const [menuData, setMenuData] = useState(Menu);

    const uniqueList = ['All', ...new Set(Menu.map((elem) => {
        return elem.category;
    }))]


    const [menuList, setMenuList] = useState(uniqueList);



    const filterItem = (category) => {

        if (category === 'All') {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }


    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />


        </>
    )
}

export default Resturent
