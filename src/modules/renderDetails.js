import { postComment } from './comments';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const postContainer = document.querySelector('.mealDetails');

const Submit = document.querySelector('#Submit');

postContainer.innerHTML = `<div class="spinner-border text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

const fetchMeal = async (itemId) => {
  try {
    const response = await fetch(`${baseUrl}${itemId}`);
    if (!response.ok) {
      throw new Error('Error with fetch');
    }
    const meal = await response.json();
    postMethods(meal.meals[0]);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

const postMethods = (postData) => {
  postContainer.innerHTML = `  <section class="d-flex flex-column flex-lg-row justify-content-between">
            <figure class="col-12 col-lg-6">
              <img src="${postData.strMealThumb}" />
            </figure>
            <div class=" col-12 col-lg-5 p-1 p-md-5"><h2>${postData.strMeal}</h2>
            <div class="">
              <small ><strong>Category:</strong> ${postData.strCategory}</small>
              <small ><strong>Area: </strong>${postData.strArea}</small>
              <small ><strong>Tags: </strong>${postData.strTags}</small>
              <small ><strong>Video: </strong><a href="${postData.strYoutube}">YouTube</a></small>
              </div>
              <div class="mt-2">
             <strong>Instructions:</strong> <br/>
            <small class="">
            ${postData.strInstructions}
            </small></div>
            </div>


        </section>
    `;

  Submit.addEventListener('click', (e) => {
    e.preventDefault();
    const commentSuccess = postComment(postData);

    if (commentSuccess) {
      Submit.textContent = 'Comment submmited successfully';
    }
  });
};

export { fetchMeal, postMethods };
