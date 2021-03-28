const initialAddedCustomer = []

const addCustomerReducer = (state=initialAddedCustomer, action) => {
    switch(action.type){
        case("ADD_CUSTOMER"):{
            return [...state, {...action.payload}]
        }
        case("GET_CUSTOMERS"): {
            return [...action.payload]
        }
        case("REMOVE_CUSTOMER"): {
            return state.filter(ele=>ele._id !== action.payload)
        }
        case("EDIT_CUSTOMER"):{
            return state.map(ele=>{
               if( ele._id === action.payload._id){
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
export default addCustomerReducer