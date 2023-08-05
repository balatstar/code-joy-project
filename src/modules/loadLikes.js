const loadLikes = async (baseUrl, appID) => {
  const endpoints = `${baseUrl}/apps/${appID}/likes/`;

  try {
    const response = await fetch(endpoints, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(
        `Request failed with status: ${response.status} - ${response.statusText}`,
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = { loadLikes };
