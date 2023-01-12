import React from "react";

import "./Top.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {Link} from 'react-scroll'
import Navbar from "../Navbar/Navbar";
const Top = (props) => {
  const { onCurrencyChange, currency, cartItems,onAdd,onMinus } = props;
  
  return (
    <>
      <div className="Top">
        
        <div className="topnav">
      
          <Navbar onCurrencyChange={onCurrencyChange} currency={currency} cartItems={cartItems} onAdd={onAdd} onMinus={onMinus} />
          <div className="Text">
            <h1>GLASSES AVAILABLE IN <br /> MANY VARIETIES</h1>
            <p>Discover perfect optics for yourself</p>
          </div>
          <div className="downarrow">
            <Link to="Main" smooth={true} duration={1000}>
              <MdOutlineArrowDropDown className="topdownarr"/>
              </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Top;
