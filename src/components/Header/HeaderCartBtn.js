import './HeaderCartBtn.css'
import CartSvgIcon from './CartSvgIcon'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartBtn = (props) => {
    const cartCtc = useContext(CartContext)

    let numberOfItems = cartCtc.items.reduce(
        (prev, item) => {return prev + item.amount}, 0)

    
    return (
        <button className='button' onClick={props.onClick}>
            <span className='icon'>
                <CartSvgIcon />
            </span>
            <span> Your Cart </span>
            <span className='badge'> {numberOfItems} </span>  
        </button>
    )
}

export default HeaderCartBtn