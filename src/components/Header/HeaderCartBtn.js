import './HeaderCartBtn.css'
import CartSvgIcon from './CartSvgIcon'

const HeaderCartBtn = () => {
    return (
        <button className='button'>
            <span className='icon'> <CartSvgIcon/> </span>
            <span> Your Cart </span>
            <span className='badge'> 0.00 </span>
        </button>
    )
}

export default HeaderCartBtn