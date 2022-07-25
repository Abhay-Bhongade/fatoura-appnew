const initialState = {
    list : []
}

const todoReducers = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD_TODO" :
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


export default todoReducers