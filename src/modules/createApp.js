const createApp = async (baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}/apps/`, {
      method: 'POST',
    });
    console.log(response);

    // Check if the response has a successful status code (e.g., 2xx)
    if (!response.ok) {
      // If the response is not successful, throw an error with the status text
      throw new Error(
        `Request failed with status: ${response.status} - ${response.statusText}`,
      );
    }

    const gameID = await response.text();
    console.log(gameID);
  } catch (er) {
    console.log(er);
  }
};

module.exports = { createApp };
