const initialBills = []

const billsReducer = (state=initialBills, action)=>{
    switch(action.type){
        case("ADD_BILLS"):{
            return [...state, {...action.payload}]
        }
        case("GET_BILLS"):{
            return [...action.payload]
        }
        case("REMOVE_BILL"):{
            return state.filter(ele=>ele._id !== action.payload)
        }
        case("EDIT_BILL"):{
            return state.map(ele=>{
               if( ele.id === action.payload._id){
                    return {...ele, ...action.payload}
               }else{
                   return {...ele}
               }
            })
        }
        default:{
            return [...state]
        }
    }
}
export default billsReducer