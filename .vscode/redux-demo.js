
const redux = require('redux'); //importing
const redux_mock_store = require("redux-mock-store")
const configureStore = redux_mock_store.configureStore

const counterReducer = (state = {counter: 0},action) => {
    return {
        counter: state.counter + 1 
    };
};
const store = redux.configureStore(counterReducer); 


const counterSubscriber = () => {
 const latestState = store.getState();
 console.log(latestState);
}; //to get latest state
store.subscribe(counterSubscriber);