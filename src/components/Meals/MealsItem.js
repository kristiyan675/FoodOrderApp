import { useContext } from 'react'

import './MealsItem.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'

const MealCard = (
    props
) => {
    const cartCtx = useContext(CartContext)

    const onAddToCart = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className='meal'>
            <div>
                <h3>{props.meal.name}</h3>
                <div className="description">{props.meal.description}</div>
                <div className="price">{props.meal.price}</div>
            </div>
            <MealItemForm onAddToCart = {onAddToCart} id={props.meal.id} />
        </li>
    )
}

export default MealCard