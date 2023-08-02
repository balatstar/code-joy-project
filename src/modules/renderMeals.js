const { addLike } = require('./addLike');
const { loadLikes, mealLikes } = require('./loadLikes');
const home = document.querySelector('#home');

// involvement API
const baseUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

// createApp(baseUrl);
const appId = 'HWmRhYpaSgwk9IP9UqTB';

// Set loading animation while the API is fetching data
home.innerHTML = `<div class="spinner-border text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

const results = loadLikes(baseUrl, appId).then(() => {
  console.log(results);
});

if (results) {
  console.log(results);
}

const renderMeals = (foods) => {
  const allMeals = foods.meals.map(
    ({ idMeal, strMeal, strMealThumb }) =>
      `<section class="card meal mb-5 p-2" id=${idMeal}>
          <figure class="card-img-top" >
            <img src=${strMealThumb} alt=${strMeal} />
          </figure>
          <div class="card-body d-flex flex-row justify-content-between align-items-center">
          <h2 class="card-title col-8"> ${strMeal} </h2> <p  class="add_like"> <i id=${idMeal} class="bi bi-heart-fill like col-3"></i> Likes</p>
          </div>
          <button class="btn btn-primary"> Comment </button>
        </section>`,
  );

  home.innerHTML = allMeals.join('');

  const add_like = document.querySelectorAll('.add_like');

  add_like.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.classList.toggle('liked');
      addLike(e, baseUrl, appId);
    });
  });
};

module.exports = { renderMeals };
