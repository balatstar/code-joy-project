// Global styles
import './index.css';

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMeals } from './modules/getMeals';
import { getCounts } from './modules/getCount';
// import { getMealsCategory } from './modules/getMealsCategories';

// Meals url
const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=s';

window.addEventListener('load', () => {
  getMeals(mealsUrl);
  // getMealsCategory();
});
