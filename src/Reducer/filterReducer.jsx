export const filterReducer = (state,action)=>{
    switch(action.type){
        case "ALL":
            return {...state,category:{all:true}}
        case "BASKETBALL":
            return {...state,category:{basketball:true}}
        case "CRICKET":
            return {...state,category:{cricket:true}}
        case "BADMINTON":
            return {...state,category:{ badminton:true}}
        case "FOOTBALL":
            return {...state,category:{football:true}}
        case "LATEST":
            return { ...state, latest: !state.latest };
        default:
            return state;
        
    }
}