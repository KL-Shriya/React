

const redux = require('redux'); //importing




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

store.dispatch({type: 'increment'});
