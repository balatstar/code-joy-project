const { getCounts } = require('./getCount');

const loadComments = document.querySelector('.userComments');

const commentCount = document.querySelector('.commentHeader');

const renderComments = (comments) => {
  const showComments = comments.map(
    ({ creation_date, username, comment }) => `<div>
<small> ${creation_date} </small> <p> ${username}: ${comment} </p>
    </div>`,
  );

  loadComments.innerHTML = showComments.join('');
  const commentsLenght = getCounts(comments);
  commentCount.textContent = `Comments(${commentsLenght})`;
};

module.exports = { renderComments };
