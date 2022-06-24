import './Header.css'
import mealsImg from '../../media/meals.jpg'
import HeaderCartBtn from './HeaderCartBtn'
  
const Header = () => {
    return (
        <>
            <header className='header'>
                <h1>ReactMeals</h1>
                <HeaderCartBtn/>
            </header>
            <div className='main-image'>
                <img src={mealsImg} alt="Food" />
            </div>
        </>
    )
}

export default Header;