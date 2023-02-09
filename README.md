# React
#REDUX WITHOUT REACT (v-5)
This is a redux project
Create a folder(.vscode) 
Create a file (redux-demo)
cd into the folder 
npm install
npm install redux 
In the file - (redux- demo.js)
1. Import it
2. Create a store (storing all data and manages with reducer function)
3. Create Reducer function before the store , inputs are old state + dispatched state
 We have both store and reducer , they work together to get state
4. We add another reducer function for change of state called subsriber function 
We have reducer and subscriber
5. write dispatch function 


#REDUX WITH REACT APPLICATION (v-7)
Connecting react with redux 
1. Follow the above steps , create reducer , subscriber (here, redux file or index.js )
2. Go to index.js and wrap the <App/> with the <Provider></Provider>

How to use redux in a component - function based (v.10)
1. import useSelector inside the file
2. useSelecter as a function and pass state.function name used in redux file(eg: counter in this case)
By doing this , we get the data 

#how to change that data (v.11)
1. We use useDispatch hook  , import it 
2. create a dispatch function   const dispatch = useDispatch();
3. write other fucntions to change the data ( here, increment and decrement ) used in redux file
4. pass that function (here button so onClick(function1))


#ATTACHING PAYLOADS TO ACTIONS
1. U don't have to write code everytime , you can use "action"
(v.13)(eg: increase by 5 , action.amount and pass amount in component)

#WORKING WITH MULTIPLE STATE PROPERTIES (v.14)
1. There are 2 states , counter and show counter and follow same steps 

#HOW TO WORK WITH REDUX STATE CORRECTLY(v.15)
Never change the original state 

#REDUX TOOLKIT - To avoid identifier name mismatch and many more (v.16)

#ADDING STATE SLICes(v.17)
A slice is the portion of Redux code that relates to a specific set of data and actions within the store 's state. A slice reducer is the reducer responsible for handling actions and updating the data for a given slice.
1. npm install @reduxjs/toolkit (redux is included here)
2. import {createSlice} from '@reduxjs/toolkit';
3. then create , createSlice function


#Connecting redux toolkit state and slice(v.18)
1. removing all (the if under) counterReducer as we write it using createSlice , unique actions are create 
2. Pass that through configureStore


#HOW TO USE ACTIONS (v.19)
1. export const counterActions = counterSlice.actions;
2. Go to component and change in dispatch

#WORKING WITH MULTIPLE SLICES(v.20)
1. use createSlice() again 
2. You can have multiple slices , but one store only
3. Adding the slice to the store now 

#READING AND DISPATCHING NEW SLICE(v.21)
1. Now in the component , import useSelector
2. call useSelector and pass function and state as argument  i.e, useSelector(state => state.auth.isAuthenicated) where auth used in store and isAuthenticated used and assign to an identifer
3. Then dispatch

#SPLITTING THE REDUX FILE (HERE Index.js)(v.22)

#SUMMARY
SO, BASICALLY
1. Create components , import redux toolkit
2. Create index.js(redux main file)
3. In index.js we will write slices and one store where we pass slices
4. We export them 
5. Now in the component , import useSelector
6. call useSelector and pass function and state as argument  i.e, useSelector(state => state.auth.isAuthenicated) where auth used in store and isAuthenticated used and assign to an identifer
7. Inside the store we use 
8. This is redux
9. complete program
