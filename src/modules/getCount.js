const getCounts = (results) => {
  let counts = 0;

  results ? (counts += results.length) : counts;

  return counts;
};

module.exports = { getCounts };
