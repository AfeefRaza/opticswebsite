import React,{ forwardRef } from 'react'
import './lenses.css'
import Lenspro from '../Lenspro/Lenspro'

const Lenses = forwardRef((props, ref) => {
  const {currency,lenses, onAdd,showAlert} = props;
  
  return (
    <>
    
    <div className="lensescon">
    {lenses.map((product) => (
      <Lenspro ref={ref} showAlert={showAlert} currency={currency} product={product}  priceInDollars={product.price} para="Ideal for everyday use"  onAdd={onAdd}/>
      
                  ))}
        
    </div>
    </>
  )
})

export default Lenses