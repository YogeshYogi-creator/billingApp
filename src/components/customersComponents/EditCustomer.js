import React from 'react'
import CustomerForm from './CustomerForm'
const EditCustomer = (props) => {
    const {id, name, mobile, email, user, createdAt, updatedAt, handleToggle} = props
    return (
        <div>
            <CustomerForm id = {id} name={name} number={mobile} email={email} 
                    user={user} createdAt={createdAt} updatedAt={updatedAt} 
                    handleToggle = {handleToggle}/>
        </div>
    )
}
export default EditCustomer