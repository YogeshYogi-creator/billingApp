import React from 'react'
import BillsForm from './BillsForm'
const EditBill = (props) => {
    const {id, date, customer, lineItems, user, total, handleToggle} = props
    return (
        <div>
            <BillsForm id={id} date={date} customer={customer} lineItems={lineItems} user={user} total={total} handleToggle={handleToggle}/>
        </div>
    )
}
export default EditBill