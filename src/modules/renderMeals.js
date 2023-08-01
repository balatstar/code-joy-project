const home = document.querySelector('#home');

// Set loading animation while the API is fetching data
home.innerHTML = `<div class="spinner-border text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

const renderMeals = (foods) => {
  const allMeals = foods.meals.map(
    ({ idMeal, strMeal, strMealThumb }) =>
      `<section class="card meal mb-5 p-2" id=${idMeal}>
          <figure class="card-img-top" >
            <img src=${strMealThumb} alt=${strMeal} />
          </figure>
          <div class="card-body d-flex flex-row justify-content-between align-items-center">
          <h2 class="card-title col-8"> ${strMeal} </h2> <p> <i class="bi bi-heart-fill like col-3"></i> Likes</p>
          </div>
          <button class="btn btn-primary"> Comment </button>
        </section>`,
  );
  home.innerHTML = allMeals.join('');
};

module.exports = { renderMeals };
