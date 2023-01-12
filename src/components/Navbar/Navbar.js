import React, { useState, useEffect, useRef } from "react";
import logo from "../opticlogo.png";
import "./Navbar.css";
import Cartmenu from '../Cartmenu/Cartmenu';
import currencies from '../data';
import { BsFillBagFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = (props) => {
  const { onCurrencyChange, currency, cartItems,onAdd, onMinus} = props;
  
  const [listopen, setListopen] = useState(false)
  const [cartopen, setCartopen] = useState(false)
  const Dropdown = () => {
    
    setListopen(!listopen)

  }
  const cartMenu = () => {
    setCartopen(!cartopen)
  }
  let menuRef = useRef();
  let cartRef = useRef();
  useEffect(() => {
    if (listopen) {
      document.addEventListener("mousedown", (event) => {
        if (!menuRef.current.contains(event.target)) {
          setListopen(false)

        }

      })
    }

  });

  useEffect(() => {
    if (cartopen) {

      document.addEventListener("mousedown", (event) => {
        if (!cartRef.current.contains(event.target)) {
          setCartopen(false)


        }
      })
    }
  })



  // const [btnText, setBtnText] = useState("USD($)")
  // const handleOptionClick = (txt)=> {
  //   setBtnText(txt);
  //   setListopen(!listopen)
  // }
  const handleOptionClick = (curr) => {
    onCurrencyChange(curr);
    setListopen(!listopen);
  };
  const ChangeDark = () => {
    document.documentElement.style.setProperty('--clr1', '#eeeeee')
    document.documentElement.style.setProperty('--clr2','#4ecca3')
    document.documentElement.style.setProperty('--clr3', '#393e46')
    document.documentElement.style.setProperty('--clr4', '#232931')
  }
  const ChangeLight = () => {
    document.documentElement.style.setProperty('--clr1', '#fcff82')
    document.documentElement.style.setProperty('--clr2','#afc5ff')
    document.documentElement.style.setProperty('--clr3', '#ff9c6d')
    document.documentElement.style.setProperty('--clr4', '#fd5959')
    



  }
  return (
    <>

      <div className="cart" style={{ display: cartopen === false ? 'none' : 'block' }}   >
        <Cartmenu ref={cartRef} cartItems={cartItems} onAdd={onAdd} currency={currency} cartMenu={cartMenu} onMinus={onMinus} />
      </div>
      <header>
        <a href="/" className="logo"><img src={logo} alt="" />
          Optics</a>
        <nav>
          <ul>
            <li><a href={() => false} className="mode" onClick={() => ChangeDark()}> <BsFillMoonFill className="modeicon"/> Dark </a></li>
            <li><a href={() => false} className="mode" onClick={() => ChangeLight()}> <BsSunFill className="modeicon"/> Light </a></li>
            <li><a href={() => false} onClick={() => cartMenu()} ><BsFillBagFill className="bag" /> </a></li>
            <div ref={menuRef} className="dropdown">
              <li><button className="dropbtn" onClick={() => Dropdown()}  > <p>{currency.name}</p> 
                <RiArrowDropDownLine className="droparr"   />
              </button></li>
              <div className="dropdown-content" id="myDropdown" style={{ display: listopen === false ? 'none' : 'block' }}>
                {currencies.map((curr) => (
                  <a href={() => false} onClick={() => handleOptionClick(curr)} key={curr.name}>
                    {curr.name}({curr.symbol})
                  </a>))}
                  </div>
            </div>
          </ul>

        </nav>
      </header>
    </>
  )
}

export default Navbar