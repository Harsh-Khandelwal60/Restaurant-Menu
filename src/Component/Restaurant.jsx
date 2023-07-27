import React, { useState } from "react";
import './style.css';
import Menu from './MenuApi';
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";


const uniqueList =[
    ...new Set( Menu.map( (curElem) => {
    return curElem.category;
} )
),"All",
];


const Restaurant = () => {

    const [menuData,setMenuData]=useState(Menu);
    const [menuList,setMentList]=useState(uniqueList);
    // console.log(menuList);


    const filterItem = (category) => {

        if(category==="All"){
            setMenuData(Menu);
            return ;
        }

        let updateList = Menu.filter( (curElem) => {
            return curElem.category === category;
        } );
        setMenuData(updateList);
    }


    return (
        <>
             <NavBar filterItem={filterItem} menuList={menuList} />
           <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant;