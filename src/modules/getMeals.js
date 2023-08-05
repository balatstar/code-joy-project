const { renderMeals } = require('./renderMeals');

const getMeals = async (baseUrl) => {
  try {
    const res = await fetch(baseUrl);

    if (!res.ok) {
      throw new Error(`Unable to fethc ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    renderMeals(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMeals };
