import {createStore} from "redux";
const INITIAL_VALUE ={ 
    counter: 0,
    privacy: false,
};
//Reducer function 
const counterReducer = (store = INITIAL_VALUE, action) => {
    
    
    if(action.type === "INCREMENT"){
        return {...store, counter: store.counter + 1}
    } else if (action.type === "DECREMENT"){
        return {...store, counter: store.counter - 1}
    } else if (action.type === "TOGGLE"){
        return {...store, privacy: !store.privacy}
    }
    return store;

}


const counterStore = createStore(counterReducer);

export default counterStore;