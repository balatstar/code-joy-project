// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Global styles
import './index.css';

import { getMeals } from './modules/getMeals';

// Meals url
const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=s';

window.addEventListener('load', () => {
  getMeals(mealsUrl);
});

// Render Details

import { fetchFilteredMeals, postMethods } from './modules/renderDetails';

async function main() {
    try {
        const filteredMeals = await fetchFilteredMeals();
        postMethods(filteredMeals);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
