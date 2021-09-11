const BASE_URL = 'http://localhost:3000/api';

const fetchUtils = {
  get: async (path) => {
    const res = await fetch(`${BASE_URL}/${path}`);
    return await res.json();
  },
  delete: async (path) => {
    const res = await fetch(`${BASE_URL}/${path}`, {
      method: 'DELETE',
    });
    return await res.json();
  },
  post: async (path, data) => {
    return await fetch(`${BASE_URL}/${path}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
  },
  patch: async (path, data) => {
    return await fetch(`${BASE_URL}/${path}`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH'
    })
  }
}

export default fetchUtils;