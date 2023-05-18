import { request } from '@/utils/request';

export const getUsers = () => new Promise((resolve, reject) => {
  request('GET', '/api/users/')
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const addUser = (user) => new Promise((resolve, reject) => {
  request('POST', '/api/users/', user)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const editUser = (id, user) => new Promise((resolve, reject) => {
  request('POST', `/api/users/${id}`, user)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const removeUser = (id) => new Promise((resolve, reject) => {
  request('POST', `/api/users/remove/${id}`)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});