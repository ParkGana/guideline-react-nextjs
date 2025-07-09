const BASE_URL = 'http://localhost:5000';

const api = {
  get: async (url: string, params?: any, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}${params ? `?${new URLSearchParams(params).toString()}` : ''}`, {
      method: 'GET',
      ...(headers && { headers })
    });
    if (!res.ok) {
      const error = await res.json().catch((e: any) => e);
      throw new Error(`Fail to GET ${url} -> ${error.message}`);
    }
    return res.json();
  },

  post: async (url: string, data?: any, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      ...(headers && { headers }),
      ...(data && { body: JSON.stringify(data) })
    });
    if (!res.ok) {
      const error = await res.json().catch((e: any) => e);
      throw new Error(`Fail to POST ${url} -> ${error.message}`);
    }
    return res.json();
  },

  patch: async (url: string, data?: any, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'PATCH',
      ...(headers && { headers }),
      ...(data && { body: JSON.stringify(data) })
    });
    if (!res.ok) {
      const error = await res.json().catch((e: any) => e);
      throw new Error(`Fail to PATCH ${url} -> ${error.message}`);
    }
    return res.json();
  },

  delete: async (url: string, headers?: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      ...(headers && { headers })
    });
    if (!res.ok) {
      const error = await res.json().catch((e: any) => e);
      throw new Error(`Fail to DELETE ${url} -> ${error.message}`);
    }
    return res.json();
  }
};

export default api;
