import './InputComponent.css'

const MealInput = (props) => {
    return (
        <div className="input">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
        </div>
        )
}

export default MealInput