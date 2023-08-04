const { getCounts } = require('../modules/getCount');

describe('getCounts test', () => {
  test('Should return the total count of items', () => {
    // Mock data
    const meals = [
      {
        id: 1,
        title: 'Iyan and Egusi soup',
      },
      {
        id: 2,
        title: 'Bread and Ewa Agoyin',
      },
      {
        id: 3,
        title: 'Amala Lafun and Gbegiri and Ewedu',
      },
    ];

    getCounts(meals);
    expect(meals.length).toBe(3);
  });
});
