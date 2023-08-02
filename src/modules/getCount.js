const getCounts = (results) => {
  let counts = 0;

  if (results) {
    counts = results.length;
  }

  return counts;
};

module.exports = { getCounts };
