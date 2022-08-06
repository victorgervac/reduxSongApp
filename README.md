# REDUX :
## toolkit createStore

- **ACTION CREATOR: function return an action object with type and (optional) payload**
- **produces and returns an action**
- **gets fed to dispatch**
- **forwards to middleware(this gets added with thunk(axios to work with async))(we can have manny)**
- **sends action to all reducers**
- **creates new state**
- **waits till we update the state**

### Middleware is a function that gets called when an action is dispatched
- middleware lets you wrap the store's dispatch method
- stop or modify the action before it gets to the reducer
- middleware is to support asynchronous actions
- `https://redux.js.org/api/applymiddleware`

### THUNK(helps with axios):{takes "something" function?  dispatch and getState: nothing pass to reducers  }
- redux-thunk lets the action creators invert control by dispatching functions
- receive dispatch as an argument and may call it asynchronously
- handdle action creators but not primary job
- action creators can return action objects 
or
- actions creators can return functions 
- if an objects gets returned it must have a type(payload optional)

### ACTION creators must return plain javascript objects with a type property 
- by the time our actions gets to a reducer we wont have fetched our data
- es2015 syntax for destructuring
- async await gets transformed into es2015 syntax

- **bad syntax**

      export const fetchPosts = async () => {
        const res = await JSONPlaceholder.get("/posts");
        return {
          type: 'FETCH_POSTS'
          payload: res
        };
      }

- no async promise and action redux to fast to wait for promise to return --use the thunk middleware
- asynchronous action creators take some amount of  time for to get its data ready to go
- a function that returns a async function(set up in app.js)

- **good stuff**

      export const fetchPosts = () => async dispatch => {
        //dummy (()=>()) //when intiall setup to not get error
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
      };


### REDUCER watching actions with type fetch post and get data

- import here create indivudual 
- each reducer gets called one time on open app
- must return any value but never undefined  
- produce state or data that to be used inside of your app using only previous state and the action
- must not return reach out of itself to decide what value to return 
- keep reducer pure!!
      //bad return axios.get('/posts')
      //good state + action 
      //must NOT! mutate its input state argument 
- (misleading i guess--conner case: you can `https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts` bottom code runs reducer read code)
  (mutate):

      const numbers = [1,2,3]
      numbers === numbers //true
      numbers === [1,2,3] //false //when not primitive js check if its the same in  memory
- **this is a reducer code (always return brand new arays and objects!!)**
- **two arguments the same order ALWAYS exiciting that belongs to this part of** **the state(department)**
- **the old data and the action or form of data that is being sent to the reducer**

          const selectedSongReducer = (selectedSong = null, action) => {
              //if the action type is SONG_SELECTED then return the payload of the action  
            if (action.type === 'SONG_SELECTED') {
              return action.payload;
            } 
              //other wise just return the selectedSong no action needed 
            return selectedSong;
          };`

### Redux DevTools 
- `https://github.com/reduxjs/redux-devtools`

- [UdemySetupDev](https://www.udemy.com/course/react-redux/learn/lecture/12700653#content)

- hhtp:localhost:3000/debug_session = $<session_logged_in>

- simple way(basic)
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));


### toolkit 
`https://redux-toolkit.js.org/introduction/getting-started`
- **toolkit is a library that helps you create a store**
- Redux Toolkit introduces a new way of creating a store. It separates parts of the store into different files, known as slices.
- A slice represents a single unit of the Redux state. It’s a collection of reducer logic and actions for a single feature in your app, typically defined together in a single file. 

- createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
- createSlice() returns an object with the following properties:
  - reducer: the slice reducer function
  - actions: an object with action creators
  - actionTypes: an object with action types
  - name: the name of the slice
  - initialState: the initial state of the slice

- `createAsyncThunk` accepts three parameters: a string action type, a callback function, and an optional options object.
- The callback function is an important parameter as it has two key arguments that you should take into consideration:

    - `arg`: this is the single value passed into the dispatch method when the action is called. If you need to pass multiple values, you can pass in an object
    - `thunkAPI`: an object containing parameters normally passed to a Redux thunk function. Parameters include getState, dispatch, rejectWithValue, and more

