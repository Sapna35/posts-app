import axios from 'axios';


const MOCK_API = 'https://jsonplaceholder.typicode.com/posts';


const BACKEND_API = '/api/posts';


const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';


const secureHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
};


export const getPosts = async () => {
  try {
    const response = await axios.get(MOCK_API);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


export const getPostById = async (id: number | string) => {
  try {
    const response = await axios.get(`${MOCK_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post ID ${id}:`, error);
    throw error;
  }
};


export const createPost = async (postData: { title: string; body: string }) => {
  try {
    const response = await axios.post(BACKEND_API, postData, {
      headers: secureHeaders,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};


export const updatePost = async (
  id: number | string,
  updatedData: { title?: string; body?: string }
) => {
  try {
    const response = await axios.put(`${BACKEND_API}/${id}`, updatedData, {
      headers: secureHeaders,
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating post ID ${id}:`, error);
    throw error;
  }
};
