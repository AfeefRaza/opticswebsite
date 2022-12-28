import React,{useState,forwardRef} from 'react'

import './Mainproduct.css'

const Mainproduct = forwardRef((props, ref) => {
  const { priceInDollars, currency,para,product,onAdd,showAlert } = props;
  const price = priceInDollars * currency.conversionRate;
  const [change, setChange] = useState("block")
  let handleClick = () => {
    setChange("none")
  };
  let Block = () => {
    setChange("block")
  };
  let Wrapfunc = () => {
    onAdd(product);
    showAlert()
  };
  return (
    <>
    <a href={() => false} className="product" onMouseOver={handleClick} onMouseLeave={Block}  >
            <img src={product.img} alt="g1" />
            <div className="infomain" > 
            <span className='heading'>
            <h2>{product.heading}</h2>
            <a href={() => false} className='shopbtn' ref={ref} onClick={() => Wrapfunc()} style={{display: change==='block'?'none':'flex'}}>ADD TO CART</a> 
             <p className='price' style={{display: change==='block'?'block':'none'}}>{currency.symbol}{price}</p>
            </span>
            <span className='paraspan'>
            <p className='para'>{para}</p>
            <a href={() => false} ref={ref} className='shopbtn' onClick={() => Wrapfunc()}>ADD TO CART</a> 
            </span>
            </div>
        </a>
    </>
  )
})

export default Mainproduct