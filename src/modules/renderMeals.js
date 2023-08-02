const { addLike, getAndUpdateLikes } = require('./addLike');
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

const renderMeals = async (foods) => {
  const allMeals = foods.meals.map(
    ({ idMeal, strMeal, strMealThumb }) =>
      `<section class="card meal mb-5 p-2 " id=${idMeal}>
          <figure class="card-img-top" >
            <img src=${strMealThumb} alt=${strMeal} />
          </figure>
          <div class="card-body d-flex flex-row justify-content-between align-items-center">
          <h2 class="card-title col-7"> ${strMeal} </h2> <p  class="add_like col-4 "> <i id='${idMeal}' class="bi bi-heart-fill like "></i> <br/> <span id='likecount-${idMeal}'> Likes</span>  </p>
          </div>
          <button class="btn btn-primary"> Comment </button>
        </section>`,
  );

  home.innerHTML = allMeals.join('');

  const add_like = document.querySelectorAll('.add_like');

  add_like.forEach(async (btn) => {
    const mealsId = btn.querySelector('i').id;
    const likeCounts = await getAndUpdateLikes(mealsId, baseUrl, appId);

    btn.innerHTML = ` <i id='${mealsId}' class="bi bi-heart-fill like "></i> <br/> <span id='likecount-${mealsId}'> ${likeCounts} Likes</span>   `;

    btn.addEventListener('click', (e) => {
      const itemId = e.target.id;
      e.target.classList.toggle('liked');
      addLike(itemId, baseUrl, appId);
    });
  });
};

module.exports = { renderMeals };
