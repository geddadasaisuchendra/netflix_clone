const intialstate={
    items:null
}

export default function shReducer(state=intialstate,action){
    const {type,payload}=action;
    switch(type){
        case "ADD":
            return {...state,items:payload}
        default:
            return state        
    }
}