const initialProfileData = {}

const userProfileReducer = (state=initialProfileData, action) => {
    switch(action.type){
        case("USER_PROFILE"):{
            return {...action.payload}
        }
        case("CLEAR"):{
            return initialProfileData
        }
        default:{
            return state
        }
    }
}
export default userProfileReducer