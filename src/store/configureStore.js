import {createStore, combineReducers, applyMiddleware} from 'redux'
import registerationReducer from '../reducers/registerationReducer'
import userProfileReducer from '../reducers/userProfileReducer'
import addCustomerReducer from '../reducers/addCustomerReducer'
import productReducer from '../reducers/productReducer'
import billsReducer from '../reducers/billsReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = (createStore(combineReducers({
        userRegistrationData: registerationReducer,
        userProfile: userProfileReducer,
        customers: addCustomerReducer,
        products: productReducer,
        bills: billsReducer
    }), applyMiddleware(thunk)))
    return store
}
export default configureStore