import axios from 'axios';

// Function to fetch filtered meals
async function fetchFilteredMeals() {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=s';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Error with fetch');
    }

    const data = await response.json();

    const filteredMeals = data.meals.map(meal => {
      const {
        idMeal,
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
      } = meal;
      return {
        idMeal,
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        comments: [], // Placeholder for comments
      };
    });

    // Fetch and assign comments for each meal
    for (const meal of filteredMeals) {
      meal.comments = await fetchComments(meal.idMeal);
    }

    return filteredMeals;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Function to fetch comments
async function fetchComments(itemId) {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const appId = 'WEH8vE62XL75aTz1W6aU';

  const url = `${baseUrl}/apps/${appId}/comments?item_id=${itemId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error with fetch');
    }
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

// Function to render post modals
function postMethods(filteredMeals) {
  const postContainer = document.querySelector('.modal-set');

  filteredMeals.forEach(postData => {
    const postElement = document.createElement('div');
    postElement.id = `myModal-${postData.idMeal}`;
    postElement.classList.add('modal');
    postElement.innerHTML = `
      <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mod-content">
            <div class="mod-image"><img src="${postData.strMealThumb}"></div>
            <div class="mod-title"><h2>${postData.strMeal}</h2></div>
            <div class="mod-details row">
              <div class="col-md-6"><strong>Category:</strong> ${postData.strCategory}</div>
              <div class="col-md-6"><strong>Area: </strong>${postData.strArea}</div>
              <div class="col-md-6"><strong>Tags: </strong>${postData.strTags}</div>
              <div class="col-md-6"><strong>Video: </strong><a href="${postData.strYoutube}">YouTube</a></div>
              <div class="col-md-6"><strong>Instructions:</strong></p>
            </div>
            <div class="mod-instructions">
            ${postData.strInstructions}
            </div>
            <div class="mod-comments">
        <h3 class="mod-comment-head">Comments (${postData.comments.length})</h3>
        ${postData.comments
          .map(
            comment =>
              `<div class="mod-comment">${comment.creation_date} ${comment.username}: ${comment.comment}</div>`
          )
          .join('')}
      </div>
            <div class="mod-form">
              <h3 class="mod-form-head">Add a comment</h3>
              <form>
                <input type="text" id="name" name="name" placeholder="Your name">
                <textarea id="comment" name="comment" placeholder="Your insights"></textarea>
                <button type="submit" class="btn btn-primary mod-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
      `;
      postContainer.appendChild(postElement);
  });
}
// Function to fetch and display data with loading indicator
async function fetchAndDisplayData() {
  const loadingIndicator = document.querySelector('.loading-indicator');
  
  // Show the loading indicator
  loadingIndicator.style.display = 'block';

  try {
    const filteredMeals = await fetchFilteredMeals();
    
    // Render post modals
    postMethods(filteredMeals);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Hide the loading indicator
    loadingIndicator.style.display = 'none';
  }
}

// Call the function to fetch and display data
fetchAndDisplayData();

export { fetchFilteredMeals, postMethods };
