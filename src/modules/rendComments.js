const { getCounts } = require('./getCount');

const loadComments = document.querySelector('.userComments');

const commentCount = document.querySelector('.commentHeader');

const renderComments = (comments) => {
  const showComments = comments.map(
    (com) => `<div> <small> ${com.creation_date} </small>
    <p> ${com.username}: ${com.comment} </p>
    </div>`,
  );
  loadComments.innerHTML = showComments.join('');
  const commentsLenght = getCounts(comments);
  commentCount.textContent = `Comments(${commentsLenght})`;
};

module.exports = { renderComments };
