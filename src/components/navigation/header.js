import React from 'react'
import "./header.css"
import { useSelector } from 'react-redux'
import { MdShoppingCart } from "react-icons/md";


const Header = () => {
    const userDetail = useSelector(state => state.userReducer.userDetail)
    const cartDetail = useSelector(state => state.userReducer.cart)
    return (
        <div className='headerContainer'>
            <div className='d-flex w-100 h-100'>
                <div className='headerUserDetail'>
                    <span>{userDetail.id}</span>
                </div>
                <div className='headerCartDetail'>
                    < MdShoppingCart size={35} />
                    <span>Items : {cartDetail?.length || 0}</span>
                    <span>Amount : {cartDetail?.reduce((result, item) => result + item, 0) || 0}</span>
                </div>
            </div>
        </div>
    )
}

export default Header