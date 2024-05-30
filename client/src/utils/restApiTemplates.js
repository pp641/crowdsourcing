import baseApi from './baseApiUrl'


export const getData = async (endpoint, params = {}) => {
    try {
      const response = await api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error('GET request error:', error);
      throw error;
    }
  };


  export const getDataById = async (endpoint, id) => {
    try {
      const response = await api.get(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error('GET by ID request error:', error);
      throw error;
    }
  };

  
  export const postData = async (endpoint, body = {}) => {
    try {
      const response = await api.post(endpoint, body);
      return response.data;
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  };


  
export const putData = async (endpoint, id, body = {}) => {
  try {
    const response = await api.put(`${endpoint}/${id}`, body);
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};



export const deleteData = async (endpoint, id) => {
    try {
      const response = await api.delete(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error('DELETE request error:', error);
      throw error;
    }
  };




  