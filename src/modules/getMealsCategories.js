const getMealsCategory = async () => {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52770',
    );
    // const res = await fetch(
    //   'https://www.themealdb.com/api/json/v1/1/categories.php',
    // );

    if (!res.ok) {
      throw new Error(`Unable to fethc ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMealsCategory };
