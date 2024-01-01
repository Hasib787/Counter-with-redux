const actions = [
    {type: "increment", payload: 5},
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "decrement", payload: 1},
]

const initialState = {
    value: 0,
}

const counterReducer = (state, action)=>{
    if (action.type === "increment" ){
        return{
            ...state,
            value: state.value + action.payload,
        };
    }
    if (action.type === "decrement" ){
        return{
            ...state,
            value: state.value - action.payload,
        };
    }
}

const finalResult = actions.reduce(counterReducer, initialState);

console.log(finalResult);