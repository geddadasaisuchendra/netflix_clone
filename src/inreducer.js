const intialstate={
    title:null,
    img:null,
    ageGroup:null,
    dec:null
}

export default function inreducer(state=intialstate,action){
    const {type,payload}=action;
    switch(type){
        case "SET":
            return {...state,title:payload.title,img:payload.img,ageGroup:payload.ageGroup,dec:payload.dec}
        default:
            return state
    }
}