import React from 'react'

function Alert(props) {
    const cap=(word1)=>{
        const lowr = word1.toLowerCase();
        console.log(lowr.charAt(0) + lowr.slice(1));
        return lowr.charAt(0).toUpperCase() + lowr.slice(1);
    }   
  return (
            <div style={{height:'40px'}}>
            {props.alert && 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{cap(props.alert.msg)}</strong>
            </div>}
            </div>
  )
}

export default Alert
