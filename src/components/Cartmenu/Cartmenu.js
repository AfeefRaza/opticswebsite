import React,{ forwardRef,useState,useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import './Cartmenu.css'
import mc from '../payments-img/mastercard.png'
import ap from '../payments-img/apay.png'
import pp from '../payments-img/paypal.png'
import va from '../payments-img/visa.png'
import { AiFillCaretLeft} from "react-icons/ai";
const Cartmenu = forwardRef((props, ref) => {
  const { currency,cartItems,onAdd,cartMenu,onMinus} = props;
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0 )*currency.conversionRate;
  const shippingPrice = itemsPrice > 50 || itemsPrice === 0  ? 0 : 20   * currency.conversionRate;
  const totalPrice = itemsPrice + shippingPrice;
  
  const [prev, setPrev] = useState(0);
  const [nex, setNex] = useState(4);
  const [add, setAdd] = useState(4);
  const isWidescreen = useMediaQuery({
    query: '(min-aspect-ratio: 16/9)'
  })
  useEffect(() => {
   if (isWidescreen) {
    setNex(3)
    setAdd(3)
   }
   
  }, [])
  

    
    const OnNext = () => {
        setPrev((prevValue) => prevValue + add)
        setNex((setNex) => setNex + add)
        
    }
    const OnPrev = () => {
        setPrev((prevValue) => prevValue - add)
        setNex((setNex) => setNex - add)
        
    }
  return (
    <>
    <div className="cartmenu" ref={ref}>
        <div className="topheading">
          <a  href={() => false} onClick={ () => { cartMenu()} }>
            <AiFillCaretLeft size={"2rem"}/>
            <h3>CONTINUE SHOPPING</h3>
            </a>
        </div>
        
        
        <div className="mid">
        {cartItems.length === 0 && <div className='emptycart'>
          <h3>NOTHING IN YOUR BAG!</h3>
          <span className='mid-para'>

          <div className="para">
          
          <p> <a href={() => false}  onClick={ () => { cartMenu()} }>Start shopping</a> to see if you qualify for free shipping.</p>
          </div>
          </span>
          </div>}
          {cartItems.slice(prev, nex).map((item)=>
          (
            <div className='cartproducts' key={item.id}>
              <div className='cartimg'> <img  src={item.img} alt="img" /> </div>
              <div className='carttxt'> <h6> {item.heading} </h6>
              
              <p>{currency.symbol} 
              { (item.price*1).toFixed(2) * currency.conversionRate }</p>
              <div className='qty'> <p>{item.qty}</p>
              <button  onClick={()=> onAdd(item)}>+</button>
              <button  onClick={()=> onMinus(item)}>-</button>
              </div>
              </div>
             
              
            </div>
          
          ))}
          <div className="nxtprevbtn">
          {
                  nex <= cartItems.length-1 && 
                    <button className='nxt-btn nex' onClick={OnNext}>Next</button>
                }
          {
                  
                  prev >= 1 && 
                    <button className='nxt-btn prev' onClick={OnPrev}>Previous</button>
                }
            </div>
          
        </div>
        
          <div className="bottomheading">
            <div className="total">
              <h4>Items Total</h4>
              <h4>{currency.symbol}{itemsPrice.toFixed(2)}</h4>
            </div>
            <div className="total">
              <h4>SHIPPING</h4>
              <h4>{currency.symbol}{shippingPrice.toFixed(2)}</h4>
            </div>
            <div className="total">
              <h4> <strong>SUBTOTAL</strong> </h4>
              <h4>{currency.symbol} {totalPrice.toFixed(2)} </h4>
            </div>
            <a href={() => false} className='chckbtn'>CHECKOUT</a>
            <div className="payment">
            <p>SECURE PAYMENTS</p>
            <div className="payment-img">
            <img src={mc} alt="p" />
            <img src={ap} alt="p" />
            <img src={pp} alt="p" />
            <img src={va} alt="p" />
            </div>
          </div>
            {/* <a className='code'>GIFT CARD OR DISCOUNT CODE</a> */}
          </div>
    </div>
    </>
  )
})

export default Cartmenu