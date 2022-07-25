const initialState = {
    list : []
}

const signupReducers = (state=initialState,action) =>{
    switch (action.type) {
        case "SIGNUP_TODO" :
            const {id, data} = action.payload
            
            return {
                ...state,
                list:[
                    ...state.list,
                   data
                ]
            }
            default : return state;
      
    }
}


export default signupReducers