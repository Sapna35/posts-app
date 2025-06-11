export const MOCK_API_BASE_URL = 'https://jsonplaceholder.typicode.com';


export const POSTS_ENDPOINT = `${MOCK_API_BASE_URL}/posts`;


export const BACKEND_API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:3001/api';


export const API_KEY = process.env.NEXT_PUBLIC_API_KEY || 'your-api-key';

export const ANALYSIS_API = process.env.NEXT_PUBLIC_ANALYSIS_API!;
