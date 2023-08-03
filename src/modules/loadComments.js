const loadComments = async (baseUrl, appID) => {
  const endpoints = `${baseUrl}/apps/${appID}/comments/`;

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
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { loadComments };
