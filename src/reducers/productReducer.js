const initialProducts = []

const productReducer = (state = initialProducts, action) =>{
    switch(action.type){
        case("ADD_PRODUCTS"):{
            return [...state, {...action.payload}]
        }
        case("GET_PRODUCTS"):{
            return [...action.payload]
        }
        case("REMOVE_PRODUCT"):{
            return state.filter(ele=> ele._id !== action.payload)
        }
        case("EDIT_PRODUCT"):{
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
export default productReducer