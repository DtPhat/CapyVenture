import { BASE_URL } from '../constants';

const fetcherJWT = (method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH') =>
  async (endpoint: string, data?: {}) => {
    const token = localStorage.getItem('token');

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      ...(data && { body: JSON.stringify(data) })
  });

if (!response.ok) {
  if (response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    window.location.href = '/'
    throw new Error('Unauthorized');
  }
  throw new Error('An error occurred while fetching the data.');
}

return response.json();
  };

export const fetcherPublic = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  return response.json();
};

export const fetcher = fetcherJWT('GET')
export const postFetcher = fetcherJWT('POST')
export const deleteFetcher = fetcherJWT('DELETE')
export const putFetcher = fetcherJWT('PUT')

