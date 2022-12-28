import {useState,useRef} from "react";
import Banner from './components/Banner/Banner';
import Bottom from './components/Bottom/Bottom';
import Lenses from './components/Lenses/Lenses';
import Main from './components/Main/Main';
import Top from './components/Top/Top';
import BasicExample from './components/Alert/Alert';
import currencies from "./components/data.json";
import { lens , optics } from './components/lens'
import "./App.css"

function App() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };


  const onMinus = (product) => {

    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x)=> x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const [alert, setAlert] = useState(false)
  const alertref = useRef()
  const showAlert = () => {
    setAlert(true)
    setTimeout(() => {
        setAlert(false)
    }, 2000);
}
  return (
    <>
      <Top currency={currency} onCurrencyChange={setCurrency} cartItems={cartItems} onAdd={onAdd} onMinus={onMinus} />
      <div className="Alertdiv" style={{ visibility: alert === false ? 'hidden' : 'visible' }}><BasicExample cartItems={cartItems}  /></div>
      <Main currency={currency} onAdd={onAdd} optics={optics} ref={alertref} showAlert={showAlert} />
      <Banner/>
      <Lenses currency={currency} lenses={lens} onAdd={onAdd} ref={alertref} showAlert={showAlert} />
      <Bottom/>
      
      
    </>
  );
}

export default App;
