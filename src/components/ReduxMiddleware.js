import { createStore, applyMiddleware } from 'redux';


const initialState = {
    count:0
}
const reducerFunction = (state, action) =>{
    switch(action.type){
        case "INC": 
            return state+1;
        
        case "DEC": 
            return state-1;
        default:
        return state;
    }

}

const middleWare = applyMiddleware();

const store = createStore(reducerFunction, applyMiddleware);
