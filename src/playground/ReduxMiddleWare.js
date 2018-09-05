import { createStore, applyMiddleware } from 'redux';


const reducerFunction = (state =0, action) =>{
    switch(action.type){
        case "INC": 
            return state+1;
        
        case "DEC": 
            return state-1;
        case "E":
            throw new Error("AHHHHH");
        default:
        return state;
    }

}

const logger = (state) =>(next) =>(action) =>{
    console.log("action fired ", action);
    action.type = "DEC";
    next(action);
}

const error = (state) =>(next) =>(action) => {
    try{
        next(cation);
    }catch(e){
        console.log("This is print every time");
    }
}
const middleWare = applyMiddleware(logger,error);

const store = createStore(reducerFunction, middleWare);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
  // document.body.innerText = store.getState();
});

store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"E"})