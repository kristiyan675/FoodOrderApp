import './MealsItem.css'
import MealItemForm from './MealItemForm'

const MealCard = (
    props
) => {
    return (
        <li className= 'meal'>
        <div>
        <h3>{props.meal.name}</h3>
        <div className="description">{props.meal.description}</div>
        <div className="price">{props.meal.price}</div>
        </div>
        <MealItemForm id={props.meal.id}/>
        </li>
    )
}

export default MealCard