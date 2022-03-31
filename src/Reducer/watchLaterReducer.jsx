export const watchLaterReducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_WATCH":
            return {...state,watchLaterArray:[...action.payload]}
        default:
            return state
    }
}