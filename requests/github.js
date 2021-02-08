import service from './service';

export const searchUsersApi = (user) => {
  return service.get(
    `https://api.github.com/users/${user}`,
    // `https://jsonplaceholder.typicode.com/users/1`,
    // `https://fir-89ca2.firebaseio.com/posts.json`,
  )
};

export const getUserRepoApi = (user) => {
  return service.get(
    `https://api.github.com/users/${user}/repos`,
  )
};