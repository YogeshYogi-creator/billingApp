const initialRegistrationData = []

const registerationReducer = (state = initialRegistrationData, action) => {
    switch(action.type){
        case("REGESTER_DATA"):{
            return [...state, {...action.payload}]
        }
        case("CLEAR"):{
            return initialRegistrationData
        }
        default: {
            return [...state]
        }
    }
}
export default registerationReducer