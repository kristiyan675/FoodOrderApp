import './MealsItems.css'
import MealCard from './MealsItem'
import Card from '../UI/Card'
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const MealsItems = () => {
    return (
        <section className='meals'>
            <ul>
                <Card>

                {DUMMY_MEALS.map(meal => <MealCard key={meal.id} id = {meal.id} meal={meal}/>)}

                </Card>
                
            </ul>
        </section>
    )
}

export default MealsItems