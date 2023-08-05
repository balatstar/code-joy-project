const { loadLikes } = require('./loadLikes');

const addLikeCounts = async (baseUrl, gameID, itemId) => {
  const likes = {
    item_id: itemId,
  };

  const endpoints = `${baseUrl}/apps/${gameID}/likes/`;

  try {
    const response = await fetch(endpoints, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likes),
    });

    if (!response.ok) {
      throw new Error(
        `Request failed with status: ${response.status} - ${response.statusText}`,
      );
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const updateLikeCountInDOM = (id, newLikes) => {
  const likeCountElement = document.getElementById(`likecount-${id}`);
  if (likeCountElement) {
    likeCountElement.textContent = `${newLikes} Likes`; // Update the like count text
  }
};

const getAndUpdateLikes = async (id, baseUrl, appId) => {
  const results = await loadLikes(baseUrl, appId);
  const mealsLikes = results.find((like) => like.item_id === id);
  const likesCount = mealsLikes ? mealsLikes.likes : 0;

  // Update the like count in the DOM
  updateLikeCountInDOM(id, likesCount);
  return mealsLikes ? mealsLikes.likes : 0;
};

const addLike = async (id, url, appId) => {
  const addLikeSuccess = await addLikeCounts(url, appId, id);

  if (addLikeSuccess) {
    getAndUpdateLikes(id, url, appId);
  }
};

module.exports = { addLike, getAndUpdateLikes };
