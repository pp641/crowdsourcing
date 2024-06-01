import baseApi from './baseApiUrl'


export const getData = async (endpoint, params = {}, token = '') => {
  try {
    const response = await baseApi.get(endpoint, {
      params,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const getDataById = async (endpoint, id, token = '') => {
  try {
    const response = await baseApi.get(`${endpoint}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('GET by ID request error:', error);
    throw error;
  }
};

export const postData = async (endpoint, body = {}, token = '') => {
  try {
    const response = await baseApi.post(endpoint, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export const putData = async (endpoint, id, body = {}, token = '') => {
  try {
    const response = await baseApi.put(`${endpoint}/${id}`, body, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

export const deleteData = async (endpoint, id, token = '') => {
  try {
    const response = await baseApi.delete(`${endpoint}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};


  