import { createAsyncThunk } from "@reduxjs/toolkit"
import { http } from "../apis/AxiosConfig"

//string type
export const userLogin = createAsyncThunk('user/login',
  // callback function
  async ({ email, password }, { rejectWithValue }) => {
  try {
    // make request to backend
    const  data  = await http.post('/users/sign_in', { user: {email: email, password: password} })
    localStorage.setItem('userToken', data.headers.authorization)
    return data.data
      }
    catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message)
      } else {
      return rejectWithValue(error.message)
      }
    }
    
  }
)
export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState()

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }
      const { data } = await http.get(`/api/v1/profile`, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)


  // In the code block above, we've taken the values from the register form and made a POST request to the register route using Axios. In the event of an error, thunkAPI.rejectWithValue sends the custom error message from the backend as a payload to the reducer. You may notice that the register API is called without referencing the server's base URL.
  