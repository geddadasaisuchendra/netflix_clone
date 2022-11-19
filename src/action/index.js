export const Add=(value)=> async dispatch =>{
    dispatch(
        {
            type:"ADD",
            payload:value
        }
    )
}

export const set=(title,img,ageGroup,dec)=> async dispatch =>{
    dispatch(
        {
            type:"SET",
            payload:{
                title:title,
                img:img,
                ageGroup:ageGroup,
                dec:dec,
            }
        }
    )
}