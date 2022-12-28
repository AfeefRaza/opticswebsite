import React,{ forwardRef } from 'react'
import './Main.css'
import Mainproduct from '../Mainproduct/Mainproduct'

const Main = forwardRef((props, ref) => {
  const {currency,optics, onAdd,showAlert} = props;
  return (
    <>
    <div className="container" id='Main'>
        
        {optics.map((product) => (
      <Mainproduct ref={ref} showAlert={showAlert} currency={currency} product={product}  priceInDollars={product.price} para="Ideal for everyday use"  onAdd={onAdd}/>
          
                  ))}

    </div>
    </>
  )
})

export default Main