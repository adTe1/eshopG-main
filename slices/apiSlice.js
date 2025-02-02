import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../final-main/src/utils/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL, // Use the base URL for all API requests
});

export const apiSlice = createApi({
  baseQuery, // Use the simplified baseQuery without logout
  tagTypes: ['Product', 'Order', 'User'], // Define cache tags for invalidation
  endpoints: (builder) => ({}), // Endpoints will be injected in other slices
});
