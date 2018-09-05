import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleWare = applyMiddleware(promise(),logger,thunk);

const intialState = {
    featching:true,
    featched:false,
    data:'',
    error:''
}

const reducer = (state = 0, action) =>{
    switch(action.type){
        case "FETCH_USER": 
            return {...state, featching:false}
        case "RECIEVE_USER": 
            return {...state, featching:true,featched:true,data:action.user};
        case "FETCH_FAILED":
            return {...state,error:action.error}
        default:
        return state;
    }

}

const store = createStore(reducer, middleWare);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
    type:'FETCH_USER',
    payload:  fetch('https://jsonplaceholder.typicode.com/todos/1')            
                 .then(response => response.json())
                 .then(myJson => myJson)
});


// store.dispatch((dispatch) => {
//     dispatch({type:"FETCH_USER"});
//     fetch('https://jsonplaceholder.typicode.com/todos/1')            
//             .then(response => response.json())
//             .then(myJson => {
//                 dispatch({
//                     type:"RECIEVE_USER",
//                     user:myJson
//                 });
//             }).catch((error)=>{
//                 type:"FETCH_FAILED",
//                 error
//             })
        

// });