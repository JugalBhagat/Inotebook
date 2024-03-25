import React from 'react'

function Alert(props) {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
            <a href="#" class="alert-link">{props.msg}</a>
            </div>
        </div>
    )
}

export default Alert
