import axios from 'axios';

export default async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return response.data.results;
};
