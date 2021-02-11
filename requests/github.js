import service from './service';

export const searchUsersApi = (user) => {
  return service.get(
    `https://api.github.com/users/${user}`,
    // `https://jsonplaceholder.typicode.com/users/1`,
    // `https://fir-89ca2.firebaseio.com/posts.json`,
  )
};

export const getUserReposApi = (user) => {
  return service.get(
    `https://api.github.com/users/${user}/repos?sort=updated&direction=desc&page=1&per_page=10`,
  )
};

export const getUserRepApi = ({id, name}) => {
  return service.get(
    `https://api.github.com/repos/${id}/${name}/contents`,
  )
};

export const getEventsApi = () => {
  return service.get(
    `https://api.github.com/events`,
  )
};