import './Cart.css'

const Cart = () => {
    const mealItems = <ul>
        {[{id: 'randomId', name: 'Sushi', amount: 2, price: 10}].map(meal => {
            <li>{meal.name}</li>
        })}
    </ul>

    return (
        <div className='cart-items'>
            {mealItems}
            <div className="total">
                <span>Total Amount</span>
                <span>100</span>
            </div>
            <div className='actions'>
                <button className='button--alt'></button>
                <button className='button'></button>
            </div>
        </div>
    )
}

export default Cart