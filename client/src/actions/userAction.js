import axios from 'axios';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from './types';

import { USERS_URL } from '../constants';

export const getUsers = () => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_LIST_REQUEST });
  
      const {
        auth: { token },
      } = getState();
  
      const config = {
        headers: { Authorization: `Bearer ${token}` }, 
      };
  
      // GET /api/v1/orders
      const { data } = await axios.get(USERS_URL, config);
      console.log('Server Data:', data);
      const user = data.data;
      
      dispatch({ type: USER_LIST_SUCCESS, payload: user });
    } catch (error) {
      dispatch({
        type: USER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  // DELETE api/v1/users/:id
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
      dispatch({ type: USER_DELETE_REQUEST });

      const {
          auth: { token },
      } = getState();

      const config = {
          headers: { Authorization: `Bearer ${token}` },
      };

      await axios.delete(`${USERS_URL}/${id}`, config);

      
      dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
      dispatch({
          type: USER_DELETE_FAIL,
          payload:
              error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
      });
  }
};