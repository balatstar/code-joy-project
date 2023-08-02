// Global styles
import './index.css';

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMeals } from './modules/getMeals';
import { createApp } from './modules/createApp';
import { addLike } from './modules/addLike';

// Meals url
const mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=s';

// const add_like = document.querySelectorAll('.add_like');

// add_like.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     console.log(btn);
//     e.target.classList.toggle('liked');
//     addLike(e, baseUrl, appId);
//   });
// });
window.addEventListener('load', () => {
  getMeals(mealsUrl);
});
