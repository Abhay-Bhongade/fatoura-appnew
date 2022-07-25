const initialState = {
    list : []
}

const addReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "ADD_DATA" :
            const {id, data} = action.payload
            
            return {
                ...state,
                list:[
                    ...state.list,
                   data
                ]
            }

            
            case "RMV_ONE" : 
            const newList = state.list.filter((ele)=>ele.id !== action.id)

            return {
                ...state,
                list:[ newList],
            }


            default : return state;
      
    }
}


export default addReducer