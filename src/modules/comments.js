// involvement API

import { clearInput } from './clearInput';

/* eslint-disable operator-linebreak */
const baseUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
/* eslint-disable operator-linebreak */

// createApp(baseUrl);
const appId = 'HWmRhYpaSgwk9IP9UqTB';

const userName = document.querySelector('#name');
const userComment = document.querySelector('#comment');

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
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (id) => {
  try {
    const request = await fetch(`${APP_URL}/comments?item_id=${id}`, {
      method: 'GET',
    });
    if (!request.ok) {
      throw new Error(
        `Unable to fetch ${request.status} ${request.statusText}`,
      );
    }
    const response = await request.json();
    if (response.length <= 0) {
      return [];
    }
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { postComment, getComments };
