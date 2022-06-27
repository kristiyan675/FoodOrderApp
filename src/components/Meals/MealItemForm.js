import './MealItemForm.css'
import InputComponent from '../UI/InputComponent'
import { useRef } from 'react'

const MealItemForm = (props) => {

    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = Number(amountInputRef.current.value);
        props.onAddToCart(enteredAmount)
    }


    return (
        <form className="form" onSubmit={submitHandler}>
            <InputComponent label="Amount" 
            ref= {amountInputRef}
            input={{
                id: props.id,
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm