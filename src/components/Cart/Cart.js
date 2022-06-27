import './Cart.css'
import Modal from '../UI/Modal'

const Cart = (props) => {
    const mealItems = (
    <ul className='cart-items'>
        {[{id: 'randomId', name: 'Sushi', amount: 2, price: 10}].map((meal) => (
            <li key={meal.id}>{meal.name}</li>
        ))}
    </ul>
    );

    return (

        <Modal onClose={props.onCloseCart}>
            {/* {mealItems} */}
            <div className="total">
                <span>Total Amount</span>
                <span>100</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onCloseCart}>Close</button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    )
}

export default Cart