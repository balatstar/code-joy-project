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

    const successMessage = await response.text();
    console.log(successMessage);
  } catch (error) {
    console.log(error);
  }
};

const addLike = (e, url, appId) => {
  const itemId = e.target.id;
  console.log(itemId);

  addLikeCounts(url, appId, itemId);
  loadLikes(url, appId);
};

module.exports = { addLike };
