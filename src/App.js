import './App.css';
import Header from "./components/Header/Header"
import MealsSummary from './components/Meals/MealsSummary'
import MealsItems from './components/Meals/MealsItems'
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CardProvider';


function App() {
  let [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true)
  }

  const hideCartHandler = () => {
    setIsCartVisible(false)
  }

  return (
    <CartProvider>
      {isCartVisible && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <MealsSummary/>
      <MealsItems/>
    </CartProvider>
  );
}

export default App;
