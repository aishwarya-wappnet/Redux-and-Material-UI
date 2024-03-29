# Redux

<p align="center">
<img src="https://user-images.githubusercontent.com/123728432/222125342-fed899ec-5855-4e98-a7da-32b0389a6a68.png" style=" width:600px ; height:400px ">
</p>

### If the data present in the component which is in the 3rd level is required by the component present in the 2nd level, then how it can be done ?
- The data in react always flows from parent to child components which makes it unidirectional.
- Without context, the same data is being sent at almost every level due to requirements in the final level which is called Prop Drilling.
- With context, it easy to pass data throughout your app without manually passing props down the tree with the help of consumers and providers. Its a simple alternative to Redux.

<p align="center"><img src="https://user-images.githubusercontent.com/123728432/222126590-faa0c981-d4cf-4d7e-a3d3-08413cc9088a.png" style=" width:500px ; height:300px"> <img src="https://user-images.githubusercontent.com/123728432/222126665-ebdfaad1-1d1a-422b-9ae5-882a14008c4a.png" style=" width:500px ; height:300px "  ></p>

### Why redux?

- Redux helps you manage "global" state - state that is needed across many parts of your application.
- The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.

### What is Redux?

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
- In redux, we will store data in the separate store and with the help of this store, any component in the need of that data will get it from the call to redux(store).
- Hence, in redux there is a separate centralized store where we store complete application states, and any component in the need of the data will call the store and this call to the store is different in redux.

## In this App, we have created a Incrementor/Decrementor Counter using Redux.

<p align="center">
<img src="https://user-images.githubusercontent.com/123728432/222138169-8f9a0e1e-be31-4ca7-aad6-c1e4c0d02c5d.png" style=" width:600px ; height:300px ">
</p>

### 1 ACTION(What to do?)
Actions are pure objects. Actions are plain javascript objects that have a type field. Actions only tell what to do, but they dont tell how to do.
```
return {
 type: 'INCREMENT'
 payload: num
}

return {
 type: 'DECREMENT'
 payload: num
}
```
## Who creates action?
### 1.1 ACTION CREATOR
Pure function which creates an action which are reusable, portable and easy to test.
```
**In src/actions/index.js**

export const incNumber = (num) => {
 return {
 type: 'DECREMENT'
 payload: num
 }
}
export const decNumber = (num) => {
 return {
 type: 'DECREMENT'
 payload: num
 }
}
```
## We need to do two actions Increment and decrement but HOW TO DO?
### 2 REDUCER(How to do?)

Reducers are functions that take the current state and an action as arguments, and returns a new state result.
For eg, in the given image above, current state is raw apple and the mechanism turns it into a juice. The juice is the new state.
```
**In src/reducers/upDown.js**

const changeTheNumber = (state = initialState, action) => {
 switch(action.type){
  case 'INCREMENT': return state + action.payload;
  case 'DECREMENT': return state - 1;
  default: return state;
 }
}

There may be many reducers in an applicatin, so we combine all of them in one. The above 'upDown.js' reducer is combined in actions/index.js.
```
### 3 STORE(Object which holds the state of the application)
The redux store brings together the state, actions, and reducers that make up your app. Its important to note that you'll only have a single store in Redux application.
Every Redux store has a single root reducer function.
```
**In src/store.js**

import {createStore} from 'redux';
const store = createStore(rootReducer);
```
### 4 Import the store and connect it with the Provider 
- Now the created store is to be imported in the main application (**here src/main.jsx**). 
- Import the Provider from 'react-redux' which makes the Redux store available to any nested components that need to access the Redux store.
- Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.(Here, it is provided to **<App/> in src/main.jsx**. Now any component can get the data from the store as we provided the centralized data to main app. )

### 5 Access the store 
- Import useSelector from the react-redux library in the component you want to access the store.
- In react context Api, we have consumers. In useContext hook, we have useContext. In redux, we have useSelector.
- useSelector is a function that takes the current state as an argument and returns whatever data you want from it.
- when you provide the data/store with the Provider to the main app, the small components can easily access/get the store with the help of useSelector
- You cannot call the actions simply by importing useSelector in the component you want to use the store. You need to use useDispatch() hook which will trigger the action. 
- To dispatch an action to the store, import useDispatch and implement it to the scope of the functional component.
- useDispatch is a function that we import from react-redux library and assign it to a variable. And with this, we are able to dispatch any action to the store by simply adding an action as an argument to the new variable like the code in **src/App.jsx**.

## Redux

- Redux is built on top of functional programming principles.
- Functional programming is about decomposing a problem into a bunch of small reusable functions that take some  input and return a result. They do not mutate or change  data. The idea of functional programming is to write small and resuable functions and compose them to build more complex functions for solving real world problems
- Bcoz:
  - More concise
  - Easier to debug
  - Easier to test
  - More scalable
 - Functions as first-class citizens coz you can(we can treat them as any other variable)
 - Functions are called first-class citizens because they have all of these abilities. In other words, functions in a programming language can be treated just like any other value, such as integers or strings.
- In summary, functions are called first-class citizens because they have the same abilities and properties as other entities in a programming language, including the ability to be passed as arguments, returned as values, and assigned to variables.
  - Assign to a variable
  - Pass as an argument
  - Return from other functions
 - Higher order functions are functions that take function as an argument or  returns it or both. So instead of working on strings, no, booleans it goes higher to operate on functions
- Benefits of pure functions:
  - Self-documenting
  - Easily testable
  - Concurrency
  - Cacheable
- Strings are immutable in javascript
- Objects and arrays are not immutable/are mutable
- Javascript is not a pure functional language. In pfl we cannot mutate data
- When you are using const, you are not creating immutable object.
We can declare const book = {}
change its properties: book.title = 'Demons'
With const, we cannot reassign book to different object
Const prevents reassignments
- Why immutability?
  - Predictability
  - Faster change detection
  - Concurrency

- Cons:
  - Performance
  - Memory Overhead

- If you are building apps with redux, you should not mutate data coz that's the fundamental principle in redux
