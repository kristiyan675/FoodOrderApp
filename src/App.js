import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import MealsSummary from './components/Meals/MealsSummary'
import MealsItems from './components/Meals/MealsItems'

function App() {
  return (
    <div className="App">
      <Header/>
      <MealsSummary/>
      <MealsItems/>
    </div>
  );
}

export default App;
