// involvement API

import { clearInput } from './clearInput';
import { renderComments } from './rendComments';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const appId = 'HWmRhYpaSgwk9IP9UqTB';

const userName = document.querySelector('#name');
const userComment = document.querySelector('#comment');

const getComments = async (id) => {
  console.log(id);
  const endpoints = `${baseUrl}/apps/${appId}`;

  try {
    const request = await fetch(`${endpoints}/comments?item_id=${id}`, {
      method: 'GET',
    });
    if (!request.ok) {
      throw new Error(
        `Unable to fetch ${request.status} ${request.statusText}`,
      );
    }
    const response = await request.json();

    if (id) {
      renderComments(response);
    }
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const postComment = async (mealId) => {
  const endpoints = `${baseUrl}/apps/${appId}/comments/`;

  const comments = {
    item_id: mealId,
    username: userName.value,
    comment: userComment.value,
  };

  try {
    const response = await fetch(endpoints, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comments),
    });
    if (!response.ok) {
      throw new Error(
        `Unable to fethc ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.text();
    clearInput(userName, userComment);
    getComments(mealId);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { postComment, getComments };
