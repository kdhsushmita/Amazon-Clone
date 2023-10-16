import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "../Style/Header.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <div className="header_logo">
                    <StorefrontIcon className='header_logoImage' fontSize='large' />
                    <h2 className="header_logoTitle">eSHOP</h2>
                </div>
            </Link>
            <div className="header_searchbar">
                <input type="text" className='header_searchbarInput' />
                <SearchIcon className='header_searchbarIcon' />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign In</span>
                </div>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: "none", color: "white" }}>
                    <div className="nav_itemBasket">
                        <ShoppingBasketIcon className='itemBasket' />
                        <span className="nav_itemLineTwo nav_basketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
