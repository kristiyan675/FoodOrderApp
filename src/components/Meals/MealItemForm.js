import './MealItemForm.css'
import InputComponent from '../UI/InputComponent'
const MealItemForm = (
    props
) => {
    return (
        <form className="form">
            <InputComponent label="Amount" input={{
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