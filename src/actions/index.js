// import { http } from '../apis/AxiosConfig'

// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
}
export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}
// export const  fetchUser = (id) => async dispatch =>{
//   const response = await http.post('/users/sign_in',)

//   dispatch ({type: 'FETCH_USER', payload: response.data})
// }