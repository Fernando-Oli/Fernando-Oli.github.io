import React from "react"

import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import MenuLateral from "../components/MenuLateral";

export default function MenuHandler(props: any) {
        return(
        <div className='w-full z-0'>
            {props.open ? <MenuLateral setOpen={props.setOpen}/> : <Menu setOpenMenu={props.setOpen}/>}
            <Outlet />
        </div>
    )
}