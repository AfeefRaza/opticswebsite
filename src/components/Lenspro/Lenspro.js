import React,{useState,forwardRef} from 'react'
import './Lenspro.css'

const Lenspro = forwardRef((props, ref) => {
  const { priceInDollars, currency,onAdd,product,showAlert } = props;
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
    
    <a href={() => false} className="lenspro"  onMouseOver={handleClick} onMouseLeave={Block} >
            <img src={product.img} alt="g1" />
            <div className="info">
            <span className='heading'>
            <h2>{product.heading}</h2>
             <a href={() => false}  className='shopbtn' style={{display: change==='block'?'none':'flex'}} onClick={() => Wrapfunc()}>ADD TO CART</a> 
             <p className='lensp' style={{display: change==='block'?'block':'none'}}>{currency.symbol} {price.toFixed(2)} </p> 
               </span>
              
               <span className='lensparaspan'>
            <a href={() => false} className='shopbtn' onClick={() => Wrapfunc()}>ADD TO CART</a> 
            </span>
            </div>
        </a>
    </>
  )
})

export default Lenspro